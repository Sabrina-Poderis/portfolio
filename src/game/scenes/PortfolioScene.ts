import Phaser from "phaser";
import type { PortfolioProfile } from "../../types/portfolio";

const COLORS = {
  wall: 0xd8bd91,
  wallShadow: 0xa77b5c,
  floor: 0xb77d5d,
  floorLight: 0xc98e6b,
  floorDark: 0x98664e,
  wood: 0x75463b,
  woodLight: 0xc27a4d,
  cream: 0xf3dfa9,
  ink: 0x493d4c,
  green: 0x66866a,
  teal: 0x4c8982,
  rose: 0xc97870,
  paper: 0xf4e7c2,
};
const PLAYER_FRAME = { width: 32, height: 40 };

export class PortfolioScene extends Phaser.Scene {
  private map: any;
  private walls: any;
  private player: any;
  private stationObjects: any[] = [];
  private nearbyStation: any;
  private cursors: any;
  private keys: any;
  private prompt: any;
  private profile?: PortfolioProfile;
  private touchDirection = { x: 0, y: 0 };

  constructor() {
    super("PortfolioScene");
  }

  preload(): void {
    this.load.tilemapTiledJSON("studio-01", `${import.meta.env.BASE_URL}maps/studio-01.json`);
    this.load.image("player", `${import.meta.env.BASE_URL}assets/player.svg`);
  }

  init(): void {
    this.profile = window.selectedPortfolioProfile;
  }

  create(): void {
    this.map = this.make.tilemap({ key: "studio-01" });
    this.drawRoom();
    this.createPlayer();
    this.createMapObjects();
    this.cursors = this.input.keyboard?.createCursorKeys();
    this.keys = this.input.keyboard?.addKeys("W,A,S,D,E,ENTER");
    this.input.keyboard?.on("keydown-E", () => this.interact());
    this.input.keyboard?.on("keydown-ENTER", () => this.interact());
    window.addEventListener("portfolio-touch-move", this.handleTouchMove);
    window.addEventListener("portfolio-touch-stop", this.handleTouchStop);
    window.addEventListener("portfolio-touch-interact", this.interact);
    this.prompt = this.add.text(0, 0, "", { fontFamily: "DM Sans", fontSize: "16px", color: "#1f2041", backgroundColor: "#ffc857", padding: { x: 12, y: 8 } }).setDepth(10).setOrigin(0.5).setVisible(false);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.physics.world.setBounds(40, 40, this.map.widthInPixels - 80, this.map.heightInPixels - 80);
  }

  shutdown(): void {
    window.removeEventListener("portfolio-touch-move", this.handleTouchMove);
    window.removeEventListener("portfolio-touch-stop", this.handleTouchStop);
    window.removeEventListener("portfolio-touch-interact", this.interact);
  }

  private handleTouchMove = (event: Event): void => {
    const direction = (event as CustomEvent<{ x: number; y: number }>).detail;
    this.touchDirection = direction;
  };

  private handleTouchStop = (): void => {
    this.touchDirection = { x: 0, y: 0 };
  };

  private drawRoom(): void {
    const roomWidth = this.map.widthInPixels;
    const roomHeight = this.map.heightInPixels;
    const art = this.add.graphics();
    art.fillStyle(COLORS.wall).fillRect(0, 0, roomWidth, roomHeight);
    art.fillStyle(COLORS.wallShadow).fillRect(0, 112, roomWidth, 12);
    art.fillStyle(COLORS.cream).fillRect(0, 120, roomWidth, 8);

    art.fillStyle(COLORS.floor).fillRect(40, 128, roomWidth - 80, roomHeight - 168);
    for (let y = 128, row = 0; y < roomHeight - 40; y += 24, row += 1) {
      const offset = row % 2 === 0 ? 0 : 48;
      art.fillStyle(COLORS.floorDark, 0.22).fillRect(40, y + 22, roomWidth - 80, 2);
      for (let x = 40 - offset; x < roomWidth - 40; x += 96) {
        if (x >= 40) art.fillStyle(COLORS.floorDark, 0.18).fillRect(x, y, 2, 22);
        if (x + 48 >= 40 && x + 48 < roomWidth - 40) {
          art.fillStyle(COLORS.floorLight, 0.28).fillRect(x + 48, y + 3, 2, 16);
        }
      }
    }

    art.fillStyle(COLORS.wallShadow).fillRect(32, 32, roomWidth - 64, 8);
    art.fillStyle(COLORS.wallShadow).fillRect(32, 32, 8, roomHeight - 64);
    art.fillStyle(COLORS.wallShadow).fillRect(roomWidth - 40, 32, 8, roomHeight - 64);
    art.fillStyle(COLORS.wallShadow).fillRect(32, roomHeight - 40, roomWidth - 64, 8);

    art.fillStyle(COLORS.wood).fillRect(318, 48, 180, 66);
    art.fillStyle(0x9bc4bd).fillRect(326, 56, 164, 50);
    art.fillStyle(0xd6e5c4).fillRect(326, 56, 164, 6);
    art.fillStyle(COLORS.cream).fillRect(405, 56, 4, 50);
    art.fillStyle(COLORS.cream).fillRect(326, 80, 164, 4);
    art.fillStyle(COLORS.woodLight).fillRect(304, 48, 8, 74);
    art.fillStyle(COLORS.woodLight).fillRect(504, 48, 8, 74);
    art.fillStyle(COLORS.green).fillRect(298, 84, 8, 24);
    art.fillStyle(COLORS.green).fillRect(510, 72, 8, 28);

    art.fillStyle(COLORS.ink, 0.22).fillRect(76, 318, 184, 12);
    art.fillStyle(COLORS.wood).fillRect(72, 198, 176, 122);
    art.fillStyle(COLORS.woodLight).fillRect(78, 204, 164, 8);
    art.fillStyle(0xe4d2ab).fillRect(82, 212, 156, 100);
    art.fillStyle(0x9e7770).fillRect(82, 252, 156, 60);
    art.fillStyle(0xc59b88).fillRect(88, 218, 66, 34);
    art.fillStyle(0xf2e5c7).fillRect(94, 222, 54, 26);
    art.fillStyle(0xd8b99a).fillRect(160, 218, 72, 34);
    art.fillStyle(COLORS.wood).fillRect(66, 314, 188, 10);

    art.fillStyle(COLORS.ink, 0.18).fillRect(384, 474, 192, 12);
    art.fillStyle(0x4c7773).fillRect(374, 342, 212, 136);
    art.fillStyle(0x86a99a).fillRect(382, 350, 196, 120);
    art.fillStyle(0xa6b7a0).fillRect(390, 358, 180, 104);
    art.fillStyle(0x86a99a).fillRect(398, 366, 164, 88);
    for (let x = 406; x < 558; x += 32) {
      art.fillStyle(0x78998e, 0.7).fillRect(x, 370, 2, 80);
    }
    art.fillStyle(0x78998e, 0.7).fillRect(402, 382, 156, 2);
    art.fillStyle(0x78998e, 0.7).fillRect(402, 434, 156, 2);

    art.fillStyle(COLORS.wood).fillRect(64, 64, 124, 92);
    art.fillStyle(COLORS.green).fillRect(72, 72, 108, 76);
    art.fillStyle(COLORS.woodLight).fillRect(80, 84, 18, 54);
    art.fillStyle(COLORS.rose).fillRect(104, 76, 18, 62);
    art.fillStyle(0xd9b75e).fillRect(128, 92, 18, 46);
    art.fillStyle(0x7595a2).fillRect(152, 80, 18, 58);

    art.fillStyle(COLORS.wood).fillRect(790, 64, 96, 48);
    art.fillStyle(COLORS.paper).fillRect(798, 72, 38, 32);
    art.fillStyle(COLORS.rose).fillRect(842, 76, 34, 28);
    art.fillStyle(COLORS.ink).fillRect(806, 80, 22, 3);
    art.fillStyle(COLORS.ink).fillRect(806, 88, 18, 3);

    art.fillStyle(COLORS.green).fillRect(846, 474, 38, 42);
    art.fillStyle(COLORS.wood).fillRect(842, 508, 46, 14);
    art.fillStyle(COLORS.green).fillRect(850, 454, 10, 28);
    art.fillStyle(COLORS.green).fillRect(866, 446, 10, 36);

    this.add.text(54, 42, "QUARTO / ESTÚDIO", { fontFamily: "DM Sans", fontSize: "13px", color: "#493d4c" }).setDepth(1);
    this.walls = this.physics.add.staticGroup();
  }

  private createPlayer(): void {
    const startX = this.map.properties.find(({ name }: { name: string }) => name === "playerStartX").value;
    const startY = this.map.properties.find(({ name }: { name: string }) => name === "playerStartY").value;
    this.player = this.physics.add.sprite(startX, startY, "player").setScale(0.05).setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.walls);
  }

  private createMapObjects(): void {
    const objectLayer = this.map.getObjectLayer("interactions");
    this.stationObjects = [];
    objectLayer.objects.forEach((object: any) => {
      const properties = Object.fromEntries((object.properties ?? []).map(({ name, value }: { name: string; value: unknown }) => [name, value])) as Record<string, string>;
      const width = object.width || 10;
      const height = object.height || 10;
      if (object.type === "wall") {
        const wall = this.add.rectangle(object.x + width / 2, object.y + height / 2, width, height, 0, 0).setVisible(false);
        this.physics.add.existing(wall, true);
        this.walls.add(wall);
        return;
      }
      if (object.type === "station") {
        if (!this.profile?.stations[properties.id]) return;
        const x = object.x + width / 2;
        const y = object.y + height / 2;
        const station = { id: properties.id, label: this.profile?.stations[properties.id] ?? properties.label, x, y };
        this.drawStationFurniture(properties.id, x, y, width, height);
        const body = this.add.rectangle(x, y, width, height, 0, 0).setVisible(false);
        this.physics.add.existing(body, true);
        this.walls.add(body);
        this.add.text(x, object.y + height + 10, station.label, { fontFamily: "DM Sans", fontSize: "12px", color: "#493d4c", backgroundColor: "#f3dfa9", padding: { x: 5, y: 3 } }).setOrigin(0.5).setDepth(3);
        this.stationObjects.push({ ...station, body });
      }
    });
  }

  private drawStationFurniture(id: string, x: number, y: number, width: number, height: number): void {
    const art = this.add.graphics().setDepth(2);
    const left = Math.round(x - width / 2);
    const top = Math.round(y - height / 2);
    const frame = (color = COLORS.wood): void => {
      art.fillStyle(color).fillRect(left, top, width, height);
      art.fillStyle(COLORS.woodLight).fillRect(left + 4, top + 4, width - 8, 6);
      art.fillStyle(COLORS.ink).fillRect(left, top + height - 5, width, 5);
    };

    if (id === "about" || id === "contact") {
      frame();
      art.fillStyle(COLORS.woodLight).fillRect(left + 8, top + height - 12, 8, 18);
      art.fillStyle(COLORS.woodLight).fillRect(left + width - 16, top + height - 12, 8, 18);
      art.fillStyle(COLORS.ink).fillRect(left + width / 2 - 25, top - 30, 50, 30);
      art.fillStyle(0x8db7a1).fillRect(left + width / 2 - 21, top - 26, 42, 22);
      art.fillStyle(0x253d48).fillRect(left + width / 2 - 17, top - 20, 20, 3);
      art.fillStyle(0xe5bd67).fillRect(left + width / 2 - 17, top - 13, 30, 3);
      art.fillStyle(COLORS.paper).fillRect(left + width / 2 + 34, top - 14, 14, 14);
      art.fillStyle(COLORS.rose).fillRect(left + width / 2 + 38, top - 22, 6, 8);
      if (id === "about") {
        art.fillStyle(COLORS.ink, 0.18).fillRect(x - 25, top + height + 27, 50, 8);
        art.fillStyle(COLORS.wood).fillRect(x - 22, top + height + 5, 44, 24);
        art.fillStyle(0x8c5a4a).fillRect(x - 16, top + height + 9, 32, 15);
        art.fillStyle(COLORS.woodLight).fillRect(x - 20, top + height + 27, 6, 14);
        art.fillStyle(COLORS.woodLight).fillRect(x + 14, top + height + 27, 6, 14);
        art.fillStyle(COLORS.cream).fillRect(left + width - 34, top - 23, 4, 10);
        art.fillStyle(0xe5bd67).fillRect(left + width - 42, top - 28, 20, 6);
      }
      return;
    }

    if (id === "projects") {
      frame();
      for (let shelf = 1; shelf <= 3; shelf += 1) {
        const shelfY = top + shelf * Math.floor(height / 4);
        art.fillStyle(COLORS.woodLight).fillRect(left + 5, shelfY, width - 10, 5);
        const bookColors = [COLORS.rose, 0x66866a, 0x6e8aa0, 0xd9b75e, 0xc58a62];
        let bookX = left + 10;
        bookColors.slice(0, 4).forEach((color, index) => {
          const bookWidth = index % 2 === 0 ? 13 : 17;
          art.fillStyle(color).fillRect(bookX, shelfY - 22, bookWidth, 22);
          art.fillStyle(COLORS.paper, 0.7).fillRect(bookX + 3, shelfY - 17, bookWidth - 6, 3);
          bookX += bookWidth + 4;
        });
      }
      return;
    }

    if (id === "resume") {
      frame();
      for (let drawer = 0; drawer < 3; drawer += 1) {
        const drawerY = top + 18 + drawer * Math.floor((height - 24) / 3);
        art.fillStyle(COLORS.woodLight).fillRect(left + 10, drawerY, width - 20, 4);
        art.fillStyle(COLORS.paper).fillRect(left + width / 2 - 9, drawerY + 9, 18, 3);
        art.fillStyle(COLORS.ink).fillRect(left + width / 2 - 3, drawerY + 16, 6, 5);
      }
      return;
    }

    if (id === "recommendations") {
      art.fillStyle(COLORS.wood).fillRect(left, top, width, height);
      art.fillStyle(0xc58a62).fillRect(left + 6, top + 6, width - 12, height - 12);
      art.fillStyle(COLORS.paper).fillRect(left + 13, top + 12, 34, 28);
      art.fillStyle(0x9bb7a0).fillRect(left + 55, top + 10, 36, 34);
      art.fillStyle(0xf4e7c2).fillRect(left + 100, top + 14, 34, 26);
      art.fillStyle(COLORS.rose).fillRect(left + 24, top + 8, 6, 6);
      art.fillStyle(0xd9b75e).fillRect(left + 69, top + 6, 6, 6);
      art.fillStyle(COLORS.rose).fillRect(left + 114, top + 9, 6, 6);
    }
  }

  private interact(): void {
    if (this.nearbyStation) window.openPortfolioModal?.(this.nearbyStation.id);
  }

  update(): void {
    if (!this.player || !this.cursors || !this.keys) return;
    const velocity = new Phaser.Math.Vector2(0, 0);
    if (this.cursors.left.isDown || this.keys.A.isDown) velocity.x = -1;
    if (this.cursors.right.isDown || this.keys.D.isDown) velocity.x = 1;
    if (this.cursors.up.isDown || this.keys.W.isDown) velocity.y = -1;
    if (this.cursors.down.isDown || this.keys.S.isDown) velocity.y = 1;
    velocity.x ||= this.touchDirection.x;
    velocity.y ||= this.touchDirection.y;
    velocity.normalize().scale(190);
    this.player.setVelocity(velocity.x, velocity.y);
    this.nearbyStation = this.stationObjects.find((station) => Phaser.Math.Distance.Between(this.player.x, this.player.y, station.x, station.y) < 125);
    this.prompt.setVisible(Boolean(this.nearbyStation));
    if (this.nearbyStation) this.prompt.setPosition(this.nearbyStation.x, this.nearbyStation.y - 110).setText(`E  ${this.nearbyStation.label}`);
  }
}