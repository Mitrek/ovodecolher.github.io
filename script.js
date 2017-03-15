//Made by Mitrek to his loving girlfriend MelJM.

//GlobalVar

var money = 0
var input = ''
var sizeP = 15
var size = 275
var chocoP = 0
var fillP = 0
var pergram = 0.094
var price = 0

var fillPrices = {
	// Preço da grama em centavos
	prestigio: 0.1,
	nutella: 0.12,
	morango: 0.1,
	bemcasado: 0.094,
	goiabada: 0.1,
	gourmet: 0.128,
	limao: 0.094,
	maracuja: 0.1,
	oreo: 0.1,
	romeuejulieta: 0.114,
	
}

//Functions

//Simultaneous Wallet

function sWallet() {
	
	$('#money').remove()
	
	//Size

	if (input.substr(0,4) === 'size') {
		price = input.substr(4,5);
		price = Number(price);
		switch (price) {
			case 15:
				size = 250;
				break;
			case 18:
				size = 350;
				break;
			case 21:
				size = 500;
				break;
		}
		
		sizeP = Number(price)
	}
	
	//Choco
	
	else if (input.substr(0,5) === 'choco') {

		price = input.substr(5,6);
		console.log(price);
		chocoP = Number(price);
	}
	
	//Fill

	else if (input.substr(0,4) === 'fill') {

		price = input.substr(4,input.length);
		pergram = fillPrices[price];
		switch (size) {
			case 250:
				size *= 1.1
				break;
			case 500:
				size *= 0.9
				break;
		}
		
	}
	price = pergram * size
	fillP = Number(price) + chocoP
	fillP = Math.round(fillP)
	money = fillP
	$('#wallet').append('<figcaption id="money">R$' + money + ',90</figcaption>')
}

$(document).ready(function() {
	
	$('input').click(function() {
		input = '' + (this).name + (this).value
		sWallet()
		
		
	});	
});