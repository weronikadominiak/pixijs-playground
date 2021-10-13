console.log("hello world");

const keys = {
  a: 65,
  d: 68,
  w: 87,
  s: 83,
};
const speed = 8;

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

// Create the sprite and add it to the stage
let ship = PIXI.Sprite.from("assets/ship.png");
ship.x = 400;
ship.y = 500;
ship.anchor.set(0.5);
ship.scale.set(0.3, 0.3);
console.dir(ship);
app.stage.addChild(ship);

// movement

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  console.log(getScreenSize());
  currentPositionX = ship.position._x;
  currentPositionY = ship.position._y;
  if (e.keyCode == keys.a) {
    ship.x = currentPositionX - 5 * speed;
  }

  if (e.keyCode == keys.d) {
    ship.x = currentPositionX + 5 * speed;
  }

  if (e.keyCode == keys.w) {
    ship.y = currentPositionY - 5 * speed;
  }

  if (e.keyCode == keys.s) {
    ship.y = currentPositionY + 5 * speed;
  }
}

function getScreenSize() {
  return app.renderer.screen;
}

// TODO - make sure you can't fly out from the canvas
function preventGettinOutOfBundaries(currentPositionX, currentPositionY) {}

// Add a ticker
let elapsed = 0.0;
app.ticker.add((delta) => {
  // stars
  // move ship
  //   elapsed += delta;
  //   ship.x = 350.0 + Math.cos(elapsed / 50.0) * 100.0;
  //   ship.x = 400;
  //   ship.y = 500;
});
