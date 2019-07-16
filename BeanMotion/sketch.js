let colb = ('#ebf0f5');
let colv = ('#301229');
let colr = ('#ffc7d7');
let coly = ('#ffdc1d');
let colo = ('#ff5e47');

let ti = 0;
let sti = 0;

function preload(){
	beanb = loadImage( 'assets/bean_b.png');
	beanv = loadImage( 'assets/bean_v.png');
	beanr = loadImage( 'assets/bean_r.png');
	beany = loadImage( 'assets/bean_y.png');
	beano = loadImage( 'assets/bean_o.png');
	logo = loadImage( 'assets/logo.svg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	frameRate(24);
}

function draw() {
clear();
background(colv);

let rad = noise(100);
let px =  (rad * sin(ti));
let py =  (rad * cos(ti));

push();
translate(width/2,height/2)
rotate(sti*2);
image(beano,px,py,200,200);
pop();

push();
translate(width/2,height/2)
rotate(sti);
image(beano,px,py,350,350);
pop();

push();
translate(width/2,height/2)
rotate(-sti);
image(beanr,px,py-100,400,400);
pop();

push();
translate(width/2,height/2)
rotate(sti);
image(beany,px+100,py,300,300);
pop();

image(beanv,width/2,height/2,300,300);

push();
translate(width/2,height/2)
rotate(-sti);
image(beany,px+100,py+100,200,200);
pop();

push();
translate(width/2,height/2)
rotate(ti-sti);
image(beano,px+100,py+100,100,100);
pop();

// push();
// scale(2);
// image(logo,width/2,height/2);
// pop();

 ti += 0.01
  if (ti > TWO_PI) {
    ti = 0;
  }
	sti += random(0.005,0.008)
   if (ti > TWO_PI) {
     ti = 0;
   }
	}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
