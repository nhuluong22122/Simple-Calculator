var mybtn = document.getElementsByClassName("cbutton");
var myOutput = document.getElementById("output");
var myCal = "";
var myInput = document.getElementById("input");
var input = "";
var reset = false;
var myOpe = ["+","-","*","/"];

document.addEventListener('keydown', function(event) {
   	for(var i = 0; i < mybtn.length; i++){
   		console.log(event.keyCode);
   		if(event.keyCode >= 49 || event.keyCode <= 57){
   			if(mybtn[i].innerHTML == event.keyCode - 48)
   			{
   				mybtn[i].click();
   			}
   		}
  	}
});

for(var i = 0; i < mybtn.length; i++){
		mybtn[i].addEventListener("click",function(){
		var myValue = this.innerHTML;
		if(reset){
			reset = false;
			myCal = "";
			input = "";
		}
		if(myValue == "="){
			myCal = eval(input);
			myValue = "";
			reset = true;
		}
		else if(myValue =="C"){
			input = "";
			myValue = "";
			reset = true;
		}
		input = checkSyntax(myValue);

		if(myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){
			if(myOpe.indexOf(myInput.innerHTML.slice(-1)) > -1){
				input = input.substring(0, input.length - 1);
			}
		}

		myInput.innerHTML = input;
		myOutput.innerHTML = myCal;
	});
}

function checkSyntax(myValue){
	if(input.length == 0 && hasOpe(myValue)){
		input = "";
	}
	else {
		input = input + myValue;
	}
	return input;
}

function hasOpe(myValue){
	if(myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){
		return true;
	}
}