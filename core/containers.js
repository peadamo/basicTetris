import { _H, _W, app } from "./core.js";

export let dataDisplayContainer = new PIXI.Container();
export let tetrisAreaContainer = new PIXI.Container();
export let startMenuContainer = new PIXI.Container();
export let gameContainer = new PIXI.Container();




export const startContainers = () => {
    //definicion del container principal
//   dataDisplayContainer.sortableChildren = true;
//   dataDisplayContainer.interactive = false;
//   dataDisplayContainer.interactiveChildren = true;
app.stage.addChild(gameContainer);

  gameContainer.addChild(dataDisplayContainer);
  gameContainer.addChild(tetrisAreaContainer);







//   let tetrisAreaContainer = new PIXI.Container();
//   tetrisAreaContainer.sortableChildren = true;
//   tetrisAreaContainer.interactive = false;
//   tetrisAreaContainer.interactiveChildren = true;
//   tetrisAreaContainer.width = _W;
//   tetrisAreaContainer.heigth = _H;
//   app.stage.addChild(tetrisAreaContainer);




//   let obj = new PIXI.Graphics();
//   obj.beginFill(0xff0000);

//   obj.drawRect(0, 0, 200, 100);
//   tetrisAreaContainer.addChild(obj);

//   console.log(tetrisAreaContainer.width);
};
