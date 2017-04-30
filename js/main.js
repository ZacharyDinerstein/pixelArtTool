// VARIABLES

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
		$(this).css('background-color', color );
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

	//Change brush type based on clicked button
	$('.brush-buttons > button').on( "click", function() {
		var brushType = $( this ).text().toLowerCase().substring(0, $( this ).text().indexOf(' '));
		brush.brushType = brushType;
		applyBrushChanges(brush.color, brush.brushType);
	});

	//Change canvas color based on button clicked
	$('#white-canvas-button').on( "click", function() {
		$('section.canvas').addClass('white-canvas');
	});
	$('#black-canvas-button').on( "click", function() {
		$('section.canvas').removeClass().addClass('canvas');
	});
}

// SPECTRUM JS
$("#full").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    preferredFormat: "hex",

    // When user selects a new color, update brush color
    move: function (color) {
        brush.color = color.toHexString();
        applyBrushChanges(brush.color, brush.brushType);
    },
    change: function (color) {
    	brush.color = color.toHexString();
    	applyBrushChanges(brush.color, brush.brushType);
    }
});



// FUNCTION CALLS

buildCanvas('canvas', 1022);
applyBrushChanges(brush.color, brush.brushType);
listen();


/* TODO
- Create database that will store your pictures
	- Create a funciton to roll over each div and store attributes in an object
	



ICEBOX:
- Alter brush size
- Make everything much pretier
- Create the ability to save and play animations 

*/