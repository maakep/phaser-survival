import * as Phaser from "phaser";

export class Game extends Phaser.Scene {
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
    let groundLayer = map.createDynamicLayer("TileLayer1", tiles, 0, 0);
    groundLayer.setCollisionByExclusion([-1]);
    // set the boundaries of our game world
    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;
  }
}