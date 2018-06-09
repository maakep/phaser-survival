import * as Phaser from "phaser";
import { IControls } from "./controls";

export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: CursorKeys;
  controls: IControls;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.controls = {
      w: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      q: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
      e: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
      f: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
      space: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
    };

    // Pixel bleeding may happen at scaling. Solution: extrude tiles.
    this.scene.cameras.main.startFollow(this, true);    
    scene.physics.world.enable(this);

    scene.add.existing(this);
  }

  speed: number = 130;
  update() {
    let body = this.body as Phaser.Physics.Arcade.Body;
    body.velocity.reset();
    if (this.controls.w.isDown)
    {
      body.velocity.y = -this.speed;
    }
    else if (this.controls.s.isDown)
    {
      body.velocity.y = this.speed;
    }

    if (this.controls.a.isDown)
    {
      body.velocity.x = -this.speed;
    }
    else if (this.controls.d.isDown)
    {
      body.velocity.x = this.speed;
    }

  }
}