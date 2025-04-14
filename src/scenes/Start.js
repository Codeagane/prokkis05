Dogi
dooooogi
Invisible

[00:40]Dogi:
Image
[10:30]Dogi:
Image
[22:37]Dogi:
Image
[11:55]Dogi:
Image
[11:55]Dogi:
Image
[00:17]Dogi: Oh-1.mp4
[14:51]Dogi:
Image
[16:28]Dogi:
Image
[17:23]Dogi:
Image
[11:53]Dogi:
Image
[11:54]Dogi:
Image
[17:07]Dogi:
Image
[16:14]Dogi:
Image
[16:43]Dogi:
Image
[10:52]Dogi:
Image
[12:54]Dogi:
Image
[13:54]Dogi:  
Image
[14:37]Dogi:  
Image
[12:19]Dogi:
Image
[19:42]Dogi: redaft_1.mp4
[10:56]Dogi:
Application = Hakemus
Apprentice = Harjoittelija
Apprenticeship = Oppisopimus
Assessment = Arviointi
Background = Tausta
Bonus = Lisäpalkkio?
Expand
ENKKUTYO.txt
12 KB
[13:52]Dogi: https://cdn.7tv.app/emote/645ba7202461b7e1138b24e5/4x.webp
[13:52]Dogi: https://cdn.7tv.app/emote/645ba7202461b7e1138b24e5/4x.webp
[13:52]Dogi:
Attachment file type: unknown
4x.webp
180.65 KB
[13:53]Dogi:
Attachment file type: unknown
4x.gif
180.65 KB
[13:53]Dogi:
Image
[15:29]Dogi: @Clyde yoyo
[15:29] 
APP
 Clyde: yoyo! What's up? 😄
[09:16]Dogi:  
Image
[11:50]Dogi:  
Image
[23:40]Dogi: https://cdn.7tv.app/emote/6309e73ffe72a7a37ff476f5/4x.webp
[23:40]Dogi: https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fangry-kitten-angry-kitty-angry-cat-cat-angry-gif-26857347&psig=AOvVaw1VHViF3JG0GtjsiweixrY_&ust=1696884025072000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOj6x96n54EDFQAAAAAdAAAAABAI
[23:40]Dogi:
Image
[20:53]Dogi: Kuulemma siinä on tournament arc ja Meliodas vs Percival
[10:06]Dogi:
Image
[10:06]Dogi:
Image
[13:26]Dogi:
Image
[13:31]Dogi:
Image
[06:19]Dogi:
Attachment file type: unknown
cardholder.stl
34.36 KB
Attachment file type: unknown
cardholderbackup.blend
1.06 MB
Attachment file type: unknown
cardholdertest.blend
991.75 KB
Attachment file type: unknown
cardholder.blend
1,023.42 KB
Attachment file type: unknown
cardholder.blend1
1,023.42 KB
[14:04]Dogi:
Attachment file type: unknown
cardholder.blend
1.06 MB
[14:12]Dogi:
Attachment file type: unknown
kori.blend
902.78 KB
Attachment file type: unknown
kori.blend1
902.78 KB
Attachment file type: unknown
kori.stl
27.23 KB
Attachment file type: unknown
base.stl
35.24 KB
Attachment file type: unknown
cardholder.blend
1.05 MB
Attachment file type: unknown
cardholder.blend1
1.06 MB
Attachment file type: unknown
cardholder.stl
120.30 KB
Attachment file type: unknown
klipsut.stl
5.94 KB
Attachment file type: unknown
klipsut2.blend
486.80 KB
Attachment file type: unknown
klipsut2.stl
5.94 KB
[14:13]Dogi:
Attachment file type: unknown
piirinkiinnikket.stl
16.88 KB
Attachment file type: unknown
robot_v4.2.cdr
46.14 KB
Attachment file type: unknown
liikennevalot.blend
1,006.40 KB
Attachment file type: unknown
liikennevalot.blend1
1,006.38 KB
Attachment file type: unknown
liikennevalot.stl
178.50 KB
Attachment file type: unknown
liikennevalot_no_base.stl
143.34 KB
Attachment file type: unknown
logo.blend
565.95 KB
Attachment file type: unknown
logo.blend1
565.58 KB
Attachment file type: unknown
MP3SoitinKotelo.blend
942.86 KB
Attachment file type: unknown
MP3SoitinKotelo.stl
906.92 KB
[14:13]Dogi:
Attachment file type: unknown
SDsoitinKotelo6.stl
127.62 KB
Attachment file type: unknown
SDsoitinKoteloErotettu.blend
1.21 MB
Attachment file type: unknown
SDsoitinKlipsi.3mf
31.44 KB
Attachment file type: unknown
SDsoitinKotelo.blend
1.50 MB
[09:15]Dogi:
Attachment file type: archive
ImageToStl.com_img-20241209-wa0002.zip
2.78 MB
[10:19]Dogi: 57mm
[10:19]Dogi: 40mm
[21:45]Dogi:
Image
[05:16]Dogi:
Image
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>prokkis05</title>
Expand
index.html
2 KB
(function webpackUniversalModuleDefinition(root, factory) {
if(typeof exports === 'object' && typeof module === 'object')
module.exports = factory();
else if(typeof define === 'function' && define.amd)
define("Phaser", [], factory);
else if(typeof exports === 'object')... (8 MB left)
Expand
phaser.js
8 MB
Attachment file type: unknown
project.config
211 bytes
[05:17]Dogi:
import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
Expand
main.js
1 KB
export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }
Expand
Start.js
5 KB
[05:17]Dogi:
Image
Image
Image
Image
﻿
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

        // N채pp채inten asettaminen liikkumieen
        this.keys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
        this.asteroids = this.physics.add.group();

        // Luo asteroidit
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                const y = Phaser.Math.Between(50, 670);
                const asteroid = this.asteroids.create(1300, y, 'asteroid');
                asteroid.setVelocityX(-300);
                asteroid.setImmovable(true);
                const scale = Phaser.Math.FloatBetween(1, 5);
                asteroid.setScale(scale);

                // Asteroidien kest채vyys vastaa niiden kokoa
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

            asteroid.setTint(0xff0000);
            this.time.delayedCall(100, () => {
                asteroid.clearTint();
            });

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

                // Tuhoaa asteroidit jotka menev채t pois ruudulta
        this.asteroids.getChildren().forEach((asteroid) => {
            if (asteroid.x < -50) {
                this.asteroids.remove(asteroid, true, true);
                this.score -= 50;
                this.scoreText.setText('Score: ' + this.score);
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
Start.js
5 KB
