import { test } from "./blocks.js";
import { startGrid } from "./grid.js";

//inicializacion y configuraciond el stage
export let _W = window.innerWidth;
export let _H = window.innerHeight;
export const app = new PIXI.Application({
  background: "#010506",
  width: _W,
  height: _H,
  resolution: window.devicePixelRatio,
  autoDensity: true,
  resizeTo: window,
});

document.body.appendChild(app.view);
app.stage.interactiveChildren = false;
app.ticker.maxFPS = 25;
app.stage.interactive = true;
app.stage.hitArea = app.screen;
app.stage.sortableChildren = true;
let mousedown = { x: 0, y: 0 };
let mouseposition = { x: 0, y: 0 };
app.stage.hitArea.width = _W;
app.stage.hitArea.height = _H;





test()
startGrid()
const gameLogic = () => {};

//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################
//################    TICKER    ################

app.ticker.add(() => {
  gameLogic();

});

export let selectedGroup = [];

//################    EVENTOS DE ENTRADA    ################

addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "+") {
  }
});

//no esta bien la distincion entre un click y click y arrastrar

app.stage.on("mousemove", (event) => {
  let posX = event.global.x - app.stage.x;
  let posY = event.global.y - app.stage.y;

  mouseposition = { x: posX, y: posY };
});

app.stage.on("mousedown", (event) => {
  let posX = event.global.x - app.stage.x;
  let posY = event.global.y - app.stage.y;

  mousedown = { x: posX, y: posY };
});

app.stage.on("mouseup", (event) => {});

app.stage.on("click", (event) => {


  console.log(  mouseposition    )
});
