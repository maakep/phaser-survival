import * as Phaser from "phaser";

export class Player extends Phaser.GameObjects.Sprite {
  cursors: CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "player");
    
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    
    this.scene.cameras.main.startFollow(this);    
    scene.physics.world.enable(this);

    scene.add.existing(this);
  }

  speed: number = 130;
  update() {
    let body = this.body as Phaser.Physics.Arcade.Body;
    body.velocity.reset();
    if (this.cursors.up.isDown)
    {
      body.velocity.y = -this.speed;
    }
    else if (this.cursors.down.isDown)
    {
      body.velocity.y = this.speed;      
    }

    if (this.cursors.left.isDown)
    {
      body.velocity.x = -this.speed;
    }
    else if (this.cursors.right.isDown)
    {
      body.velocity.x = this.speed;
    }
  }
}