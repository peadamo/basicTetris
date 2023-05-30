import { tetrisAreaContainer } from "./containers.js";
import { _H, _W } from "./core.js";

export const startGameArea = (params) => {
  //game area sizes
  let gameArea_Width = _W * 0.96;
  let gameArea_Height = _H * 0.8 - _W * 0.02;
  let gameArea_x = _W * 0.02;
  let gameArea_y = _H * 0.2;
  let blockSize = gameArea_Width / 12;

  //start background
  let gameAreaBackGround = new PIXI.Graphics();
  gameAreaBackGround.beginFill(0x1d1b1b);
  gameAreaBackGround.drawRect(
    gameArea_x,
    gameArea_y,
    gameArea_Width,
    gameArea_Height
  );
  tetrisAreaContainer.addChild(gameAreaBackGround);

  //start backGridd
//horizontal lines
  for (
    let index = gameArea_y + gameArea_Height;
    index > gameArea_y;
    index = index - blockSize
  ) {
    let gridLine = new PIXI.Graphics();
    gridLine.lineStyle(2, 0x3b3939, 1);
    gridLine.moveTo(gameArea_x, index);
    gridLine.lineTo(gameArea_x + gameArea_Width, index);
    tetrisAreaContainer.addChild(gridLine);
  }
//vertical lines
for (
    let index = gameArea_x;
    index < gameArea_x+gameArea_Width;
    index = index + blockSize
  ) {
    let gridLine = new PIXI.Graphics();
    gridLine.lineStyle(2, 0x3b3939, 1);
    gridLine.moveTo(index, gameArea_y );
    gridLine.lineTo(index, gameArea_y + gameArea_Height);
    tetrisAreaContainer.addChild(gridLine);
  }












  //testBlock
};
