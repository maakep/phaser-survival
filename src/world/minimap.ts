import * as Phaser from "phaser";

export class Minimap extends Phaser.Cameras.Scene2D.Camera {
  constructor(scene: Phaser.Scene) {
    super(0, 0, 300, 300);
    this.name = "minimap";
    this.setZoom(0.3);
    scene.cameras.addExisting(this);
  }

}