interface IIterableObject {
  public update(): void;
  public display(ctx: CanvasRenderingContext2D): void;
}

interface ICoordinate {
  x: number;
  y: number;
}

interface IContextAttributes {
  width: number;
  height: number;
}

interface IBackgroundOptions extends IContextAttributes {
  speed: number;
  img: string;
}
