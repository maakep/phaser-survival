import * as Phaser from "phaser";
import { Preload } from "./scenes/preload";
import { Boot } from "./scenes/boot";
import { Game } from "./scenes/game";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      parent: "root",
      type: Phaser.AUTO,
      physics: { 
        default: 'arcade',
        impact: {
          
        }
      },
      scene: [
        Boot,
        Preload,
        Game
      ],
      width: 800,
      height: 592,
    };
    super(config);
    this.scene.start("Boot");
  }
}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};