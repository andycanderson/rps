
function computerchoice(){
	return(Math.round(Math.random()*2+1));
}


function compare(human, computer){
	var result;
	if(human===1&&computer===3)
	{
		result =  "You Win!";
	}
	else if(human===1&&computer===2)
	{
		result =  "You Lose";
	}
	else if(human===2&&computer===1)
	{
		result =  "You Win!";
	}
	else if(human===2&&computer===3)
	{
		result =  "You Lose";
	}
	else if(human===3&&computer===1)
	{
		result =  "You Lose";
	}
	else if(human===3&&computer===2)
	{
		result =  "You Win!";
	}
	else
	{
		result =  "Tie";
	}
	return result;
}

function get_image(x){
	var image;
	switch (x){
		case 1:
			image = "http://goo.gl/lmdIz7"
			break;
		case 2:
			image = "http://goo.gl/BK0dP5"
			break;
		default:
			image = "http://goo.gl/IY1Lf7"
	}
	return image;

}






function startup (){
	document.getElementById("play_again_box").style.display = "none";
	document.getElementById("hide_selection_block").style.display = "block";
	document.getElementById("rock").onclick = function(){
		var computer = computerchoice();
		document.getElementById("human").style.backgroundImage = "url(" + get_image(1) + ")";
		document.getElementById("computer").style.backgroundImage = "url(" + get_image(computer) + ")";
		document.getElementById("result").innerHTML = compare(1, computer);
		document.getElementById("hide_selection_block").style.display = "none";
		document.getElementById("play_again_box").style.display = "block";
	}
	document.getElementById("paper").onclick = function(){
		var computer = computerchoice();
		console.log(compare(2, computer));
		document.getElementById("human").style.backgroundImage = "url(" + get_image(2) + ")";
		document.getElementById("computer").style.backgroundImage = "url(" + get_image(computer) + ")";
		document.getElementById("result").innerHTML = compare(2, computer);
		document.getElementById("result_box").style.display= "block";
		document.getElementById("hide_selection_block").style.display = "none";
		document.getElementById("play_again_box").style.display = "block";
	}
	document.getElementById("scissors").onclick = function(){
		var computer = computerchoice();
		console.log(compare(3, computer));
		document.getElementById("human").style.backgroundImage = "url(" + get_image(3) + ")";
		document.getElementById("computer").style.backgroundImage = "url(" + get_image(computer) + ")";
		document.getElementById("result").innerHTML = compare(3, computer);
		document.getElementById("result_box").style.display= "block";
		document.getElementById("hide_selection_block").style.display = "none";
		document.getElementById("play_again_box").style.display = "block";
	}
}

document.getElementById("play_again").onclick = function (){
	//window.location.reload();
	startup();
}
window.onload = startup;



