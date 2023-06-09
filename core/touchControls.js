import { downBlockPosition, moveLeft, moveRigth, rotate } from "./blocks.js";
import { dataDisplayContainer } from "./containers.js";
import { _H, _W } from "./core.js";

export let moveRigthTouch = false;
export let moveLeftTouch = false;
export let moveDownTouch = false;


export const startControls = () => {
  console.log("controls");

  let rigthTouch = new PIXI.Graphics();
  rigthTouch.beginFill(0xff0000);
  rigthTouch.alpha = 0;
  rigthTouch.drawRect((_W / 3) * 2, _H - _H / 2, _W / 3, _H / 2);
  dataDisplayContainer.addChild(rigthTouch);
  rigthTouch.interactive = true;

  let leftTouch = new PIXI.Graphics();
  leftTouch.beginFill(0xff0000);
  leftTouch.alpha = 0;

  leftTouch.drawRect(0, _H - _H / 2, _W / 3, _H / 2);
  dataDisplayContainer.addChild(leftTouch);
  leftTouch.interactive = true;

  let rotateTouch = new PIXI.Graphics();
  rotateTouch.beginFill(0xff0220);
  rotateTouch.alpha = 0;

  rotateTouch.drawRect(_W / 3, _H - _H / 2, _W / 3, _H / 2);
  dataDisplayContainer.addChild(rotateTouch);
  rotateTouch.interactive = true;




  let downTouch = new PIXI.Graphics();
  downTouch.beginFill(0xff0220);
     downTouch.alpha=0

  downTouch.drawRect(0, _H - _H / 8, _W , _H / 8);
  dataDisplayContainer.addChild(downTouch);
  downTouch.interactive = true;













  downTouch.on("touchstart", (event) => {
    moveDownTouch = true;

  });
  downTouch.on("touchend", (event) => {
    moveDownTouch = false;
  });


  rotateTouch.on("touchstart", (event) => {
    rotate();
  });

  rigthTouch.on("touchstart", (event) => {
    moveRigthTouch = true;
  });

  leftTouch.on("touchstart", (event) => {
    moveLeftTouch = true;
  });

  rigthTouch.on("touchend", (event) => {
    moveRigthTouch = false;
  });

  leftTouch.on("touchend", (event) => {
    moveLeftTouch = false;
  });
};
