import { startContainers } from "./containers.js";
import { startGameArea } from "./gameAreaConfig.js";
import {
  blocksArray,
  newBlock,
  newFigure,
  downBlockPosition,
  newFigureBlocks,
  moveRigth,
  moveLeft,
  rotate,
} from "./blocks.js";
import { moveDownTouch, moveLeftTouch, moveRigthTouch } from "./touchControls.js";

//inicializacion y configuraciond el stage
export let _W = window.innerWidth;
export let _H = window.innerHeight;
export const app = new PIXI.Application({
  background: "#33ff66",
  width: _W,
  height: _H,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  resizeTo: window,
});

document.body.appendChild(app.view);
// document.getElementById("body").requestFullscreen();
app.ticker.maxFPS = 30;
app.stage.interactive = true;
app.stage.interactiveChildren = true;

app.stage.hitArea = app.screen;
app.stage.sortableChildren = true;
app.stage.hitArea.width = _W;
app.stage.hitArea.height = _H;

//carga textura de fondo
const texture = PIXI.Texture.from("./assets/backColor.png");
const tilingSprite = new PIXI.TilingSprite(
  texture,
  app.screen.width,
  app.screen.height
);
app.stage.addChild(tilingSprite);

//inicializacion Variables iniciales
export let blockSize = Math.floor(_W / 15);

export let gameArea_Width = blockSize*14
export let gameArea_Height = Math.floor(_H * 0.8 - _W * 0.02);

export let gameArea_x = Math.floor((_W-gameArea_Width)/2);
export let gameArea_y = Math.floor(_H * 0.2);


console.log(  gameArea_Width      )

console.log(  blockSize      )
startContainers();
startGameArea();
newFigure();



let moveCounter_Rigth = 0;
let moveCounter_Left = 0;

const gameLogic = () => {
  if (tickerCounter % 30 === 0) {
    downBlockPosition()
  }

  //rigth--------------------------------------------
  if (moveRigthTouch) {
    if (moveCounter_Rigth < 1) {
      moveRigth();
      moveCounter_Rigth++;
    } else {
      moveCounter_Rigth++;

      if (moveCounter_Rigth % 5 === 0) {
        moveRigth();
      }
    }
  } else {
    moveCounter_Rigth = 0;
  }

  //left --------------
  if (moveLeftTouch) {
    if (moveCounter_Left < 1) {
      moveLeft();
      moveCounter_Left++;
    } else {
      moveCounter_Left++;

      if (moveCounter_Left % 5 === 0) {
        moveLeft();
      }
    }
  } else {
    moveCounter_Left = 0;
  }


  if (moveDownTouch) {
    downBlockPosition();
    }
  






















};

//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
let tickerCounter = 0;
app.ticker.add(() => {
  gameLogic();
  tickerCounter++;
});

export let selectedGroup = [];

//################    EVENTOS DE ENTRADA    ################

addEventListener("keydown", (e) => {
  console.log(e.key);

  if (e.key === "ArrowUp") {
    rotate();
  }

  if (e.key === "ArrowRight") {
    moveRigth();
  }

  if (e.key === "ArrowLeft") {
    moveLeft();
  }

  if (e.key === "ArrowDown") {
    downBlockPosition();
  }
});

// //no esta bien la distincion entre un click y click y arrastrar

// app.stage.on("mousemove", (event) => {
//   console.log("move derecho")

// });

// app.stage.on("mousedown", (event) => {
//   let posX = event.global.x - app.stage.x;
//   let posY = event.global.y - app.stage.y;

//   mousedown = { x: posX, y: posY };
// });

// app.stage.on("mouseup", (event) => {});

// app.stage.on("click", (event) => {

//   console.log(  mouseposition    )
// });
