let arrayLetter=[];
let size=100;
let img;
let c;

function preload()
{
    img = loadImage("nature.webp");
}
function setup() {
  createCanvas(800, 800);
  image(img,0,0,width,height);
  background(0);


  for(let i=0;i<size;i++)
  {
    arrayLetter.push(new Particle());
  }

}

function draw() {
  for(let i=0;i<size;i++)
    {
      c=img.get(arrayLetter[i].loc.x,arrayLetter[i].loc.y);
      fill(c);
      arrayLetter[i].update();
      arrayLetter[i].display();
    }
}
