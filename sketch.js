
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
cat1=loadAnimation("images/cat4.png","images/cat5.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png")
mouse3=loadAnimation("images/mouse1.png")
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse1=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(600,200)
cat.addAnimation("first",cat1);
cat.addAnimation("second",cat2)
cat.frameDelay=25
cat.scale=0.2

mouse = createSprite(100,200)
mouse.addAnimation("first",mouse1)
mouse.addAnimation("second",mouse2)
mouse.addAnimation("third",mouse3)
mouse.scale=0.2
cat.debug=true
mouse.debug=true
}

function draw() {

    background(bg);
   keyPressed();
   if(cat.isTouching(mouse))
   {
      
    mouse.changeAnimation("third",mouse3)
cat.velocityX=0;   
cat.changeAnimation("first",cat1)
}
    drawSprites();
}


function keyPressed(){
if(keyCode ===LEFT_ARROW)
{
    mouse.changeAnimation("second",mouse2)
    cat.changeAnimation("second",cat2)
    cat.frameDelay=4
    mouse.frameDelay=4
    cat.velocityX=-2
}
  //For moving and changing animation write code here


}
