function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 100);
  mr = createSprite(500, 300, 100, 50);
  fr.shapeColor = "purple";
  mr.shapeColor = "purple";
}

function draw() {


  mr.x = mouseX;
  mr.y = mouseY;


  background(255,255,255);  
  drawSprites();
  if(mr.x- fr.x<=mr.width/2+fr.width/2 && 
    fr.x- mr.x<=mr.width/2+fr.width/2 &&
    mr.y- fr.y<=mr.height/2+fr.height/2 && 
    fr.y- mr.y<=mr.height/2+fr.height/2){
      
    fr.shapeColor = "orange";
    mr.shapeColor = "orange";
  }
  else
  {
    fr.shapeColor = "purple";
    mr.shapeColor = "purple";
  }
}
