let arrayLetter=[];
let size=400;
let img;

function preload()
{
    img = loadImage("nature.webp");
}
function setup() {
  createCanvas(800, 800);
  background(0);

  for(let i=0;i<size;i++)
  {
    arrayLetter.push(new Particle());
  }

}

function draw() {
  image(img,0,0,width,height);
  for(let i=0;i<size;i++)
    {
      arrayLetter[i].update();
      arrayLetter[i].display();
    }
}
