var colors = "fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)
class Ball{
	constructor(){  //描述預設值
		this.p= {x:random(width),y:random(height)} //物件的位置
		this.v= {x:random(-1,1),y:random(-1,1)} //物件移動速率
		this.r= random(100,200)
		this.color= random(colors)
	}
	
	
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<100;i++){
	ball = new Ball()	 //產生一個新的Ball class元件
	balls.push(ball)
	}
	
	// 宣告一個元的屬性，p：位置,y:速度，r：圓的直徑
	//ball={ 
		//p:{x:50,y:50},
		//v:{x:0,y:1},
		//r:100,
		//color: color(252,68,68)
	
}

function draw() {
	background(100)
	for(var i =0;i<balls.length;i++){
    ball = balls[i] 
	  fill(ball.color)
	  circle(ball.p.x,ball.p.y, ball.r);
	  ball.p.x= ball.p.x + ball.v.x
	  ball.p.y= ball.p.y + ball.v.y
	}
}