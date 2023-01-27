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
import Bird from './model/bird';
import Pipe from './model/pipe';

const canvas: HTMLCanvasElement = document.querySelector('#main-canvas')! as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

const birdCount: number = 10;

const birdProps: IBirdOptionsOptional = {
  alive: true,
  position: {
    x: 200,
    y: 500
  },
  width: 70,
  height: 60,
  gravity: 0,
  velocity: {
    y: 0.3,
    x: 0.3
  },
  jump: -6
}

const birds:Bird[] = [];
const pipes: Pipe[] = [];
const bg = new Background();

const Update = () => {
  bg.update();
  for(const bird of birds) {
    bird.update();
  }
  for(const pipe of pipes) {
    pipe.update();
  }
};

const Initialize = () => {
  resize(canvas);
  const { width, height } = canvas;

  // Background
  bg.setOptions({
    width: width,
    height: height,
    speed: 0.5,
    img: Sprite_bg
  });

  for(let i = 0; i < 1; i++) {
    birds.push(new Bird(birdProps));
  }
  const deltaBord = 50;
  const pipeHoll = 200;
  const hollStartPosition = (height - (deltaBord * 2)) - pipeHoll;
 
  //for(let i = 0; i < 10; i++) {
    const hollPosition = Math.round(Math.random() * hollStartPosition) + deltaBord;
    const topPipe = new Pipe({
      position: {
        x: width, 
        y: 0
      },
      width: 100,
      height: hollPosition,
      pos: "top",
      velocity: {
        x: 3,
        y: 3
      }
    });
    const bottomPipe =  new Pipe({
      position: {
        x: width, 
        y: (hollPosition + pipeHoll)
      },
      width: 100,
      height: height,
      pos: "bottom",
      velocity: {
        x: 3,
        y: 3
      }
    })

    pipes.push(topPipe);
    pipes.push(bottomPipe);
 // }

  setInterval(() => birds[0].flap(), 600);
  // Update our objects by interval
  setInterval(Update, 1000 / 60);
  
};
canvas.onclick = () => {
  birds[0].flap()
  console.log("sada")
}

/**
 * Separate the drawing into object update to reduce flickering
 * during speed up or speed down of the game
 * */
const Frames = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.display(ctx);
  
  for(const pipe of pipes) {
    pipe.display(ctx);
  }

  for(const bird of birds){
    bird.display(ctx);
  }

  window.requestAnimationFrame(Frames);
};


/**
 * Events
 * */
window.addEventListener('DOMContentLoaded', () => {
  // Load all assets first
  // prettier-ignore
  const spritesArray: string[] = [
    Sprite_bg,
    Sprite_pipe_top,
    Sprite_bird,
    Sprite_pipe_bottom
  ];
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
