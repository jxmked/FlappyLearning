/**
 * For this object only
 * */
interface IAssetsLoaderLoader {
  test: RegExp;
  loader: Function;
}

export default class AssetsLoader {
  private static assets: Map<string, any> = new Map<string, any>();
  private static loaded: number = 0;
  private callback: Function;
  private static sources: string[] = [];

  constructor(sources: string[]) {
    this.callback = () => {};
    AssetsLoader.sources.push(...sources);

    const loaders: IAssetsLoaderLoader[] = [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: AssetsLoader.img
      }
    ];

    const loading = sources.map((source: string) => {
      return new Promise(async (res: Function, rej: Function) => {
        for (const { test, loader } of loaders) {
          if (test.test(source)) {
            loader(source, res, rej);
          }
        }
      });
    });

    Promise.all(loading).then(() => {
      this.callback();
    });
  }

  /**
   * Drivers
   * */
  private static img(source: string, res: any, rej: OnErrorEventHandler): void {
    const img: HTMLImageElement = new Image();

    img.src = source;
    img.onload = res;
    img.onerror = rej;

    AssetsLoader.assets.set(source, img);
  }

  /**
   * Public Methods
   * */
  // Call the instance function after all assets has been loaded
  then(callback: Function): void {
    this.callback = callback;
  }

  static get(source: string): any {
    return AssetsLoader.assets.get(source);
  }
}

export const asset = AssetsLoader.get;
