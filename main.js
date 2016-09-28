'use strict'
var pixelArt = {
	brushColor : "#ff0000"
};



var usrInput = prompt("how big do you want the grid? \n e.g. for a 5 x 5 grid type 5.");

$('document').ready(function(){

	function makePixel () {

		var pixel = $('<div class="pixel col-md-1"></div>');
		pixel.on('click', function(){
			event.target.style.backgroundColor = pixelArt.brushColor
		});

		return pixel;
	};
var body = $("body");

//the layout code
	for (var row = 0; row < usrInput; row++) {
		var newRow = $('<div class="row"></div>')
		for (var col = 0; col < usrInput; col++) {
			newRow.append(makePixel());
		};
		body.append(newRow);
	};

var myPallyt = $('.pallyt');

	function makePalletPixel(color) {
		var palletPixelArr = $('.pallyt')
		for(var k = 0; k < palletPixelArr.length; k++) {
			$(palletPixelArr[i]).css('background-color', color)
			$(palletPixelArr[i]).on('click', function(){
				pixelArt.brushColor = $(event.target).css('background-color')
			});
		};
	};

		var colorArr = ['red', 'orange', 'green', 'blue', 'purple', 'black']

	for(var i = 0; i < colorArr.length; i++) {
		makePalletPixel(colorArr[i])
	};

	var colorPicker = $("#color-picker");

	colorPicker.on("change", function () {
		pixelArt.brushColor = colorPicker.val();
	})

});
