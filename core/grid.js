import { app } from "./core.js";

export const mapBlocks = [];
export const minMapBlockSize = 20;
export const screenWidthMapBlocks = 50;





export const startGrid = () => {
  ////////////////////////////////////////////////////
  let mapBlockIndex = 0;
  for (
    let yPixel = 0;
    yPixel < screenWidthMapBlocks * minMapBlockSize;
    yPixel = yPixel + minMapBlockSize
  ) {
    for (
      let xPixel = 0;
      xPixel < screenWidthMapBlocks * minMapBlockSize;
      xPixel = xPixel + minMapBlockSize
    ) {
      let blockRect;

      if (true) {

        const mapBlockRect = new PIXI.Graphics();
        mapBlockRect.beginFill(0xde3249);
        mapBlockRect.drawRect(xPixel, yPixel, minMapBlockSize, minMapBlockSize);
        mapBlockRect.endFill();
        mapBlockRect.alpha = 0;

        blockRect = mapBlockRect;
        app.stage.addChild(blockRect);

        const mapBlockGrid = new PIXI.Graphics();
        mapBlockGrid.lineStyle(2, 0xffd900, 1);
        mapBlockGrid.moveTo(xPixel, yPixel);
        mapBlockGrid.lineTo(xPixel + minMapBlockSize, yPixel);
        mapBlockGrid.moveTo(xPixel + minMapBlockSize, yPixel);
        mapBlockGrid.lineTo(xPixel + minMapBlockSize, yPixel + minMapBlockSize);
        mapBlockGrid.closePath();
        app.stage.addChild(mapBlockGrid);
      }

      mapBlocks.push({
        index: mapBlockIndex,
        x: xPixel,
        y: yPixel,
        midX: xPixel + minMapBlockSize / 2,
        midY: yPixel + minMapBlockSize / 2,
        size: minMapBlockSize,
        blockRect:  blockRect ,
        occupied: false,
        units: [],
        render: false,
      });
      mapBlockIndex++;
    }
  }


};
