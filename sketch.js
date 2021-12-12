let arrayLetter=[];
let size=400;
function setup() {
  createCanvas(800, 800);
  for(let i=0;i<size;i++)
  {
    arrayLetter.push(new Particle());
  }
   
}

function draw() {
  background(0);
  for(let i=0;i<size;i++)
    {
      arrayLetter[i].update();
      arrayLetter[i].display();
    }
}