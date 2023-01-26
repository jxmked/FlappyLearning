import './styles/main.scss';

// prettier-ignore
import {
  resize
} from './utils';

import { Neuroevolution } from 'ts-neuroevolution';
import Background from './model/background';
import AssetsLoader from './model/assets-loader';

// Import Assets
import Sprite_bg from './assets/sprites/background.png';
import Sprite_bird from './assets/sprites/bird.png';
import Sprite_pipe_bottom from './assets/sprites/pipebottom.png';
import Sprite_pipe_top from './assets/sprites/pipetop.png';

// prettier-ignore
const spritesArray: string[] = [
  Sprite_bg,
  Sprite_pipe_top,
  Sprite_bird,
  Sprite_pipe_bottom
];

const canvas: HTMLCanvasElement = document.querySelector('#main-canvas')! as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

const birds = [];
const pipes = [];
const bg = new Background();

const Update = () => {
  bg.update();
};

const Initialize = () => {
  resize(canvas);

  // Background
  bg.setOptions({
    width: canvas.width,
    height: canvas.height,
    speed: 0.5,
    img: Sprite_bg
  });

  // Update our objects by interval
  setInterval(Update, 1000 / 60);
};


/**
 * Separate the drawing into object update to reduce flickering
 * during speed up or speed down of the game
 * */
const Frames = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.display(ctx);

  window.requestAnimationFrame(Frames);
};


/**
 * Events
 * */
window.addEventListener('DOMContentLoaded', () => {
  // Load all assets first
  const assetsLoader = new AssetsLoader(spritesArray);

  assetsLoader.then(() => {
    Initialize();
    Frames();
  });
});

window.addEventListener('resize', () => {
  resize(canvas);
  const { width, height } = canvas;

  // Resize our Background
  bg.resize({ width, height });
});
