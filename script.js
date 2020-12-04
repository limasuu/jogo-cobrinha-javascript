let canvas= document.getElementById("cobrinha");
let context= canvas.getContext("2d");
let box= 32;
let cobrinha= [];
cobrinha[0]={
	x: 8*box,
	y: 8*box
}
let direcao= "right";

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

function iniciarJogo(){
	criarBackground();
	criarCobrinha();
	
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
