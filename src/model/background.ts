import { asset } from './assets-loader';
import Sprite_bg from '../assets/sprites/background.png';

export default class Background implements IIterableObject {
  speed: number;
  position: ICoordinate;
  img?: HTMLImageElement;
  contextAttr: IContextAttributes;

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
    this.img = void 0;
  }
  public resize({ width, height }: IContextAttributes): void {
    this.contextAttr = { width, height };
  }

  public setOptions(options: IBackgroundOptions): void {
    const { speed, width, height, img } = options;

    this.img = asset(img) as HTMLImageElement;
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

    const sequence: number = Math.ceil(width / imgWidth) + 1;

    for (let i = 0; i < sequence; i++) {
      ctx.drawImage(this.img!, i * imgWidth - (x % imgWidth), y, width, height);
    }
  }
}
