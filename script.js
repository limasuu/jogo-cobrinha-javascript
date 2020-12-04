let canvas= document.getElementById("cobrinha");
let context= canvas.getContext("2d");
let box= 32;
let cobrinha= [];
cobrinha[0]={
	x: 8*box,
	y: 8*box
}
let direcao= "right";
let comida={
	x: Math.floor(Math.random()*15 + 1) * box,
	y: Math.floor(Math.random()*15 + 1) * box
}

function criarBackground(){
	context.fillStyle= "peachpuff";
	context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha(){
	for(i=0; i<cobrinha.length; i++){
		context.fillStyle= "mediumvioletred";
		context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
	}
}

function desenharComida(){
	context.fillStyle= "teal";
	context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener("keydown",atualiza);

function atualiza(event){
	if(event.keyCode == 37 && direcao != "right")
		direcao= "left";
	if(event.keyCode == 38 && direcao != "down")
		direcao= "up";
	if(event.keyCode == 39 && direcao != "left")
		direcao= "right";
	if(event.keyCode == 40 && direcao != "up")
		direcao= "down";
}

function iniciarJogo(){

	if(cobrinha[0].x > 15*box && direcao == "right")
		cobrinha[0].x= 0;
	if(cobrinha[0].x < 0 && direcao == "left")
		cobrinha[0].x= 16*box;
	if(cobrinha[0].y > 15*box && direcao == "down")
		cobrinha[0].y= 0;
	if(cobrinha[0].y < 0 && direcao == "up")
		cobrinha[0].y= 16*box;

	criarBackground();
	criarCobrinha();
	desenharComida();
	
	let cobrinhaX= cobrinha[0].x;
	let cobrinhaY= cobrinha[0].y;
	
	if(direcao == "right") 
		cobrinhaX+= box;
		
	if(direcao == "left") 
		cobrinhaX-= box;
		
	if(direcao == "up") 
		cobrinhaY-= box;
		
	if(direcao == "down") 
		cobrinhaY+= box;
		
	cobrinha.pop();
	
	let novaCabeca= {
		x: cobrinhaX,
		y: cobrinhaY
	}
	
	cobrinha.unshift(novaCabeca);
}

let jogo= setInterval(iniciarJogo, 100);


