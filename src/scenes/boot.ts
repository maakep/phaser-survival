import * as Phaser from "phaser";

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: "Boot" });
    console.log("Boot ctor");
  }
  init() {
    console.log("Boot init");
  }

  preload() {
  } 

  create() {
    this.scene.start("Preload");    
  }
}