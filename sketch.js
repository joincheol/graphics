function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  //머리
  fill(64,64,64);
  ellipse(150,200,200,130);
  
  //눈
  fill(255);
  rect(110,180,20,20,8);
  rect(170,180,20,20,8);
  fill(0);
  ellipse(120,188,10,10);
  ellipse(180,188,10,10);
  
  //입
  noStroke();
  fill(255,51,51);
  arc(150,220,30,50,0,PI);
  
  //이빨
  strokeWeight(1);
  fill(255);
  rect(140,219,7,10,2);
  rect(153,219,7,10,2);
  
  //귀
  noStroke();
  fill(64,64,64);
  ellipse(100,100,70,120);
  ellipse(200,100,70,120);
  fill(255,204,229);
  ellipse(100,100,40,70);
  ellipse(200,100,40,70);
  
  //코
  fill(255);
  arc(150,205,9,7,0,PI);
  fill(64,64,64);
  stroke(255);
  arc(143,209,13,10,0,PI);
  arc(158,209,13,10,0,PI);
}