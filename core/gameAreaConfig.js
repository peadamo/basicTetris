import { tetrisAreaContainer } from "./containers.js";
import {
  _H,
  _W,
  blockSize,
  gameArea_Height,
  gameArea_Width,
  gameArea_x,
  gameArea_y,
} from "./core.js";
export let rows = 0;
export let columns = 0;
export const rowsGrid = [];

export const grid = [];
export const startGameArea = (params) => {
  //game area sizes

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

  //start background
  let newPiceArea = new PIXI.Graphics();
  newPiceArea.beginFill(0x1d1b1b);
  newPiceArea.drawRect(
    gameArea_x + gameArea_Width / 3,
    gameArea_y - blockSize * 4.8,
    gameArea_Width / 3,
    blockSize * 4.8
  );
  tetrisAreaContainer.addChild(newPiceArea);

  //start backGridd
  //horizontal lines
  for (
    let index = gameArea_y + gameArea_Height;
    index > gameArea_y;
    index = index - blockSize
  ) {
    rows++;

    let gridLine = new PIXI.Graphics();
    gridLine.lineStyle(2, 0x3b3939, 1);
    gridLine.moveTo(gameArea_x, index);
    gridLine.lineTo(gameArea_x + gameArea_Width, index);
    tetrisAreaContainer.addChild(gridLine);
  }
  //vertical lines
  for (
    let index = gameArea_x;
    index < gameArea_x + gameArea_Width;
    index = index + blockSize
  ) {
    columns++;
    let gridLine = new PIXI.Graphics();
    gridLine.lineStyle(2, 0x3b3939, 1);
    gridLine.moveTo(index, gameArea_y);
    gridLine.lineTo(index, gameArea_y + gameArea_Height);
    tetrisAreaContainer.addChild(gridLine);
  }
  //creacion del array de grilla con posiciones de los puntos de comprobacion
  for (let indexColumn = -1; indexColumn < columns + 1; indexColumn++) {


    for (let indexRow = 0; indexRow < rows; indexRow++) {
      let xPos = indexColumn * blockSize + gameArea_x;

      let YPos = gameArea_y + gameArea_Height - indexRow * blockSize;

      let free = true;


      if (indexColumn === columns) {
        free = false;
        // let gridPoint = new PIXI.Graphics();
        // gridPoint.beginFill(0xff5722);
        // gridPoint.drawRect(xPos, YPos, 5, 5);
        // tetrisAreaContainer.addChild(gridPoint);
      }

      if (indexColumn === -1) {
        free = false;
        // let gridPoint = new PIXI.Graphics();
        // gridPoint.beginFill(0xff5722);
        // gridPoint.drawRect(xPos, YPos, 5, 5);
        // tetrisAreaContainer.addChild(gridPoint);
      }

      if (indexRow === 0) {
        free = false;
        // let gridPoint = new PIXI.Graphics();
        // gridPoint.beginFill(0xff5722);
        // gridPoint.drawRect(xPos, YPos, 5, 5);
        // tetrisAreaContainer.addChild(gridPoint);
      }

      grid.push({ x: xPos, y: YPos, free: free });
    }
  }




const tempPointBlabla=

  grid.filter(
    (e) => e.y === grid[0].y
  );

   

for (let index = 0; index < tempPointBlabla.length; index++) {
  const element = tempPointBlabla[index];
  
  rowsGrid.push(element)


}


  //testBlock
};
