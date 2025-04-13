import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false // set true for debugging collisions
        }
    },
    scene: [Start]
};

const game = new Phaser.Game(config)
            