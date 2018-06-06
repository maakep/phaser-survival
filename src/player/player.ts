import * as Phaser from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: CursorKeys;
  wasd: {up: Phaser.Input.Keyboard.Key, left: Phaser.Input.Keyboard.Key, down: Phaser.Input.Keyboard.Key, right: Phaser.Input.Keyboard.Key};

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.wasd = {
      up: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      left: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      down: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      right: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
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
    if (this.cursors.up.isDown || this.wasd.up.isDown)
    {
      body.velocity.y = -this.speed;
    }
    else if (this.cursors.down.isDown || this.wasd.down.isDown)
    {
      body.velocity.y = this.speed;      
    }

    if (this.cursors.left.isDown || this.wasd.left.isDown)
    {
      body.velocity.x = -this.speed;
    }
    else if (this.cursors.right.isDown || this.wasd.right.isDown)
    {
      body.velocity.x = this.speed;
    }
  }
}