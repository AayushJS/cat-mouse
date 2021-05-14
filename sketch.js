var groundI , ground
var cat ,catImg1,catImg2, catImg3
var mouse , mouseImg1,mouseImg2,mouseImg3

function preload() {
   
  groundI = loadImage("images/garden.png")
  catImg1 = loadAnimation("images/cat1.png")
  catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
  mouseImg1 = loadAnimation("images/mouse1.png")
  mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")  
  mouseImg3 = loadAnimation("images/mouse4.png")
  catImg3 = loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,600);

    cat = createSprite(870,500,10,10)
    cat.addAnimation("catSleeping",catImg1)
    cat.scale = 0.2

    mouse = createSprite (200,500,10,10)
    mouse.addAnimation("mouseStanding",mouseImg1)
    mouse.scale = 0.15

}

function draw() {

    background(groundI);

    if (cat.x-mouse.x<cat.width/2 - mouse.width/2)
     {
      cat.velocityX = 0
      cat.addAnimation("catSitting",catImg3)
      cat.changeAnimation("catSitting")
      cat.scale = 0.2
      cat.x = 300

      mouse.addAnimation("mouseMag",mouseImg3)
      mouse.changeAnimation("mouseMag")
    }
    
    drawSprites();
}


function keyPressed(){

  if (keyCode===LEFT_ARROW) {
    cat.velocityX = -3
    cat.addAnimation("catRunning",catImg2)
    cat.changeAnimation("catRunning")
        
    mouse.addAnimation("mouseTeaseing",mouseImg2)
    mouse.changeAnimation("mouseTeaseing")
    mouse.frameDelay = 25
    
       
  }


}
