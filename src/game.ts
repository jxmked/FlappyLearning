import Bird from './model/bird';
import Pipe from './model/pipe';
import Background from './model/background';

class Game {
  birds: Bird[];
  pipes: Pipe[];
  background: Background;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.background = new Background();
    this.birds = [];
    this.pipes = [];
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d')!;
  }

  public clearContext(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public update(): void {
    this.background.update();

    for (const bird of this.birds) {
      bird.update();
    }

    for (const pipe of this.pipes) {
      pipe.update();
    }
  }

  public display(): void {
    this.clearContext();

    for (const pipe of this.pipes) {
      pipe.display(this.context);
    }
    for (const bird of this.birds) {
      bird.display(this.context);
    }
  }

  public initialize(): void {
    // Background
    this.background.setOptions({
      width: this.canvas.width,
      height: this.canvas.height,
      speed: 0.5
    });
  }

  public addBird(props?: IBirdOptionsOptional) {
    props = Object.assign(
      {
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
      },
      props
    );

    this.birds.push(new Bird(props));
  }

  public resize({ width, height }: IContextAttributes): void {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}

export default Game;
