import Bird from './model/bird';
import Pipe from './model/pipe';
import Background from './model/background';
import { Neuroevolution } from 'ts-neuroevolution';
import Network from 'ts-neuroevolution/dist/declarations/network/network';
import { IExportData } from 'ts-neuroevolution/dist/declarations/types/neuroevolution-config';

class Game {
  public birds: Bird[];
  public pipes: Pipe[];
  private background: Background;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private isPause: boolean;
  private pipeInterval: number;
  private pipeUsedInterval: number;
  public birdsAlive: number;
  private globalPause: boolean;
  public score: number;
  public Neuvol: Neuroevolution;
  public NeuvolGen: Network[];
  public generationCount: number;
  public pauseAfterGen: boolean;
  private endGen: boolean;
  private threshold: number;

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
    this.Neuvol = new Neuroevolution({
      network: [2, [3], 1],
      population: 50
    });
    this.NeuvolGen = [];
    this.score = 0;
    this.generationCount = 0;
    this.pauseAfterGen = false;
    this.endGen = false;

    /**
     * Allowing to access the instance into console
     */
    // @ts-ignore
    window.Neuroevolution = this.Neuvol;
    // @ts-ignore
    window.NeuvolGen = this.NeuvolGen;

    // Flap
    this.threshold = 0.5;
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
    this.background.update();

    if (this.birds.length < 1) {
      this.restart();
    }

    this.score++;
    this.pipeUsedInterval++;

    if (this.pipeInterval <= this.pipeUsedInterval) {
      this.addPipe();
      this.pipeUsedInterval = 0;
    }

    // Get the next holl
    let nextHoll: number = 0;
    for (const pipe of this.pipes) {
      try {
        if (pipe.position.x + pipe.width > this.birds[0].position.x) {
          nextHoll = pipe.height / this.canvas.height;
          break;
        }
      } catch (err) {}
    }

    for (let i = 0; i < this.NeuvolGen.length; i++) {
      if (!this.birds[i].alive) continue;

      const res = this.NeuvolGen[i].compute([this.birds[i].position.y / this.canvas.height, nextHoll]);

      if (res[0] > this.threshold) {
        this.birds[i].flap();
      }

      this.birds[i].update();

      if (this.endGen || this.birds[i].isDead(this.canvas.height, this.pipes)) {
        this.birds[i].alive = false;
        this.birdsAlive--;
        this.Neuvol.networkScore(this.NeuvolGen[i], this.score);

        if (this.birdsAlive <= 0) {
          this.restart();
        }
      }
    }

    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].update();
      if (this.pipes[i].isOut()) {
        this.pipes.splice(i, 1);
        i--;
      }
    }
  }

  public display(): void {
    this.clearContext();

    this.background.display(this.context);

    if (this.globalPause) return;

    for (const pipe of this.pipes) {
      try {
        pipe.display(this.context);
      } catch (err) {}
    }

    for (const bird of this.birds) {
      bird.display(this.context);
    }
  }

  public addPipe(): void {
    const { height, width } = this.canvas;
    const pipeWidth = 110;
    const deltaBord = 70;
    const pipeHoll = 200;
    const hollStartPosition = height - deltaBord * 2 - pipeHoll;

    const hollPosition = Math.round(Math.random() * hollStartPosition) + deltaBord;

    // top pipe
    const topPipeAttr = {
      position: {
        x: width,
        y: 0
      },
      width: pipeWidth,
      height: hollPosition,
      pos: 'top',
      velocity: { x: 3, y: 0 }
    };

    // Bottom pipe
    const bottomPipeAttr = {
      position: {
        x: width,
        y: hollPosition + pipeHoll
      },
      width: pipeWidth,
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

  public endGeneration(): void {
    this.endGen = true;
  }

  public restart(): void {
    this.globalPause = true;
    // Delete all
    this.pipes.splice(0, this.pipes.length);
    this.birds.splice(0, this.birds.length);

    this.score = 0;
    this.birdsAlive = 0;

    for (let i = 0; i < this.Neuvol.options.population; i++) {
      this.addBird();
    }

    // Get Generations
    try {
      this.NeuvolGen = this.Neuvol.nextGeneration();
    } catch (err) {
      // Might fail if we hit reset button
      // We can only generate new generation once then
      // we need to feed the neuroevolution with new data
      // before generating new generation again.
      // So, we need this.
      this.Neuvol.resetGeneration();
      this.NeuvolGen = this.Neuvol.nextGeneration();
      this.generationCount = -1;
    }

    this.endGen = false;
    this.generationCount++;
    this.globalPause = false;
  }

  public exportData(): IExportData {
    return this.Neuvol.exportData();
  }

  public importData(data: IExportData): void {
    if (data) {
      this.generationCount = 0;
    }
    this.Neuvol.importData(data);
  }
}

export default Game;
