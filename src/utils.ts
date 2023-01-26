export const resize = (canvas: HTMLCanvasElement): void => {
  const { innerWidth, innerHeight } = window;

  canvas.width = innerWidth * 2;
  canvas.height = innerHeight * 2;
};
