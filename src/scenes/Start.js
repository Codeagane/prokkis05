export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('background', 'assets/space.png');
        this.load.image('logo', 'assets/phaser.png');
        this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });
        this.load.image('asteroid', 'assets/asteroid.png');
        this.load.image('bullet', 'assets/asteroid.png');
    }

    create() {

        this.background = this.add.tileSprite(640, 360, 1280, 720, 'background');

        this.ship = this.add.sprite(640, 360, 'ship');

        this.ship.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        this.ship.play('fly');

        // Näppäinten asettaminen liikkumieen
        this.keys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
        this.asteroids = this.physics.add.group();

        // Luo asteroidit
        this.time.addEvent({
            delay: 1500,
            loop: true,
            callback: () => {
                const y = Phaser.Math.Between(50, 670);
                const asteroid = this.asteroids.create(1300, y, 'asteroid');
                asteroid.setVelocityX(-300);
                asteroid.setImmovable(true);
                const scale = Phaser.Math.FloatBetween(1, 5);
                asteroid.setScale(scale);

                // Asteroidien kestävyys vastaa niiden kokoa
                asteroid.health = Math.ceil(scale);
            }
        });
        this.bullets = this.physics.add.group({
            classType: Phaser.Physics.Arcade.Image,
            runChildUpdate: true
        });

        this.shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.overlap(this.bullets, this.asteroids, (bullet, asteroid) => {
            bullet.destroy();

            asteroid.health -= 1;

            if (asteroid.health <= 0) {
                asteroid.destroy();
                this.score += 100;
                this.scoreText.setText('Score: ' + this.score);
            }
        });

        this.score = 0;
        this.scoreText = this.add.text(20, 20, 'Score: 0', {
            fontSize: '32px',
            fill: '#ffffff'
        });
        this.scoreText.setScrollFactor(0);
    }

    update() {
        this.background.tilePositionX += .5;

        const speed = 2;

        if (this.keys.left.isDown) {
            this.ship.x -= speed;
        } else if (this.keys.right.isDown) {
            this.ship.x += speed;
        }

        if (this.keys.up.isDown) {
            this.ship.y -= speed;
        } else if (this.keys.down.isDown) {
            this.ship.y += speed;
        }

        this.ship.x = Phaser.Math.Clamp(this.ship.x, this.ship.width / 2, this.game.config.width - this.ship.width / 2);
        this.ship.y = Phaser.Math.Clamp(this.ship.y, this.ship.height / 2, this.game.config.height - this.ship.height / 2);

                // Tuhoaa asteroidit jotka menevät pois ruudulta
        this.asteroids.getChildren().forEach((asteroid) => {
            if (asteroid.x < -50) {
                this.asteroids.remove(asteroid, true, true);
            }
        });
        if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
            const bullet = this.bullets.get(this.ship.x + this.ship.width / 2, this.ship.y, 'bullet');
            if (bullet) {
                bullet.setActive(true);
                bullet.setVisible(true);
                bullet.body.velocity.x = 500;
            }
        }


    }

}
