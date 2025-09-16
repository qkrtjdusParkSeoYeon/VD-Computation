function setup() {
  createCanvas(600, 800);
  background('lightpink');
  noStroke();
}

function draw() {

  // background(mouseX/2.35);

  // ears
  fill('black');
  circle(350,150,136);
  circle(191,100,136);

  //face
  fill('#F4E2C2');
  circle(241,230,200);

  fill ('white');
  ellipse (210,200,40,70)
  ellipse (260,210,40,70)

  //eyes
  fill('black');
  circle(210,220,30);
  circle(260,230,30);


  //nose
  
  circle(200,270,66); 

  fill ('white');
  circle(180,260,10); 


   

  //body
  fill ('red');
    circle(300,433,194);    
  
    fill ('white');
    ellipse (250,450,40,70)
    ellipse (300,450,40,70)
    circle (100,380, 100);
    circle (450,500, 100);
    ellipse (80,310,40,70)
    ellipse (120,310,40,70)
  

  //feet
  fill('yellow');
  circle(150,570,180);
  circle(333,659,180);
}