let colb = ('#ebf0f5');
let colv = ('#301229');
let colr = ('#ffc7d7');
let coly = ('#ffdc1d');
let colo = ('#ff5e47');

let ti = 0;
let sti = 0;

let offx, offy, moffx,moffy;

function preload(){
	beanb = loadImage( 'assets/bean_b.png');
	beanv = loadImage( 'assets/bean_v.png');
	beanr = loadImage( 'assets/bean_r.png');
	beany = loadImage( 'assets/bean_y.png');
	beano = loadImage( 'assets/bean_o.png');
	logo = loadImage( 'assets/logo.svg');
	overlay = loadImage( 'assets/aboutus.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	offx = random(10,100);
	offy = random (10,100);

}

function draw() {
clear();
background(colb);

let rad = noise(100);
let px =  0;
let py = 0;
let sze = 250;
let rot = 0;
let moffx = 0;
let moffy = 0;

let cent = createVector(width/2,height/2);
let fall = dist(cent.x,cent.y,mouseX,mouseY);

if(fall<250){
	// console.log('close !')
	sze = map(fall,0,250,500,250);
	rot = map(fall,0,250,PI*1.5,0);
	moffx = map(fall,0,250,0,offx)
	moffy = map(fall,0,250,0,offy)
}



push();
translate(width/2,height/2)
rotate(-rot*1.2);
image(beano,px+150,py,sze*1.1,sze);
pop();

push();
translate(width/2,height/2)
rotate(rot);
image(beany,px,py,sze,sze);
pop();

push();
translate(width/2,height/2)
rotate(rot*0.5);
image(beanr,px-150,py,sze,sze);
pop();


image(overlay,width/2,height/2)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
