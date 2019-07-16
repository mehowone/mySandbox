let colb = ('#ebf0f5');
let colv = ('#301229');
let colr = ('#ffc7d7');
let coly = ('#ffdc1d');
let colo = ('#ff5e47');

let ti = 0;
let sti = 0;
let px = 0;
let py = 0;

let offx, offy, offr;

function preload(){
	beanb = loadImage( 'assets/bean_b.png');
	beanv = loadImage( 'assets/bean_v.png');
	beanr = loadImage( 'assets/bean_r.png');
	beany = loadImage( 'assets/bean_y.png');
	beano = loadImage( 'assets/bean_o.png');
	logo = loadImage( 'assets/logo.svg');
	overlay = loadImage( 'assets/sevices.png');
	cur = loadImage('assets/bean_o.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	px = random(0,100);
	py = random(0,100);


	noCursor();
}

function draw() {
clear();
background(colb);

let rad = noise(100);
let sze = 700;
let rot = 0;
let offx = map(sin(ti*2),0,TWO_PI,-100,100);
let offy = map(cos(ti*2),0,TWO_PI,-100,100);
let offr = map(sin(ti),0,TWO_PI,-PI/2,PI/2);



push();
translate(width/2,height/2)
rotate(-offr);
image(beano,px-offx,py+offy,sze,sze);
pop();

push();
translate(width/2,height/2)
rotate(offr);
image(beany,px+offx,py+offy,sze,sze);
pop();

push();
translate(width/2,height/2)
rotate(PI+offr/1.2);
image(beanr,px+offx,py-offy,sze,sze);
pop();


image(overlay,width/2,height/2,overlay.width/1.6,overlay.height/1.6)
image(cur,mouseX,mouseY,32,32)

ti += 0.005
 if (ti > TWO_PI) {
	 ti = 0;
 }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
