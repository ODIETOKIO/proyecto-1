
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor="purple";
  aa=createSprite(150,200,30,30);
}

function draw() {
  background("red");
  textSize(20);
  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x=box.position.x-3;
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    background("orange");
    box.position.x=box.position.x+3;  
  }
 
  if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.position.y=box.position.y-3;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.position.y=box.position.y+3;
  }
  if(box.isTouching(aa)) {
    text("es trabajo honesto :D",200,200);
  }
    

  
  drawSprites();
}

