import { tetrisAreaContainer } from "./containers.js";
import {
  _W,
  blockSize,
  gameArea_Height,
  gameArea_Width,
  gameArea_x,
  gameArea_y,
} from "./core.js";
import { columns, grid, rows } from "./gameAreaConfig.js";

export const blocksArray = [];
let blockCounter = 0;
export const newBlock = (posX, posY, color1, color2) => {
  let block = new PIXI.Graphics();
  block.lineStyle(blockSize / 10, color2, 1);
  block.beginFill(color1);
  block.drawRect(0, 0, blockSize, blockSize);
  tetrisAreaContainer.addChild(block);

  let blockInside = new PIXI.Graphics();
  blockInside.beginFill(color2);
  blockInside.drawRect(
    0 + blockSize / 3,
    0 + blockSize / 3,
    blockSize / 3,
    blockSize / 3
  );
  block.addChild(blockInside);





//////////////
// const basicText = new PIXI.Text(`${blockCounter}`);

// block.addChild(basicText);

















  block.x = posX;
  block.y = posY;

  blocksArray.push({
    code: blockCounter,
    posX: posX,
    posY: posY,
    move: true,
    sprite: block,
  });
  blockCounter++;
};
export const rotation = { figure: undefined, rot: 0 };
export const newFigureBlocks = [];
export const newFigure = () => {
  let start_X = gameArea_x + Math.floor(columns / 2) * blockSize - blockSize;

  let start_Y = gameArea_y + gameArea_Height - rows * blockSize + blockSize * 1;

  //   let randomFigure = Math.floor(Math.random() * 6);
  let randomFigure = 1;

  switch (randomFigure) {
    case 0:
      L_block(start_X, start_Y);
      rotation.figure = "L_block";
      rotation.rot = 0;

      break;
    case 1:
      L_inverted_block(start_X, start_Y);
      rotation.figure = "L_inverted_block";
      rotation.rot = 0;

      break;
    case 2:
      S_inverted_block(start_X, start_Y);
      rotation.figure = "S_inverted_block";
      rotation.rot = 0;

      break;
    case 3:
      S_block(start_X, start_Y);
      rotation.figure = "S_block";
      rotation.rot = 0;

      break;
    case 4:
      I_block(start_X, start_Y);
      rotation.figure = "I_block";
      rotation.rot = 0;

      break;
    case 5:
      square_block(start_X, start_Y);
      rotation.figure = "square_block";
      rotation.rot = 0;

      break;

    default:
      break;
  }

  newFigureBlocks[3] = blocksArray[blocksArray.length - 1].code;
  newFigureBlocks[2] = blocksArray[blocksArray.length - 2].code;

  newFigureBlocks[1] = blocksArray[blocksArray.length - 3].code;

  newFigureBlocks[0] = blocksArray[blocksArray.length - 4].code;
};

const L_block = (start_X, start_Y) => {
  newBlock(start_X, start_Y, 0x961a15, 0x4b0d0b);
  newBlock(start_X, start_Y - blockSize, 0x961a15, 0x4b0d0b);
  newBlock(start_X, start_Y - blockSize * 2, 0x961a15, 0x4b0d0b);
  newBlock(start_X + blockSize, start_Y, 0x961a15, 0x4b0d0b);
};

const L_inverted_block = (start_X, start_Y) => {
  newBlock(start_X + blockSize, start_Y, 0x32602a, 0x1e3a19);
  newBlock(start_X + blockSize, start_Y - blockSize, 0x32602a, 0x1e3a19);
  newBlock(start_X + blockSize, start_Y - blockSize * 2, 0x32602a, 0x1e3a19);
  newBlock(start_X + blockSize - blockSize, start_Y, 0x32602a, 0x1e3a19);
};

const S_inverted_block = (start_X, start_Y) => {
  newBlock(start_X + blockSize - blockSize, start_Y, 0xaa6e23, 0x6a4516);

  newBlock(start_X + blockSize, start_Y - blockSize, 0xaa6e23, 0x6a4516);
  newBlock(start_X + blockSize, start_Y - blockSize * 2, 0xaa6e23, 0x6a4516);
  newBlock(
    start_X + blockSize - blockSize,
    start_Y - blockSize,
    0xaa6e23,
    0x6a4516
  );
};
const S_block = (start_X, start_Y) => {
  newBlock(start_X + blockSize, start_Y, 0x825ba2, 0x50167f);
  newBlock(start_X + blockSize, start_Y - blockSize, 0x825ba2, 0x50167f);
  newBlock(
    start_X + blockSize - blockSize,
    start_Y - blockSize * 2,
    0x825ba2,
    0x50167f
  );
  newBlock(
    start_X + blockSize - blockSize,
    start_Y - blockSize,
    0x825ba2,
    0x50167f
  );
};

const I_block = (start_X, start_Y) => {
  newBlock(start_X + blockSize, start_Y, 0xd1b13f, 0xaa8b19);
  newBlock(start_X + blockSize, start_Y - blockSize, 0xd1b13f, 0xaa8b19);
  newBlock(start_X + blockSize, start_Y - blockSize * 2, 0xd1b13f, 0xaa8b19);
  newBlock(start_X + blockSize, start_Y - blockSize * 3, 0xd1b13f, 0xaa8b19);
};

const square_block = (start_X, start_Y) => {
  newBlock(start_X + blockSize, start_Y, 0x475487, 0x283360);
  newBlock(start_X + blockSize, start_Y - blockSize, 0x475487, 0x283360);
  newBlock(
    start_X + blockSize - blockSize,
    start_Y - blockSize * 0,
    0x475487,
    0x283360
  );
  newBlock(
    start_X + blockSize - blockSize,
    start_Y - blockSize * 1,
    0x475487,
    0x283360
  );
};

export const downBlockPosition = () => {
  let move = true;
  const actualGridPoints = [];
  for (let index = 0; index < newFigureBlocks.length; index++) {
    const blockIndex = newFigureBlocks[index];
    let block = blocksArray[blockIndex];

    let nextGridPoint = grid.find(
      (e) => e.x === block.posX && e.y === block.posY + blockSize
    );
    let actualGridPoint = grid.find(
      (e) => e.x === block.posX && e.y === block.posY
    );
    actualGridPoints.push(actualGridPoint);

    if (nextGridPoint !== undefined) {
      if (nextGridPoint.free === false) {
        move = false;
      }
    }
  }

  if (move) {
    for (let index = 0; index < newFigureBlocks.length; index++) {
      const blockIndex = newFigureBlocks[index];
      let block = blocksArray[blockIndex];

      block.posY = block.posY + blockSize;

      block.sprite.y = block.posY;
    }
  } else {
    for (let index = 0; index < actualGridPoints.length; index++) {
      const element = actualGridPoints[index];

      element.free = false;
    }

    newFigure();
  }
};

export const moveRigth = () => {
  let move = true;
  for (let index = 0; index < newFigureBlocks.length; index++) {
    const blockIndex = newFigureBlocks[index];
    let block = blocksArray[blockIndex];

    let nextGridPoint = grid.find(
      (e) => e.x === block.posX + blockSize && e.y === block.posY
    );

    if (nextGridPoint !== undefined) {
      if (nextGridPoint.free === false) {
        move = false;
      }
    }
  }

  if (move) {
    for (let index = 0; index < newFigureBlocks.length; index++) {
      const blockIndex = newFigureBlocks[index];
      let block = blocksArray[blockIndex];

      block.posX = block.posX + blockSize;

      block.sprite.x = block.posX;
    }
  }
};

export const moveLeft = () => {
  let move = true;
  for (let index = 0; index < newFigureBlocks.length; index++) {
    const blockIndex = newFigureBlocks[index];
    let block = blocksArray[blockIndex];

    let nextGridPoint = grid.find(
      (e) => e.x === block.posX - blockSize && e.y === block.posY
    );

    if (nextGridPoint !== undefined) {
      if (nextGridPoint.free === false) {
        move = false;
      }
    }
  }

  if (move) {
    for (let index = 0; index < newFigureBlocks.length; index++) {
      const blockIndex = newFigureBlocks[index];
      let block = blocksArray[blockIndex];

      block.posX = block.posX - blockSize;

      block.sprite.x = block.posX;
    }
  }
};

export const rotate = () => {

    let block0=blocksArray[newFigureBlocks[0]]
    let block1=blocksArray[newFigureBlocks[1]]
    let block2=blocksArray[newFigureBlocks[2]]
    let block3=blocksArray[newFigureBlocks[3]]

  let block0_X;
  let block1_X;
  let block2_X;
  let block3_X;
  let block0_Y;
  let block1_Y;
  let block2_Y;
  let block3_Y;





  if (rotation.figure === "L_block") {
switch (rotation.rot) {
    case 0:
              //0
              block0_X = block0.posX - blockSize;
              block0_Y = block0.posY - blockSize
              //1
              block1_X = block1.posX 
              block1_Y = block1.posY 
              //2
              block2_X = block2.posX + blockSize
              block2_Y = block2.posY + blockSize
              //3
              block3_X = block3.posX - blockSize*2
              block3_Y = block3.posY 
      
              rotation.rot=1
      
        break;

        case 1:
            //0
            block0_X = block0.posX + blockSize*1
            block0_Y = block0.posY + blockSize*-1
            //1
            block1_X = block1.posX + blockSize*0
            block1_Y = block1.posY + blockSize*0
            //2
            block2_X = block2.posX + blockSize*-1
            block2_Y = block2.posY + blockSize*1
            //3
            block3_X = block3.posX + blockSize*0
            block3_Y = block3.posY + blockSize*-2
    
            rotation.rot=2
    
      break;

      case 2:
      //0
      block0_X = block0.posX + blockSize*1
      block0_Y = block0.posY + blockSize*1
      //1
      block1_X = block1.posX + blockSize*0
      block1_Y = block1.posY + blockSize*0
      //2
      block2_X = block2.posX + blockSize*-1
      block2_Y = block2.posY + blockSize*-1
      //3
      block3_X = block3.posX + blockSize*2
      block3_Y = block3.posY + blockSize*0

        rotation.rot=3

  break;

  case 3:
      //0
      block0_X = block0.posX + blockSize*-1
      block0_Y = block0.posY + blockSize*1
      //1
      block1_X = block1.posX + blockSize*0
      block1_Y = block1.posY + blockSize*0
      //2
      block2_X = block2.posX + blockSize*1
      block2_Y = block2.posY + blockSize*-1
      //3
      block3_X = block3.posX + blockSize*0
      block3_Y = block3.posY + blockSize*2

    rotation.rot=0

break;

    default:
        break;
}


  }


  if (rotation.figure === "L_inverted_block") {
    switch (rotation.rot) {
        case 0:
                  //0
                  block0_X = block0.posX - blockSize;
                  block0_Y = block0.posY - blockSize
                  //1
                  block1_X = block1.posX 
                  block1_Y = block1.posY 
                  //2
                  block2_X = block2.posX + blockSize
                  block2_Y = block2.posY + blockSize
                  //3
                  block3_X = block3.posX 
                  block3_Y = block3.posY -blockSize*2
          
                  rotation.rot=1
          
            break;
    
            case 1:
                //0
                block0_X = block0.posX + blockSize*1
                block0_Y = block0.posY + blockSize*-1
                //1
                block1_X = block1.posX + blockSize*0
                block1_Y = block1.posY + blockSize*0
                //2
                block2_X = block2.posX + blockSize*-1
                block2_Y = block2.posY + blockSize*1
                //3
                block3_X = block3.posX + blockSize*2
                block3_Y = block3.posY + blockSize*0
        
                rotation.rot=2
        
          break;
    
          case 2:
       
        //0
        block0_X = block0.posX + blockSize*0
        block0_Y = block0.posY + blockSize*0
        //1
        block1_X = block1.posX + blockSize*0
        block1_Y = block1.posY + blockSize*0
        //2
        block2_X = block2.posX + blockSize*0
        block2_Y = block2.posY + blockSize*0
        //3
        block3_X = block3.posX + blockSize*0
        block3_Y = block3.posY + blockSize*2
    
            rotation.rot=3
    
      break;
    
      case 3:
    //0
    block0_X = block0.posX + blockSize*0
    block0_Y = block0.posY + blockSize*0
    //1
    block1_X = block1.posX + blockSize*0
    block1_Y = block1.posY + blockSize*0
    //2
    block2_X = block2.posX + blockSize*0
    block2_Y = block2.posY + blockSize*0
    //3
    block3_X = block3.posX + blockSize*0
    block3_Y = block3.posY + blockSize*0
    
        rotation.rot=0
    
    break;
    
        default:
            break;
    }
    
    
      }

      if (rotation.figure === "S_inverted_block") {
        switch (rotation.rot) {
            case 0:
                   //0
        block0_X = block0.posX + blockSize*0
        block0_Y = block0.posY + blockSize*0
        //1
        block1_X = block1.posX + blockSize*0
        block1_Y = block1.posY + blockSize*0
        //2
        block2_X = block2.posX + blockSize*0
        block2_Y = block2.posY + blockSize*0
        //3
        block3_X = block3.posX + blockSize*0
        block3_Y = block3.posY + blockSize*0
              
                      rotation.rot=1
              
                break;
        
                case 1:
                    //0
                    block0_X = block0.posX + blockSize*0
                    block0_Y = block0.posY + blockSize*0
                    //1
                    block1_X = block1.posX + blockSize*0
                    block1_Y = block1.posY + blockSize*0
                    //2
                    block2_X = block2.posX + blockSize*0
                    block2_Y = block2.posY + blockSize*0
                    //3
                    block3_X = block3.posX + blockSize*0
                    block3_Y = block3.posY + blockSize*0
            
                    rotation.rot=2
            
              break;
        
              case 2:
           
            //0
            block0_X = block0.posX + blockSize*0
            block0_Y = block0.posY + blockSize*0
            //1
            block1_X = block1.posX + blockSize*0
            block1_Y = block1.posY + blockSize*0
            //2
            block2_X = block2.posX + blockSize*0
            block2_Y = block2.posY + blockSize*0
            //3
            block3_X = block3.posX + blockSize*0
            block3_Y = block3.posY + blockSize*0
        
                rotation.rot=3
        
          break;
        
          case 3:
        //0
        block0_X = block0.posX + blockSize*0
        block0_Y = block0.posY + blockSize*0
        //1
        block1_X = block1.posX + blockSize*0
        block1_Y = block1.posY + blockSize*0
        //2
        block2_X = block2.posX + blockSize*0
        block2_Y = block2.posY + blockSize*0
        //3
        block3_X = block3.posX + blockSize*0
        block3_Y = block3.posY + blockSize*0
        
            rotation.rot=0
        
        break;
        
            default:
                break;
        }
        
        
          }
        
    









  block0.posX=block0_X
  block0.sprite.x=block0_X
  block1.posX=block1_X
  block1.sprite.x=block1_X
  block2.posX=block2_X
  block2.sprite.x=block2_X
  block3.posX=block3_X
  block3.sprite.x=block3_X


  block0.posY=block0_Y
  block0.sprite.y=block0_Y
  block1.posY=block1_Y
  block1.sprite.y=block1_Y
  block2.posY=block2_Y
  block2.sprite.y=block2_Y
  block3.posY=block3_Y
  block3.sprite.y=block3_Y












};
