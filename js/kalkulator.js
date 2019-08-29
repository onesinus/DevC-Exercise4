var hasil = document.getElementById("hasil");
function addNumberToBox(number) {
  hasil.textContent  = hasil.textContent + number;//hasil.text + btn.text;
}

function addByKeyboard(e){
	var x = event.which || event.keyCode;
		console.log(x);

	if(x == 49){
		addNumberToBox(1);
	}else if(x == 50){
		addNumberToBox(2);
	}else if(x == 51){
		addNumberToBox(3);
	}else if(x == 52){
		addNumberToBox(4);
	}else if(x == 53){
		addNumberToBox(5);
	}else if(x == 54){
		addNumberToBox(6);
	}else if(x == 55){
		addNumberToBox(7);
	}else if(x == 56){
		addNumberToBox(8);
	}else if(x == 57){
		addNumberToBox(9);
	}else if(x == 48){
		addNumberToBox(0);
	}else if(x == 42){
		addMultiply();
	}else if(x == 58 || x == 47){
		divideBtn();
	}else if(x == 43){
		addPlus();
	}else if(x == 45){
		addMinus();
	}else if(x == 94){
		addNumberToBox(" ^ ");
	}else if(x == 44){
		addComma();
	}else if(x == 13){
		hitungHasil()
	}
}

function backspace(){
	var x = event.which || event.keyCode;
	if(x == 8){
		backspaceBtn();
	}
}

function backspaceBtn(){
	hasil.textContent = hasil.textContent.slice(0, -1);	
}

function hitungHasil(){
	try{
		hasil.textContent = eval(hasil.textContent);
	}catch(e){
		alert(e);
	}
}

function bersihkan(){
	hasil.textContent = 0;
}

function addComma(){
	addNumberToBox(".");
}

function divideBtn(){
	addNumberToBox(" / ");
}

function addPlus(){
	addNumberToBox(" + ");
}

function addMultiply(){
	addNumberToBox(" * ");
}

function addMinus(){
	addNumberToBox(" - ");
}