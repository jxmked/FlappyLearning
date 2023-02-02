import './styles/main.scss';
import gtagPageview from './gtag';
import Game from './game';
import AssetsLoader from './model/assets-loader';
import ZeroTimeout from './model/zero-timeout';

// Assets
import Sprite_bg from './assets/sprites/background.png';
import Sprite_bird from './assets/sprites/bird.png';
import Sprite_pipe_bottom from './assets/sprites/pipebottom.png';
import Sprite_pipe_top from './assets/sprites/pipetop.png';
import { IExportData } from 'ts-neuroevolution/dist/declarations/types/neuroevolution-config';

import raf from 'raf';

// Page Viewed
gtagPageview(window.location.href.toString());

/**
 * Control Button Elements
 */
const controls = {
  game: {
    speedRange: document.querySelector('#gs-speed')! as HTMLInputElement,
    toggle: document.querySelector('#gs-toggle')! as HTMLButtonElement,
    reset: document.querySelector('#gs-reset')! as HTMLButtonElement,
    endGen: document.querySelector('#gs-end-gen')! as HTMLButtonElement
  },
  ai: {
    toggle: document.querySelector('#as-toggle')! as HTMLButtonElement,
    reset: document.querySelector('#as-reset')! as HTMLButtonElement,
    import: document.querySelector('#as-imp')! as HTMLButtonElement,
    export: document.querySelector('#as-exp')! as HTMLButtonElement
  }
};

const Board = {
  alive: document.querySelector('#alive')! as HTMLSpanElement,
  score: document.querySelector('#score')! as HTMLSpanElement,
  highest: document.querySelector('#highest')! as HTMLSpanElement,
  generation: document.querySelector('#generation')! as HTMLSpanElement
};

const canvas: HTMLCanvasElement = document.querySelector('#main-canvas')!;
const currentSpeedElement = document.querySelector('#current-speed') as HTMLSpanElement;
const GAME = new Game(canvas);
let gameSpeed = 60;
let restarted = false;
let highest = 0;
let ival: ReturnType<typeof window.setTimeout>;
let loaded = false;

const Update = () => {
  GAME.update();

  if (gameSpeed === 0) {
    ZeroTimeout(Update);
  } else if (gameSpeed === 60) {
    raf(Update);
  } else {
    ival = setTimeout(Update, 1000 / gameSpeed);
  }
};

// Animate
const Animate = () => {
  GAME.display();

  Board.alive.innerHTML = String(GAME.birdsAlive);

  if (GAME.score > highest) {
    highest = GAME.score;
  }
  Board.highest.innerHTML = String(highest);
  Board.score.innerHTML = String(GAME.score);
  Board.generation.innerHTML = String(GAME.generationCount);
  raf(Animate);
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

    // Canvas size*2
    GAME.onResize({
      width: 1000,
      height: 1000
    });

    raf(Animate);

    loaded = true;
    controls.game.toggle.innerHTML = 'Play';
    currentSpeedElement.innerHTML = String(gameSpeed);
  });
});

controls.game.toggle.addEventListener('click', () => {
  // Game Toggle Pause
  if (loaded && !restarted) {
    controls.game.reset.click();
    controls.game.toggle.innerHTML = 'Pause';
    return;
  }

  if (GAME.state === 'play') {
    GAME.pause();
    controls.game.toggle.innerHTML = 'Resume';
  } else if (GAME.state === 'pause') {
    GAME.resume();
    controls.game.toggle.innerHTML = 'Pause';
  }
});

controls.game.reset.addEventListener('click', () => {
  // Game toggle restart
  if (!loaded) return;
  if (!restarted) Update();

  // Update Toggle Pause/Play Button
  controls.game.toggle.innerHTML = GAME.state === 'play' ? 'Pause' : 'Resume';

  restarted = true;
  GAME.restart();
});

controls.game.speedRange.addEventListener('input', () => {
  if (!loaded) return;

  const value = parseInt(controls.game.speedRange.value);

  switch (value) {
    case 0:
      gameSpeed = 60;
      break;

    case 1:
      gameSpeed = 256;
      break;

    case 2:
      gameSpeed = 512;
      break;

    case 3:
      gameSpeed = 700;
      break;

    case 4:
      gameSpeed = 1000;
      break;

    case 5:
      gameSpeed = 0;
      window.clearTimeout(ival);
      if (restarted) Update();
      currentSpeedElement.innerHTML = 'MAX';
      return;

    case -1:
      gameSpeed = 30;
      break;

    default:
      gameSpeed = 10;
  }

  currentSpeedElement.innerHTML = String(gameSpeed);
});

controls.ai.export.addEventListener('click', () => {
  // AI Export data
  const data: IExportData = GAME.exportData();
  const file = new Blob([JSON.stringify(data)], {
    type: 'text/plain'
  });

  const tmp = document.createElement('a');
  tmp.setAttribute('href', URL.createObjectURL(file));
  tmp.setAttribute('download', 'Neuroevolution-export.json');
  tmp.style.display = 'none';
  document.body.appendChild(tmp);
  tmp.click();
  tmp.remove();
});

controls.ai.import.addEventListener('click', () => {
  // AI import data
  const tmpFileInput = document.createElement('input');
  const reader = new FileReader();

  tmpFileInput.setAttribute('type', 'file');
  tmpFileInput.style.display = 'none';

  tmpFileInput.addEventListener('change', () => {
    if (tmpFileInput.files![0] != void 0) reader.readAsText(tmpFileInput.files![0]);
  });

  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result as string);
      GAME.importData(data as IExportData);

      alert('Imported');
    } catch (err) {
      console.warn(err);
      alert('Failed to import');
    }
  };

  document.body.appendChild(tmpFileInput);
  tmpFileInput.click();
  tmpFileInput.remove();
});

controls.game.endGen.addEventListener('click', () => {
  GAME.endGeneration();
  controls.game.toggle.click();
});
