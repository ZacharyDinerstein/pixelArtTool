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
		$(this).addClass(color);
	});
}

// Helper Functions
function appendElement(target, element){
	$(target).append(element);
}



// FUNCTION CALLS

buildCanvas('canvas', 989);
changeColorOnHover('red');




/* TODO
 - Write funciton that adds any number of squares to canvas div
 - 
*/