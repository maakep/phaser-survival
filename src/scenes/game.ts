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
    let groundLayer = this.setUpWorld();

    this.player = new Player(this, 200, 130);
    this.physics.add.collider(this.player, groundLayer);

    this.minimap = new Minimap(this, groundLayer.width, groundLayer.height, this.player);
  }

  update() {
    this.player.update();
  }


  setUpWorld(): Phaser.Tilemaps.StaticTilemapLayer {
    let map = this.make.tilemap({ key: "level1" });
    let tiles = map.addTilesetImage("temp-art", "maptiles", 16, 16, 2, 4);
    let groundLayer = map.createStaticLayer(0, tiles, 0, 0);
    groundLayer.setCollisionByProperty({ collide: true }, true);

    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;
    this.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height);
    return groundLayer;
  }
}