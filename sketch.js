// setup p5 by using the setup function

function setup(){
    //create a canvas of 500
    createCanvas(500,500);
    background(0,0,0);
    
    
}

//creating draw loops
function draw(){
    //create variable for RGB colors
    let r = random(0,256)
    let b = random(0,256)
    let g = random(0,256)
    fill(r,g,b)
    ellipse(mouseX, mouseY, 25, 25);

}

function mouseClicked(){
      
}
