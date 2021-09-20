var homebg,rocket,star,a1;
var homebgimg,rocketimg,rocket2img,starimg,a1img;

function preload(){
homebgimg=loadImage("images/bg1.jpg");
rocketimg=loadImage("images/rocketbody.png");
rocket2img=loadImage("images/rocket2.png");
starimg=loadAnimation("images/night.gif");
a1img=loadImage("images/a1.png");
}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 




    homebg=createSprite(680);
    homebg.y=-2600;
    homebg.addImage(homebgimg);
  homebg.scale=1.45;
   homebg.velocityY=2;

  rocket=createSprite(680,500);
  rocket.addImage(rocketimg);
  rocket.scale=0.23;
  // rocket.velocityY=2;
    // rocket.y=+450;
  // rocket.velocityY=-2;/

//  console.log(rocket.y);


star=createSprite(690);
  star.addAnimation("bg2",starimg);
 star.scale=2.6;
 star.y=455;
 star.depth=rocket.depth;
 rocket.depth=rocket.depth+1;
 star.velocityY=2;


}




function draw(){
background(156);

// camera.position.x=rocket.x;
// camera.position.y=rocket.y-120;

 if(star.y<800 ){
  star.y=455;
}
// edges=createEdgeSprites();
//  rocket.collide(edges);

if(keyWentDown("UP_ARROW")){
  // star.velocityY=15;
  // rocket.x=rocket.x+0;
  //  rocket.velocityY=-18;
star.velocityY=-15;
  rocket.addImage(rocket2img);
  rocket.scale=0.9;
}


if(keyWentUp("UP_ARROW")){
  star.velocityY=-2;
  rocket.addImage(rocketimg);
  rocket.scale=0.23;

}

if(keyDown("LEFT_ARROW")){
  rocket.x=rocket.x-10;
  // homebg.x=-1;
}
if(keyDown("RIGHT_ARROW")){
  rocket.x=rocket.x+10;
  // homebg.x=+5;

}

// if(rocket.y===-6750){
//  rocket.velocityY=0;
//   if(keyWentDown("UP_ARROW")){
//     // homebg.velocity.y=15;
//     // rocket.x=rocket.x+0;
//     //  rocket.velocityY=-15;
  
//     rocket.addImage(rocket2img);
//     rocket.scale=0.9;
//   }
  
  
//   if(keyWentUp("UP_ARROW")){
//     rocket.velocityY=0;
//     rocket.addImage(rocketimg);
//     rocket.scale=0.23;
  
//   }
// }
Asteroid1();
drawSprites();


}

function Asteroid1(){
   if(frameCount%100===0){
  var ast1=createSprite(400,10,15,15);
  ast1.addImage(a1img);
  ast1.scale=0.35;
  ast1.x=Math.round(random(50,1400));
   ast1.velocityY= 14;
//  ast1.rotationSpeed=4;
    ast1.setLifetime=200;
    
    
  //  sword.depth=bomb2.depth
  //   sword.depth=sword.depth+1;
  //   bomb2Group.add(bomb1);
  //   bomb2Group.add(bomb2);
  // 
   }
  
}