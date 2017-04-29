// VARIABLES

var pixelCanvas = "";




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

function changeColorOnHover(color){
	$('.canvas > div').hover(function(){
		$(this).removeClass().addClass(color);
	});
}

function changeBrushColor(color){
	changeColorOnHover(color);
}

// Helper Functions
function appendElement(target, element){
	$(target).append(element);
}

// Event Listeners
function listen(){
	$('.color-buttons > button').on( "click", function() {
		var buttonColor = $( this ).text().toLowerCase();
		changeBrushColor(buttonColor);
	});
	$('.brush-buttons > button').on( "click", function() {
		var brushType = $( this ).text().toLowerCase().replace(/\s+/g, '');
		// changeBrushType(brushType);
	});
}




// FUNCTION CALLS

buildCanvas('canvas', 989);
changeColorOnHover('red');
listen();



/* TODO
 - Buttons
 	- Highlight when selected


 - Write function that switches the type of brush we're using.

*/