var btm__red
var btm_green
var r=0
var g=0
var b=0

function setup() {
  createCanvas(800,400);
  btm_red= createButton("red")
  btm_red.position(100,50)
  btm_red.mousePressed(red_bg)


  btm_green= createButton("green")
  btm_green.position(100,150)
  btm_green.mousePressed(green_bg)
}

function draw() {
  background(r,g,b);  
  
}
function red_bg(){
  r=255
  g=0
  b=0
}
function green_bg(){
r=0
g=255
b=0
}