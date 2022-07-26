var marks = [1,2,3,4,5,6,7,8,9]

function sum(){
  var s = marks[0] + marks[1] + marks[2] +  marks[3] + marks[4] + marks[5] + marks[6] +  marks[7] + marks[8]
  console.log(s)
} 

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
sum()
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

