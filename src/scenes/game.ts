import * as Phaser from "phaser";
import { Player } from "../player/player";
import { Minimap } from "../world/minimap";

export class Game extends Phaser.Scene {
  cursors: CursorKeys;
  player: Player;
  minimap: Minimap;

  constructor() {
    super({ key: "Game" });
    console.log("Game ctor");
  }

  init() {
    console.log("Game init");
  }

  create() {
    let map = this.make.tilemap({ key: "level1" });
    let tiles = map.addTilesetImage("temp-sheet", "maptiles");
    let groundLayer = map.createStaticLayer(0, tiles, 0, 0);
    groundLayer.setCollisionByProperty({ collide: true }, true);

    // set the boundaries of our game world
    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;
    this.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height);

    //this.minimap = new Minimap(this);

    this.player = new Player(this, 200, 130);
    this.physics.add.collider(this.player, groundLayer);
  }

  update() {
    this.player.update();
  }
}