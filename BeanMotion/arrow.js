let colb = ('#ebf0f5');
let colv = ('#301229');
let colr = ('#ffc7d7');
let coly = ('#ffdc1d');
let colo = ('#ff5e47');

let ti = 0;
let sti = 0;

let pos = 0;
let dir = 1;

let dis = 0;

function preload() {
	arr = loadImage('assets/arrow.jpg')

	cur = loadImage('assets/bean_o.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	strokeCap(SQUARE);
	noCursor();
}

function draw() {
clear();
background(colb);
// image(arr,width/2,height/2,400,400);



stroke(colo);
strokeWeight(8);

let xof = 87;
let yof = 152;

	if (pos > 100) {
		dir = -1;
		}

	 else if (pos <= 0) {
		dir = 1

	}

	pos = pos + dir;

let tol = 100;


if (mouseY < height/2+tol && mouseY > height/2-tol){
	pos = 100;
	if (dis < 300){


	console.log('hey !')
	dis += 10;

	}


} else if (dis > 0){
	dis -= 15;
	pos = 100;
}


let xor = width/2 - xof + pos;
let yor = height/2;



noFill();
stroke(colr);
strokeWeight(53);
push();

beginShape();
vertex(width/2-87,height/2-152)
vertex(xor,yor)
vertex(width/2-87,height/2+152)
endShape();
pop();



push();

beginShape();
vertex(width/2+87+dis,height/2-152)
vertex(xor + 2*xof+dis ,yor)
vertex(width/2+87+dis,height/2+152)
endShape();
pop();

push();

beginShape();
vertex(xor,yor)
vertex(width/2,height/2)
vertex(xor + 2*xof+dis ,yor)
endShape();
pop();

image(cur,mouseX,mouseY,32,32);


console.log(dis);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
