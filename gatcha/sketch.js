let body;
let face;

function preload() {
  body = loadImage('body.png');

  // get random face
  let n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName);
}

function setup() {
  createCanvas(400, 400);

  let button = createButton('💙Doraemon!💙');
  button.position(10, 10);

  button.mousePressed(() => {
    let n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  background("lightblue");
  image(body, 0, 0);
  image(face, 132, 114);  
}