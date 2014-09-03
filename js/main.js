
function computerchoice(){
	return(Math.floor(Math.random()*3+1));
}

function compare(human, computer){
	var result;
	var winner = new Audio("sounds/win.mp3");
	var lose = new Audio("sounds/boom.mp3");
	var tie = new Audio("sounds/tie.mp3");
	if(human===1&&computer===3)
	{
		result =  "You Win!";
		setTimeout(function(){
			winner.play();
			}, 1000);
	}
	else if(human===1&&computer===2)
	{
		result =  "You Lose";
		setTimeout(function(){
			lose.play();
			}, 1000);
	}
	else if(human===2&&computer===1)
	{
		result =  "You Win!";
		setTimeout(function(){
			winner.play();
			}, 1000);
	}
	else if(human===2&&computer===3)
	{
		result =  "You Lose";
		setTimeout(function(){
			lose.play();
			}, 1000);
	}
	else if(human===3&&computer===1)
	{
		result =  "You Lose";
		setTimeout(function(){
			lose.play();
			}, 1000);
	}
	else if(human===3&&computer===2)
	{
		result =  "You Win!";
		setTimeout(function(){
			winner.play();
			}, 1000);
	}
	else
	{
		result =  "Tie";
		setTimeout(function(){
			tie.play();
			}, 1000);
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
	var beep = new Audio("sounds/beep.wav");
	beep.volume = .03;		
	document.getElementById("count_down_container").style.opacity = "1";

    if (i > 0) {
		window.setTimeout(function(){
			set_counter(i-1, user);
		}, 1000);
		window.setTimeout(function(){
			document.getElementById("count_down_container").style.transition = "opacity .3s linear";
			document.getElementById("count_down_container").style.WebkitTransition = "opacity .3s linear";
			document.getElementById("count_down_container").style.MozTransition = "opacity .3s linear";
			document.getElementById("count_down_container").style.OTransition = "opacity .3s linear";
			document.getElementById("count_down_container").style.opacity = "0";
		},600);
		beep.play();

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
		window.setTimeout(function(){
			document.getElementById("play_again_box").style.transition = "opacity .8s ease-in";
			document.getElementById("play_again_box").style.WebkitTransition = "opacity .8s ease-in";
			document.getElementById("play_again_box").style.MozTransition = "opacity .8s ease-in";
			document.getElementById("play_again_box").style.OTransition = "opacity .8s ease-in";
			document.getElementById("play_again_box").style.opacity = "1";
		}, 300);
		// document.getElementById("play_again_box").style.display = "block";
}




function startup (){
	var duplicate = false;
	document.getElementById("select_weapon").onclick = function(){
			
	document.getElementById("selection_block").style.opacity = ".4";
	soda.play();

		window.setTimeout(function(){
			document.getElementById("selection_block").style.opacity = "1";
		}, 200);
	}
	document.getElementById("hide_selection_block").style.opacity = "1";
	document.getElementById("play_again_box").style.display = "none";
	document.getElementById("hide_selection_block").style.display = "block";
	document.getElementById("count_down_container").style.display = "none";
	document.getElementById("play_again_box").style.opacity = "0";
	
	document.getElementById("rock").onclick = function(){
		if(!duplicate)
		{
			duplicate = true;
			document.getElementById("hide_selection_block").style.transition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.WebkitTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.MozTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.OTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.opacity = "0";
			window.setTimeout(function(){
				timer_window(1);
				}, 1000);
		}	
	}
	document.getElementById("paper").onclick = function(){
		if(!duplicate)
		{
			duplicate = true;
			document.getElementById("hide_selection_block").style.transition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.WebkitTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.MozTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.OTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.opacity = "0";
			window.setTimeout(function(){
				timer_window(2);
				}, 1000);
		}
	}
	document.getElementById("scissors").onclick = function(){
		if(!duplicate)
		{
			duplicate = true;
			document.getElementById("hide_selection_block").style.transition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.WebkitTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.MozTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.OTransition = "opacity .8s linear";
			document.getElementById("hide_selection_block").style.opacity = "0";
			window.setTimeout(function(){
				timer_window(3);
				}, 1000);
		}
	}
}

document.getElementById("play_again").onclick = function (){
	//WAY TO REFRESH WINDOW
	//window.location.reload();
	var restart = new Audio("sounds/restart.mp3");
	restart.play();
	startup();
}

var soda = new Audio("sounds/soda.mp3")
soda.volume = .05;


document.getElementById("rock").onmouseover = function(){soda.play();};
document.getElementById("paper").onmouseover = function(){soda.play();};
document.getElementById("scissors").onmouseover = function(){soda.play();};

window.onload = startup;





