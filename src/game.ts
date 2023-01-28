import Bird from './model/bird';
import Pipe from './model/pipe';
import Background from './model/background';

class Game {
  birds: Bird[];
  pipes: Pipe[];
  background: Background;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  private isPause: boolean;
  private pipeInterval: number;
  private pipeUsedInterval: number;
  private birdsAlive: number;
  private globalPause: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.background = new Background();
    this.birds = [];
    this.pipes = [];
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d')!;
    this.isPause = false;
    this.pipeInterval = 170; // Frames
    this.pipeUsedInterval = 0;
    this.birdsAlive = 0;
    this.globalPause = false;
  }

  public initialize(): void {
    // Background
    this.background.setOptions({
      width: this.canvas.width,
      height: this.canvas.height,
      speed: 0.5
    });
  }

  public clearContext(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public update(): void {
    if (this.isPause || this.globalPause) return;

    this.pipeUsedInterval++;
    if(this.pipeInterval <= this.pipeUsedInterval) {
      this.addPipe();
      this.pipeUsedInterval = 0;
    }

    this.background.update();

    for (const bird of this.birds) {
      if(! bird.alive) continue;

      bird.update();

      if(bird.isDead(this.canvas.height, this.pipes)) {
        bird.alive = false;
        this.birdsAlive--;

      }
    }

    for (const pipeIndex in this.pipes) {
      this.pipes[pipeIndex].update();
      if(this.pipes[pipeIndex].isOut()) {
        delete this.pipes[pipeIndex];
      }
    }
  }

  public display(): void {
    this.clearContext();

    this.background.display(this.context);

    if(this.globalPause) return;

    for (const pipe of this.pipes) {
      try{
        pipe.display(this.context);
      } catch(err) {}
    }

    for (const bird of this.birds) {
      try {
        bird.display(this.context);
      } catch(err) {}
    }
  }

  public addPipe(): void {
    const { height, width } = this.canvas;
    const deltaBord = 50;
    const pipeHoll = 200;
    const hollStartPosition = height - (deltaBord * 2) - pipeHoll;

    const hollPosition = Math.round(Math.random() * hollStartPosition) + deltaBord;

    // top pipe
    const topPipeAttr = {
      position: {
        x: width,
        y: 0
      },
      width: 100,
      height: hollPosition,
      pos: 'top',
      velocity: { x: 3, y: 0 }
    };

    const bottomPipeAttr = {
      position: {
        x: width,
        y: hollPosition + pipeHoll
      },
      width: 100,
      height: height,
      pos: 'bottom',
      velocity: { x: 3, y: 0 }
    };

    this.pipes.push(new Pipe(topPipeAttr));
    this.pipes.push(new Pipe(bottomPipeAttr));
  }

  public addBird(props?: IBirdOptionsOptional) {
    // Default bird property
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
    this.birdsAlive++;
    this.birds.push(new Bird(props));
  }

  public onResize({ width, height }: IContextAttributes): void {
    this.canvas.width = width;
    this.canvas.height = height;
    this.background.resize({ width, height });
  }

  /**
   * Events
   */
  public pause(): void {
    this.isPause = true;
  }
  public resume(): void {
    this.isPause = false;
  }
  public get state(): string {
    return this.isPause === true ? 'pause' : 'play';
  }

  public restart(): void {
    this.globalPause = true;
    // Delete all
    this.pipes.splice(0, this.pipes.length);
    this.birds.splice(0, this.birds.length);

  }
}

export default Game;
