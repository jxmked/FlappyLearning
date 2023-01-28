import './styles/main.scss';

import Game from './game';
import AssetsLoader from './model/assets-loader';

// Assets
import Sprite_bg from './assets/sprites/background.png';
import Sprite_bird from './assets/sprites/bird.png';
import Sprite_pipe_bottom from './assets/sprites/pipebottom.png';
import Sprite_pipe_top from './assets/sprites/pipetop.png';

/**
 * Control Elements
 */
const controls = {
  game: {
    speedRange: document.querySelector('#gs-speed')!,
    toggle: document.querySelector('#gs-toggle')!,
    reset: document.querySelector('#gs-reset')!
  },
  ai: {
    toggle: document.querySelector('#as-toggle')!,
    reset: document.querySelector('#as-reset')!,
    import: document.querySelector('#as-imp')!,
    export: document.querySelector('#as-exp')!
  }
};

const canvas: HTMLCanvasElement = document.querySelector('#main-canvas')!;
const GAME = new Game(canvas);

const Update = () => {
  GAME.update();
};

// Animate
const Animate = () => {
  GAME.display();
  window.requestAnimationFrame(Animate);
};

// Begin load assets
window.addEventListener('DOMContentLoaded', () => {
  // prettier-ignore
  const spritesArray: string[] = [
    Sprite_bg,
    Sprite_pipe_top,
    Sprite_bird,
    Sprite_pipe_bottom
  ];

  new AssetsLoader(spritesArray).then(() => {
    GAME.initialize();
    GAME.onResize({
      width: 1000,
      height: 1000
    });
    Animate();

    setInterval(Update, 1000 / 60);
  });
});

// Toggle game pause and play
controls.game.toggle.addEventListener('click', () => {
  if (GAME.state === 'play') {
    GAME.pause();
    controls.game.toggle.innerHTML = 'Resume';
  } else if (GAME.state === 'pause') {
    GAME.resume();
    controls.game.toggle.innerHTML = 'Pause';
  }
});

controls.game.reset.addEventListener('click', () => {
  try {
    GAME.birds[0].flap();
  } catch (err) {}
});
controls.ai.reset.addEventListener('click', () => {
  GAME.addBird();
});
