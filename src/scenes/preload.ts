import * as Phaser from "phaser";

export class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" });
    console.log("Preload ctor");
  }
  init() {
    console.log("Preload init");
  }

  preload () {
    this.load.tilemapTiledJSON("level1", "/assets/maps/map2.json");
    this.load.spritesheet("maptiles", "/assets/temp-sheet.png", { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    this.scene.start("Game");
  }
}