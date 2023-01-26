import { asset } from './assets-loader';
import Sprite_bg from '../assets/sprites/background.png';

export default class Background implements IIterableObject {
  private speed: number;
  private position: ICoordinate;
  private img?: HTMLImageElement;
  private contextAttr: IContextAttributes;
  private minimumRatio: number;
  
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
    this.minimumRatio = 0;
  }

  public resize({ width, height }: IContextAttributes): void {
    this.contextAttr = { width, height };
    this.minimumRatio = Math.min(width, height)
  }

  public setOptions(options: IBackgroundOptions): void {
    const { speed, width, height, img } = options;

    this.img = asset(img) as HTMLImageElement;
    this.contextAttr = { width, height };
    this.speed = speed;
    this.minimumRatio = Math.min(width, height)
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
    const sequence: number = Math.ceil(width / (imgWidth * imgRatio)) + 1;
    for (let i = 0; i < sequence; i++) {
      // prettier-ignore
      ctx.drawImage(
        this.img!, 
        (i * imgWidth) - (x % imgWidth), 
        y, 
        width * imgRatio, 
        height * imgRatio
      );
    }
  }
}
