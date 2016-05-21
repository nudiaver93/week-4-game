var wins = 0;
var losses = 0;

var goal = Math.floor((Math.random()* 100) + 19);

var rvalue = Math.floor((Math.random()* 12) + 1);
var bvalue = Math.floor((Math.random()* 12) + 1);
var yvalue = Math.floor((Math.random()* 12) + 1);
var gvalue = Math.floor((Math.random()* 12) + 1);

var current = 0;

var change = function (){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.current').empty();
	$('.current').append(current);
}

var reset = function(){
	current = 0;
    goal = Math.floor((Math.random()* 100) + 19);
	$('.goal').empty();
	$('.goal').append(goal);
	rvalue = Math.floor((Math.random()* 12) + 1);
    bvalue = Math.floor((Math.random()* 12) + 1);
    yvalue = Math.floor((Math.random()* 12) + 1);
    gvalue = Math.floor((Math.random()* 12) + 1);
    change();
}

var checkwin = function (){
	if (current == goal) {
		wins = wins + 1;	
		reset();
	}else if(current > goal){
		losses = losses + 1;
		reset();
	}else{
		change();
	}
}
$('.goal').append(goal);
$('.current').append(current);
$(document).ready(function(){
	$('#r').click(function(){
		current = current + rvalue;
		checkwin();
	})
	$('#b').click(function(){
		current = current + bvalue;
		checkwin();
	})
	$('#y').click(function(){
		current = current + yvalue;
		checkwin();
	})
	$('#g').click(function(){
		current = current + gvalue;
		checkwin();
	})
});
