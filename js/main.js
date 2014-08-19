
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
			image = "images/rock.jpeg"
			break;
		case 2:
			image = "images/paper.jpeg"
			break;
		default:
			image = "images/scissors.jpeg"
	}
	return image;

}
function get_count_down_image(x){
	var image;
	switch (x){
		case 3:
			image = "images/rock.jpeg"
			break;
		case 2:
			image = "images/paper.jpeg"
			break;
		default:
			image = "images/scissors.jpeg"
	}
	return image;
}

function set_counter(i, user){
	document.getElementById("count_down").innerHTML = i;
	document.getElementById("loading").style.backgroundImage = "url(" + get_count_down_image(i) + ")";
			

    if (i > 0) {
		window.setTimeout(function(){set_counter(i-1, user);}, 1000);

	}
	else if (i === 0)
	{
		document.getElementById("count_down_container").style.display = "none";
		set_results(user);
	}
}

function timer_window(user){
	document.getElementById("count_down_container").style.display = "block";
	document.getElementById("hide_selection_block").style.display = "none";
	set_counter(3, user);


	// ALTERNATE WAY TO COUNTDOWN
	// for (i = 3; i>0; i--)
	// {
	// 	window.setTimeout(function(){set_counter(i)}, 1000*i);
	// }
	// window.setTimeout(function(){set_counter(3)}, 1000);
	// window.setTimeout(function(){set_counter(2)}, 2000);
	// window.setTimeout(function(){set_counter(1)}, 3000);

}



function set_results (user){
		var computer = computerchoice();
		document.getElementById("human").style.backgroundImage = "url(" + get_image(user) + ")";
		document.getElementById("computer").style.backgroundImage = "url(" + get_image(computer) + ")";
		document.getElementById("result").innerHTML = compare(user, computer);
		document.getElementById("play_again_box").style.display = "block";
}




function startup (){
	document.getElementById("select_weapon").onclick = function(){
	document.getElementById("selection_block").style.opacity = ".2";
	window.setTimeout(function(){
		document.getElementById("selection_block").style.opacity = "1";
	}, 100);

	}
	document.getElementById("play_again_box").style.display = "none";
	document.getElementById("hide_selection_block").style.display = "block";
	document.getElementById("count_down_container").style.display = "none";
	
	document.getElementById("rock").onclick = function(){
		timer_window(1);		
	}
	document.getElementById("paper").onclick = function(){
		timer_window(2);
	}
	document.getElementById("scissors").onclick = function(){
		timer_window(3);
	}
}

document.getElementById("play_again").onclick = function (){
	//WAY TO REFRESH WINDOW
	//window.location.reload();
	startup();
}


window.onload = startup;





