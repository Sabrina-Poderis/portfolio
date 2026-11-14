import Phaser from "phaser";
import type { PortfolioProfile } from "../../types/portfolio";

const COLORS = {
  grass: 0x77955d,
  grassLight: 0x93aa68,
  grassDark: 0x58764f,
  path: 0xc59a65,
  pathLight: 0xd9b47a,
  pathDark: 0x9d754e,
  wood: 0x75463b,
  woodLight: 0xc27a4d,
  cream: 0xf3dfa9,
  ink: 0x493d4c,
  green: 0x66866a,
  teal: 0x4c8982,
  rose: 0xc97870,
  paper: 0xf4e7c2,
  water: 0x6da6a0,
};

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
    this.load.image("dino-triceratops", `${import.meta.env.BASE_URL}assets/dinosaurs/triceratops.svg`);
    this.load.image("dino-stegosaurus", `${import.meta.env.BASE_URL}assets/dinosaurs/stegosaurus.svg`);
    this.load.image("dino-brachiosaurus", `${import.meta.env.BASE_URL}assets/dinosaurs/brachiosaurus.svg`);
    this.load.image("dino-ceratosaurus", `${import.meta.env.BASE_URL}assets/dinosaurs/ceratosaurus.svg`);
    this.load.image("dino-parasaurolophus", `${import.meta.env.BASE_URL}assets/dinosaurs/parasaurolophus.svg`);
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
    this.prompt = this.add.text(0, 0, "", { fontFamily: "DM Sans", fontSize: "16px", color: "#493d4c", backgroundColor: "#f3dfa9", padding: { x: 12, y: 8 } }).setDepth(10).setOrigin(0.5).setVisible(false);
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.physics.world.setBounds(32, 32, this.map.widthInPixels - 64, this.map.heightInPixels - 64);
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
    const art = this.add.graphics().setDepth(0);
    art.fillStyle(COLORS.grass).fillRect(0, 0, roomWidth, roomHeight);

    for (let y = 24; y < roomHeight; y += 48) {
      for (let x = 24 + ((y / 48) % 2) * 24; x < roomWidth; x += 48) {
        art.fillStyle(COLORS.grassLight, 0.22).fillRect(x, y, 3, 3);
        art.fillStyle(COLORS.grassDark, 0.24).fillRect(x + 8, y + 12, 2, 5);
      }
    }

    art.fillStyle(COLORS.pathDark).fillRect(442, 32, 76, roomHeight - 64);
    art.fillStyle(COLORS.path).fillRect(446, 32, 68, roomHeight - 64);
    art.fillStyle(COLORS.pathDark).fillRect(32, 326, roomWidth - 64, 64);
    art.fillStyle(COLORS.path).fillRect(32, 330, roomWidth - 64, 56);
    for (let x = 54; x < roomWidth - 48; x += 52) {
      art.fillStyle(COLORS.pathLight, 0.4).fillRect(x, 344 + (x % 3) * 4, 22, 3);
    }
    for (let y = 52; y < roomHeight - 44; y += 48) {
      art.fillStyle(COLORS.pathLight, 0.35).fillRect(470 + (y % 3) * 4, y, 3, 22);
    }

    art.fillStyle(COLORS.wood).fillRect(370, 16, 220, 48);
    art.fillStyle(COLORS.pathLight).fillRect(376, 22, 208, 36);
    art.fillStyle(COLORS.woodLight).fillRect(380, 26, 200, 3);
    art.fillStyle(COLORS.woodLight).fillRect(380, 51, 200, 3);
    this.add.text(480, 40, "PARQUE JURÁSSICO", {
      fontFamily: "DM Sans",
      fontSize: "17px",
      fontStyle: "bold",
      color: "#332c37",
    }).setOrigin(0.5).setDepth(2);

    art.fillStyle(COLORS.water).fillRect(54, 490, 112, 62);
    art.fillStyle(0x9ac4a7).fillRect(62, 498, 96, 46);
    art.fillStyle(0x6da6a0).fillRect(70, 506, 30, 8);
    art.fillStyle(0x6da6a0).fillRect(118, 526, 32, 8);
    art.fillStyle(COLORS.grassDark).fillRect(50, 482, 16, 10);
    art.fillStyle(COLORS.grassDark).fillRect(154, 544, 22, 10);

    this.drawTree(86, 190, art);
    this.drawTree(870, 170, art);
    this.drawTree(80, 438, art);
    this.drawTree(878, 464, art);
    this.drawTree(336, 570, art);
    this.drawTree(632, 572, art);
    this.drawFossilSign(850, 562, art);

    art.fillStyle(COLORS.wood).fillRect(350, 592, 260, 38);
    art.fillStyle(COLORS.pathLight).fillRect(356, 598, 248, 26);
    this.add.text(480, 611, "TRILHA DOS FÓSSEIS", {
      fontFamily: "DM Sans",
      fontSize: "17px",
      fontStyle: "bold",
      color: "#332c37",
    }).setOrigin(0.5).setDepth(2);
    this.walls = this.physics.add.staticGroup();
  }

  private drawTree(x: number, y: number, art: Phaser.GameObjects.Graphics): void {
    art.fillStyle(COLORS.ink, 0.18).fillRect(x - 15, y + 25, 34, 8);
    art.fillStyle(COLORS.wood).fillRect(x - 5, y + 5, 12, 30);
    art.fillStyle(COLORS.grassDark).fillRect(x - 20, y - 10, 42, 30);
    art.fillStyle(COLORS.green).fillRect(x - 16, y - 18, 34, 28);
    art.fillStyle(COLORS.grassLight).fillRect(x - 8, y - 22, 18, 14);
    art.fillStyle(0xa7b96d).fillRect(x - 10, y - 12, 7, 5);
  }

  private drawFossilSign(x: number, y: number, art: Phaser.GameObjects.Graphics): void {
    art.fillStyle(COLORS.wood).fillRect(x - 3, y, 6, 34);
    art.fillStyle(COLORS.woodLight).fillRect(x - 26, y - 18, 52, 22);
    art.fillStyle(COLORS.cream).fillRect(x - 20, y - 14, 40, 14);
    art.fillStyle(COLORS.ink).fillRect(x - 12, y - 10, 24, 3);
    art.fillStyle(COLORS.ink).fillRect(x - 8, y - 5, 16, 2);
  }

  private createPlayer(): void {
    const startX = this.map.properties.find(({ name }: { name: string }) => name === "playerStartX").value;
    const startY = this.map.properties.find(({ name }: { name: string }) => name === "playerStartY").value;
    this.player = this.physics.add.sprite(startX, startY, "player").setScale(1.6).setCollideWorldBounds(true);
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
        const station = {
          id: properties.id,
          label: this.profile?.stations[properties.id] ?? properties.label,
          x,
          y,
          left: object.x,
          right: object.x + width,
          top: object.y,
          bottom: object.y + height,
        };
        this.drawDinosaurEnclosure(properties.id, x, y, width, height);
        const body = this.add.rectangle(x, y, width, height, 0, 0).setVisible(false);
        this.physics.add.existing(body, true);
        this.walls.add(body);
        this.add.text(x, object.y + height + 12, station.label, {
          fontFamily: "DM Sans",
          fontSize: "16px",
          fontStyle: "bold",
          color: "#332c37",
          backgroundColor: "#f3dfa9",
          padding: { x: 9, y: 6 },
        }).setOrigin(0.5).setDepth(5);
        this.stationObjects.push({ ...station, body });
      }
    });
  }

  private drawDinosaurEnclosure(id: string, x: number, y: number, width: number, height: number): void {
    const art = this.add.graphics().setDepth(1);
    const left = Math.round(x - width / 2);
    const top = Math.round(y - height / 2);
    const ground = id === "resume" ? 0x91a36b : id === "contact" ? 0x9a8b61 : 0x9aab6a;

    art.fillStyle(COLORS.ink, 0.2).fillRect(left + 5, top + height - 2, width, 8);
    art.fillStyle(ground).fillRect(left + 5, top + 5, width - 10, height - 10);
    art.fillStyle(COLORS.grassLight, 0.45).fillRect(left + 12, top + 12, width - 24, height - 24);
    art.fillStyle(COLORS.path, 0.65).fillRect(left + 18, top + height - 28, width - 36, 12);
    art.fillStyle(COLORS.pathLight, 0.55).fillRect(left + 28, top + height - 25, width - 56, 3);

    if (id === "resume") {
      art.fillStyle(COLORS.water).fillRect(left + width - 55, top + 18, 34, 20);
      art.fillStyle(0xa6c9a0).fillRect(left + width - 50, top + 22, 24, 10);
    }

    this.drawExhibitPlants(left, top, width, height, art);
    const species = {
      about: "triceratops",
      projects: "stegosaurus",
      resume: "brachiosaurus",
      contact: "ceratosaurus",
      recommendations: "parasaurolophus",
    }[id] ?? "triceratops";
    this.add.image(x, y - 4, `dino-${species}`).setDisplaySize(116, 87).setDepth(2);

    const fence = this.add.graphics().setDepth(3);
    this.drawFence(left, top, width, height, fence);
    this.drawExhibitPlaque(id, x, top, fence);
  }

  private drawExhibitPlants(left: number, top: number, width: number, height: number, art: Phaser.GameObjects.Graphics): void {
    const plant = (x: number, y: number, color: number): void => {
      art.fillStyle(COLORS.grassDark).fillRect(x + 4, y + 10, 4, 8);
      art.fillStyle(color).fillRect(x, y + 4, 5, 8);
      art.fillStyle(COLORS.grassLight).fillRect(x + 7, y, 5, 10);
      art.fillStyle(color).fillRect(x + 11, y + 7, 5, 8);
    };
    plant(left + 16, top + 28, COLORS.green);
    plant(left + width - 34, top + 22, COLORS.teal);
    plant(left + 24, top + height - 48, 0x9e9a5c);
  }

  private drawFence(left: number, top: number, width: number, height: number, art: Phaser.GameObjects.Graphics): void {
    const rail = (x: number, y: number, railWidth: number): void => {
      art.fillStyle(COLORS.wood).fillRect(x, y, railWidth, 5);
      art.fillStyle(COLORS.woodLight).fillRect(x, y, railWidth, 2);
    };

    rail(left, top + 8, width);
    rail(left, top + 22, width);
    rail(left, top + height - 23, width);
    rail(left, top + height - 9, width);
    for (let x = left + 4; x < left + width; x += 24) {
      art.fillStyle(COLORS.wood).fillRect(x, top + 3, 5, 27);
      art.fillStyle(COLORS.woodLight).fillRect(x, top + 3, 2, 27);
      art.fillStyle(COLORS.wood).fillRect(x, top + height - 30, 5, 27);
      art.fillStyle(COLORS.woodLight).fillRect(x, top + height - 30, 2, 27);
    }
    for (let y = top + 24; y < top + height - 24; y += 24) {
      art.fillStyle(COLORS.wood).fillRect(left + 3, y, 27, 5);
      art.fillStyle(COLORS.woodLight).fillRect(left + 3, y, 27, 2);
      art.fillStyle(COLORS.wood).fillRect(left + width - 30, y, 27, 5);
      art.fillStyle(COLORS.woodLight).fillRect(left + width - 30, y, 27, 2);
    }
    art.fillStyle(COLORS.cream).fillRect(left + width / 2 - 3, top + height - 26, 6, 16);
  }

  private drawExhibitPlaque(id: string, x: number, top: number, art: Phaser.GameObjects.Graphics): void {
    const speciesNames: Record<string, string> = {
      about: "TRICERATOPS",
      projects: "ESTEGOSSAURO",
      resume: "BRAQUIOSSAURO",
      contact: "CERATOSAURO",
      recommendations: "PARASSAURO",
    };
    const plaqueWidth = 154;
    art.fillStyle(COLORS.wood).fillRect(x - plaqueWidth / 2, top - 28, plaqueWidth, 26);
    art.fillStyle(COLORS.cream).fillRect(x - plaqueWidth / 2 + 4, top - 24, plaqueWidth - 8, 18);
    art.fillStyle(COLORS.woodLight).fillRect(x - plaqueWidth / 2 + 8, top - 4, 5, 9);
    art.fillStyle(COLORS.woodLight).fillRect(x + plaqueWidth / 2 - 13, top - 4, 5, 9);
    this.add.text(x, top - 15, speciesNames[id] ?? "DINOSSAURO", {
      fontFamily: "DM Sans",
      fontSize: "14px",
      fontStyle: "bold",
      color: "#332c37",
    }).setOrigin(0.5).setDepth(5);
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
    const playerBody = this.player.body;
    this.nearbyStation = this.stationObjects.find((station) => {
      const gapX = Math.max(station.left - playerBody.right, playerBody.left - station.right, 0);
      const gapY = Math.max(station.top - playerBody.bottom, playerBody.top - station.bottom, 0);
      return Math.hypot(gapX, gapY) <= 4;
    });
    this.prompt.setVisible(Boolean(this.nearbyStation));
    if (this.nearbyStation) this.prompt.setPosition(this.nearbyStation.x, this.nearbyStation.y - 110).setText(`E  ${this.nearbyStation.label}`);
  }
}