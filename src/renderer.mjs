import '@pixi/unsafe-eval';
import * as PIXI from 'pixi.js';
import '@pixi/graphics-extras';

const app = new PIXI.Application({
  // width: 800,
  // height: 600,
  backgroundColor: '#1099bb',
  resizeTo: window,
});

document.body.appendChild(app.view);

// Draw a vertical rectangle with rounded corners, using the `drawRoundedRect` method
function drawPlayer(id) {
  const player = new PIXI.Graphics();
  player.beginFill(0x0a001f); // Set the fill color to red
  player.drawRect(0, 0, 20, 100); // Draw a rectangle with width 20 and height 100
  player.endFill();

  // Position the player vertically in the center of the screen
  player.x = app.screen.width / 2 - player.width / 2;
  player.y = app.screen.height / 2 - player.height / 2;

  // Add the player to the stage
  app.stage.addChild(player);
}

function drawTable() {
  const table = new PIXI.Graphics();

  table.beginFill(0x008000);
  table.lineStyle(4, 0xffffff, 1);
  table.drawRoundedRect(0, 0, 400, 700, 20);
  // Draw a horizontal line in the middle of the table
  table.moveTo(0, 700 / 2);
  table.lineTo(400, 700 / 2);

  table.endFill();

  const { width, height } = table;
  console.debug({ width, height });

  // Position the table vertically in the center of the screen
  table.x = app.screen.width / 2 - table.width / 2;
  table.y = app.screen.height / 2 - table.height / 2;

  // Add the table to the stage
  app.stage.addChild(table);
}

drawTable();
// drawPlayer(1);
