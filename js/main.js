// VARIABLES

var pixelCanvas = "";
var brush = {
	color: 'red',
	brushType: 'mouseover'
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

function applyBrushChanges(color, brushType){
	$('.canvas > div').off().on( brushType, function(){
		$(this).removeClass().addClass(color);
	});
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
		applyBrushChanges(brush.color, brush.brushType);
	});

	//Change brush type based on clicked button
	$('.brush-buttons > button').on( "click", function() {
		var brushType = $( this ).text().toLowerCase().substring(0, $( this ).text().indexOf(' '));
		brush.brushType = brushType;
		applyBrushChanges(brush.color, brush.brushType);
	});
}




// FUNCTION CALLS

buildCanvas('canvas', 989);
applyBrushChanges(brush.color, brush.brushType);
listen();



/* TODO
- Store attributes in a brush veriable;
	- change type of brush we use based on which button is clicked
		- Dynamically change painting function



 - Write function that switches the type of brush we're using.

*/