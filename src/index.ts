import './styles/main.scss';
import { Neuroevolution } from 'ts-neuroevolution';

const canvas: HTMLCanvasElement = document.querySelector('#main-canvas')! as HTMLCanvasElement;
const ctx:CanvasRenderingContext2D = canvas.getContext('2d')!;

/**
 * Events
 * */

const resize = (canvas: HTMLCanvasElement): void => {
  const { innerWidth, innerHeight } = window;

  canvas.width = innerWidth * 2;
  canvas.height = innerHeight * 2;
  
  
};

window.addEventListener('DOMContentLoaded', () => {
  resize(canvas);
});

window.addEventListener('resize', () => {
  resize(canvas);
});
