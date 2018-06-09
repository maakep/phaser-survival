import * as Phaser from "phaser";
import { Game } from "../scenes/game";
import { Player } from "../player/player";

export class Minimap extends Phaser.Cameras.Scene2D.Camera {
  constructor(scene: Game, worldWidth: number, worldHeight: number, player: Player) {
    let x = 10,
        y = 10,
        width = 150,
        height = 150;
    super(x, y, width, height);
    this.name = "minimap";
    this.setScroll(worldWidth/2, worldHeight/2);
    // This is glitchy with setZoom 
    // this.setBounds(0, 0, worldWidth, worldHeight);
    this.startFollow(player, true);
    this.setZoom(0.2);
    this.setBackgroundColor("#000000");
    let minimapBg = scene.add.sprite(x-10, y-10, "player");
    minimapBg.setDisplaySize(width+20, height+20);
    minimapBg.setOrigin(0, 0);
    minimapBg.tint = 0x000000;
    minimapBg.setScrollFactor(0,0);
    this.ignore(minimapBg);

    scene.cameras.cameras.push(this);
  }
}