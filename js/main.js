// VARIABLES

var pixelCanvas = "";
var brush = {
	color: 'red',
	brushType: 'hover'
};



// FUNCTIONS

function buildCanvas(targetClass, numOfDivs){
	var target = $('.' + targetClass);
	var builtCanvas = createDivs(numOfDivs);
	appendElement(target, builtCanvas)
}

function createDivs(numOfDivs) {
	var newString = '';
	for (i=0; i <= numOfDivs; i++){
		newString += '<div data-num=' + i + '></div>';
	}
	return newString;
}

function createBrush(color, brushType){
	this.color = color;
	this.brushType = brushType;
}

function colorPixelOnHover(color){
	$('.canvas > div').hover(function(){
		$(this).removeClass().addClass(color);
	});
}

function changeBrushColor(color){
	colorPixelOnHover(color);
}

// Helper Functions
function appendElement(target, element){
	$(target).append(element);
}


// Event Listeners
function listen(){

	//Add Selected Class to all clicked buttons
	$('button').on( "click", function(){
		$(this).siblings('button').removeClass('selected');
		$(this).addClass('selected');
	});

	//Change brush color based on clicked button
	$('.color-buttons > button').on( "click", function() {
		var buttonColor = $( this ).text().toLowerCase();
		brush.color = buttonColor;
		changeBrushColor(brush.color);
	});

	//Change brush type based on clicked button
	$('.brush-buttons > button').on( "click", function() {
		var brushType = $( this ).text().toLowerCase().replace(/\s+/g, '');
		brush.brushType = brushType;
	});
}




// FUNCTION CALLS

buildCanvas('canvas', 989);
colorPixelOnHover('red');
listen();



/* TODO
 - Buttons
 	- When a button is clicked
		- Update brush attributes

- Store attributes in a brush veriable;
	- when color is clicked, change brush color
	- pull new brush color from variable


 - Write function that switches the type of brush we're using.

*/