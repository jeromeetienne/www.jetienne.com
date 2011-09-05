// object holding the parameters for the hover:on hover:off animation
var params_anim = {};

$(document).ready(function(){
	if( $.browser.msie ) {

		// Screw you crap browser
		$(".slidebox").hover(
			function(){
				$(this).find(".slide").stop()
					.animate({top:-187}, 300);
			},
			function(){
				$(this).find(".slide").stop()
					.animate({top:0}, 200);
			}
		);
		
	} else {

		// Real fun stuff
		$(".slidebox").hover(
			function(){
				var rnd = Math.round(Math.random()); // 0 or 1
				var slidedir = ['top', 'left'][ rnd ]; // top or left
				var wh = ['height', 'width'][ rnd ];
				var size = - parseInt( $(this).css( wh ) ); // width or height of element, depending its slidedir
				var direction = [ 1, -1 ][ Math.round(Math.random()) ];
				params_anim = {};
				params_anim[slidedir] = size * direction;

				$(this).find(".slide").stop()
						.animate(params_anim, 300);
			},
			function(){
				$(this).find(".slide").stop()
					.animate({top:0, left:0}, 200);
			}
		);

	}
});