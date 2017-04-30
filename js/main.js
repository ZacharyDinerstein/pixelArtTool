// VARIABLES

var brush = {
	color: 'red',
	brushType: 'mouseover'
};

var savedState = '';



// FUNCTIONS

function initialize(){
	buildCanvas('canvas', 1022);
	applyBrushChanges(brush.color, brush.brushType);
	listen();
}

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

function saveState(){
	var divArray = $('.canvas > div');
	savedState = divsToString(divArray);
	console.log(savedState);
}

function loadState(){
	destroyCanvas()
	appendElement( $('.canvas'), savedState);
	applyBrushChanges(brush.color, brush.brushType);
}

function destroyCanvas(){
	$('.canvas > div').remove();
}

function divsToString(divArray){
	var divString = '';
	divArray.each( function(){
		divString += $(this).prop('outerHTML');
	});
	return divString;
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

	//Save State
	$('#save-button').on('click', function(){
		saveState();
	});

	//Load State
		$('#load-button').on('click', function(){
		loadState();
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
initialize();



/* TODO
- Refactor Save and Load functionality (Can definately condense those)



ICEBOX:
- Alter brush size
- Create database that will store your pictures
- Make everything much pretier
- Create the ability to save and play animations 

*/