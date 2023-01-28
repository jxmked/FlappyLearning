import { asset } from './assets-loader';
import Sprite_bg from '../assets/sprites/background.png';

export default class Background implements IIterableObject {
  private speed: number;
  private position: ICoordinate;
  private img?: HTMLImageElement;
  private contextAttr: IContextAttributes;

  constructor() {
    this.contextAttr = {
      width: 0,
      height: 0
    };

    this.speed = 0;
    this.position = {
      x: 0,
      y: 0
    };
    this.img = asset(Sprite_bg) as HTMLImageElement;
  }

  public resize({ width, height }: IContextAttributes): void {
    this.contextAttr = { width, height };
  }

  public setOptions(options: IBackgroundOptions): void {
    const { speed, width, height } = Object.assign(this, options);

    if (options.img) this.img = asset(options.img) as HTMLImageElement;

    this.contextAttr = { width, height };
    this.speed = speed;
  }

  public update(): void {
    this.position.x += this.speed;
  }

  public display(ctx: CanvasRenderingContext2D): void {
    const { width, height } = this.contextAttr;
    const { x, y } = this.position;
    const imgWidth = this.img!.width;
    const imgHeight = this.img!.height;
    const imgRatio = imgWidth / imgHeight;
    const sequence = Math.ceil(width / (imgWidth * imgRatio)) + 1;
    const drawWidth = width * imgRatio - (imgWidth + width);

    for (let i = 0; i < sequence; i++) {
      // prettier-ignore
      ctx.drawImage(
        this.img!, 
        (i * imgWidth) - (x % imgWidth), 
        y, 
        drawWidth,
        height
      );
    }
  }
}