import Phaser from "phaser";

const COLORS = {
  aqua: 0x119da4,
  blue: 0x19647e,
  yellow: 0xffc857,
  ink: 0x1f2041,
  purple: 0x4b3f72,
};

const STATION_COLORS = {
  about: COLORS.yellow,
  projects: COLORS.purple,
  resume: COLORS.aqua,
  contact: COLORS.yellow,
};

export class PortfolioScene extends Phaser.Scene {
  constructor() {
    super("PortfolioScene");
  }
  preload() {
    this.load.tilemapTiledJSON("studio-01", "maps/studio-01.json");
    this.load.image("player", "assets/player.svg");
  }
  create() {
    this.map = this.make.tilemap({ key: "studio-01" });
    this.drawRoom();
    this.createPlayer();
    this.createMapObjects();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys("W,A,S,D,E,ENTER");
    this.input.keyboard.on("keydown-E", () => this.interact());
    this.input.keyboard.on("keydown-ENTER", () => this.interact());
    this.prompt = this.add
      .text(0, 0, "", {
        fontFamily: "DM Sans",
        fontSize: "16px",
        color: "#1f2041",
        backgroundColor: "#ffc857",
        padding: { x: 12, y: 8 },
      })
      .setDepth(10)
      .setOrigin(0.5)
      .setVisible(false);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.physics.world.setBounds(62, 62, this.map.widthInPixels - 124, this.map.heightInPixels - 124);
  }
  drawRoom() {
    const roomWidth = this.map.widthInPixels;
    const roomHeight = this.map.heightInPixels;
    const art = this.add.graphics();
    art.fillStyle(COLORS.ink).fillRect(0, 0, roomWidth, roomHeight);
    art
      .fillStyle(COLORS.blue)
      .fillRect(62, 62, roomWidth - 124, roomHeight - 124);
    art
      .lineStyle(4, COLORS.aqua)
      .strokeRect(62, 62, roomWidth - 124, roomHeight - 124);
    art.lineStyle(1, COLORS.purple, 0.7);
    for (let x = 90; x < roomWidth - 70; x += 48)
      art.lineBetween(x, 90, x, roomHeight - 90);
    for (let y = 90; y < roomHeight - 70; y += 48)
      art.lineBetween(90, y, roomWidth - 90, y);
    art.fillStyle(COLORS.ink).fillRect(86, 86, roomWidth - 172, 70);
    this.add.text(116, 105, "STUDIO 01", {
      fontFamily: "DM Sans",
      fontSize: "18px",
      color: "#ffc857",
      letterSpacing: 3,
    });
    this.add.text(roomWidth - 194, 106, "LOCAL / 2026", {
      fontFamily: "DM Sans",
      fontSize: "14px",
      color: "#119da4",
    });
    this.walls = this.physics.add.staticGroup();
  }
  createPlayer() {
    const startX = this.map.properties.find(({ name }) => name === "playerStartX").value;
    const startY = this.map.properties.find(({ name }) => name === "playerStartY").value;
    this.player = this.physics.add
      .sprite(startX, startY, "player")
      .setScale(1.2)
      .setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.walls);
  }
  createMapObjects() {
    const objectLayer = this.map.getObjectLayer("interactions");
    this.stationObjects = [];
    objectLayer.objects.forEach((object) => {
      const properties = Object.fromEntries((object.properties ?? []).map(({ name, value }) => [name, value]));
      const width = object.width || 10;
      const height = object.height || 10;
      if (object.type === "wall") {
        const wall = this.add.rectangle(object.x + width / 2, object.y + height / 2, width, height, COLORS.ink);
        this.physics.add.existing(wall, true);
        this.walls.add(wall);
        return;
      }
      if (object.type === "station") {
        const color = STATION_COLORS[properties.id] ?? COLORS.aqua;
        const x = object.x + width / 2;
        const y = object.y + height / 2;
        const station = { id: properties.id, label: properties.label, x, y, color };
        const body = this.add.rectangle(x, y, width, height, color, 0.95).setStrokeStyle(4, COLORS.ink);
        this.physics.add.existing(body, true);
        this.walls.add(body);
        this.add.text(x, object.y + height + 17, properties.label, { fontFamily: "DM Sans", fontSize: "14px", color: "#ffc857" }).setOrigin(0.5);
        this.add.circle(x, object.y - 11, 6, color).setStrokeStyle(2, COLORS.yellow);
        this.stationObjects.push({ ...station, body });
      }
    });
  }
  interact() {
    if (this.nearbyStation) window.openPortfolioModal?.(this.nearbyStation.id);
  }
  update() {
    if (!this.player) return;
    const velocity = new Phaser.Math.Vector2(0, 0);
    if (this.cursors.left.isDown || this.keys.A.isDown) velocity.x = -1;
    if (this.cursors.right.isDown || this.keys.D.isDown) velocity.x = 1;
    if (this.cursors.up.isDown || this.keys.W.isDown) velocity.y = -1;
    if (this.cursors.down.isDown || this.keys.S.isDown) velocity.y = 1;
    velocity.normalize().scale(190);
    this.player.setVelocity(velocity.x, velocity.y);
    const nearby = this.stationObjects.find(
      (station) =>
        Phaser.Math.Distance.Between(
          this.player.x,
          this.player.y,
          station.x,
          station.y,
        ) < 125,
    );
    this.nearbyStation = nearby;
    this.prompt.setVisible(Boolean(nearby));
    if (nearby)
      this.prompt
        .setPosition(nearby.x, nearby.y - 110)
        .setText(`E  ${nearby.label}`);
  }
}
