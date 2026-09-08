import Phaser from 'phaser'

const WORLD = { width: 1400, height: 860 }
const stations = [
  { id: 'about', x: 330, y: 260, label: 'SOBRE MIM', color: 0xe5a852 }, { id: 'projects', x: 705, y: 250, label: 'PROJETOS', color: 0xd97958 }, { id: 'resume', x: 1035, y: 290, label: 'CURRÍCULO', color: 0x7eafa0 }, { id: 'contact', x: 1020, y: 635, label: 'CONTATO', color: 0xc68aaf },
]

export class PortfolioScene extends Phaser.Scene {
  constructor() { super('PortfolioScene') }
  create() {
    this.drawRoom(); this.createPlayer(); this.createStations(); this.cursors = this.input.keyboard.createCursorKeys(); this.keys = this.input.keyboard.addKeys('W,A,S,D,E,ENTER'); this.input.keyboard.on('keydown-E', () => this.interact()); this.input.keyboard.on('keydown-ENTER', () => this.interact())
    this.prompt = this.add.text(0, 0, '', { fontFamily: 'monospace', fontSize: '16px', color: '#173231', backgroundColor: '#f4e9cf', padding: { x: 12, y: 8 } }).setDepth(10).setOrigin(0.5).setVisible(false)
    this.cameras.main.setBounds(0, 0, WORLD.width, WORLD.height); this.cameras.main.startFollow(this.player, true, 0.08, 0.08); this.physics.world.setBounds(62, 62, WORLD.width - 124, WORLD.height - 124)
  }
  drawRoom() {
    const art = this.add.graphics(); art.fillStyle(0x173231).fillRect(0, 0, WORLD.width, WORLD.height); art.fillStyle(0x214744).fillRect(62, 62, WORLD.width - 124, WORLD.height - 124); art.lineStyle(4, 0x46736a).strokeRect(62, 62, WORLD.width - 124, WORLD.height - 124); art.lineStyle(1, 0x2c5953, 0.7)
    for (let x = 90; x < WORLD.width - 70; x += 48) art.lineBetween(x, 90, x, WORLD.height - 90); for (let y = 90; y < WORLD.height - 70; y += 48) art.lineBetween(90, y, WORLD.width - 90, y)
    art.fillStyle(0x102625).fillRect(86, 86, 1228, 70); this.add.text(116, 105, 'STUDIO 01', { fontFamily: 'monospace', fontSize: '18px', color: '#c8dfc8', letterSpacing: 3 }); this.add.text(1120, 106, 'LOCAL / 2026', { fontFamily: 'monospace', fontSize: '14px', color: '#8eb9a9' })
    this.walls = this.physics.add.staticGroup(); [[700, 65, 1280, 10], [700, 795, 1280, 10], [67, 430, 10, 730], [1333, 430, 10, 730]].forEach(([x, y, width, height]) => { const wall = this.add.rectangle(x, y, width, height, 0x102625); this.physics.add.existing(wall, true); this.walls.add(wall) })
  }
  createPlayer() {
    const texture = this.textures.createCanvas('player', 32, 40); const context = texture.getContext(); context.fillStyle = '#f4e9cf'; context.fillRect(8, 0, 16, 12); context.fillStyle = '#e5a852'; context.fillRect(4, 12, 24, 19); context.fillStyle = '#173231'; context.fillRect(7, 16, 4, 4); context.fillRect(21, 16, 4, 4); context.fillStyle = '#d97958'; context.fillRect(8, 31, 6, 9); context.fillRect(19, 31, 6, 9); texture.refresh(); this.player = this.physics.add.sprite(470, 560, 'player').setScale(1.2).setCollideWorldBounds(true); this.physics.add.collider(this.player, this.walls)
  }
  createStations() { this.stationObjects = stations.map((station) => { const body = this.add.rectangle(station.x, station.y, 110, 90, station.color, 0.95).setStrokeStyle(4, 0x173231); this.physics.add.existing(body, true); this.walls.add(body); this.add.text(station.x, station.y + 62, station.label, { fontFamily: 'monospace', fontSize: '14px', color: '#c8dfc8' }).setOrigin(0.5); this.add.circle(station.x, station.y - 56, 6, station.color).setStrokeStyle(2, 0xf4e9cf); return { ...station, body } }); this.physics.add.collider(this.player, this.walls) }
  interact() { if (this.nearbyStation) window.openPortfolioModal?.(this.nearbyStation.id) }
  update() { if (!this.player) return; const velocity = new Phaser.Math.Vector2(0, 0); if (this.cursors.left.isDown || this.keys.A.isDown) velocity.x = -1; if (this.cursors.right.isDown || this.keys.D.isDown) velocity.x = 1; if (this.cursors.up.isDown || this.keys.W.isDown) velocity.y = -1; if (this.cursors.down.isDown || this.keys.S.isDown) velocity.y = 1; velocity.normalize().scale(190); this.player.setVelocity(velocity.x, velocity.y); const nearby = this.stationObjects.find((station) => Phaser.Math.Distance.Between(this.player.x, this.player.y, station.x, station.y) < 125); this.nearbyStation = nearby; this.prompt.setVisible(Boolean(nearby)); if (nearby) this.prompt.setPosition(nearby.x, nearby.y - 110).setText(`E  ${nearby.label}`) }
}