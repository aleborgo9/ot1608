let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  
  createCanvas(900, 600); // tamanho da tela
  background("rgb(228,236,236)"); //
  cor = color(random(0, 255), random(0, 255), random(0, 255));
posicaoHorizontal = 200;
posicaoVertical = 200
} 
  
function draw() {

  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
  posicaoHorizontal = posicaoHorizontal - 1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1;
  }
  
  if(mouseY < posicaoVertical){
    posicaoVertical --;
  }
  
  if(mouseY > posicaoVertical){
    posicaoVertical++;
  }
  
  if(mouseIsPressed){
  cor = color(random(0, 255), random(0, 255), random(0, 255), random (0,100));
    
  }
}
