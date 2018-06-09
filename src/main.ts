import * as Phaser from "phaser";
import { Preload } from "./scenes/preload";
import { Boot } from "./scenes/boot";
import { Game } from "./scenes/game";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      parent: "root",
      type: Phaser.AUTO,
      backgroundColor: "green",
      physics: { 
        default: 'arcade',
        arcade: {
          
        }
      },
      scene: [
        Boot,
        Preload,
        Game
      ],
      width: 1000,
      height: 600,
    };
    super(config);
    this.scene.start("Boot");
  }
}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};