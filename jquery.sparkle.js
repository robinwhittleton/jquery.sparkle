jQuery.fn.sparkle = function() {
	return this.each(function(){

		var sparkling;
		var mousePositionX;
		var mousePositionY;
		var defaults = {
			sparkleHtml: '<img class="sparkle" src="sparkle.gif" />',
			createSpeed: 150,
			fadeSpeed: 500,
			randomness: 15
		}

		$(this).hover(function(){
			sparkling = window.setInterval(function(){

				var sparkleItem = $(defaults.sparkleHtml).css({
					top: mousePositionY+((Math.random()-.5)*defaults.randomness)+'px',
					left: mousePositionX+((Math.random()-.5)*defaults.randomness)+'px'
				}).appendTo('body').fadeOut(defaults.fadeSpeed, function(){ delete this; });

			},defaults.createSpeed);
		},function(){
			window.clearInterval(sparkling);
		});

		$(this).mousemove(function(e){
			mousePositionX = e.pageX;
			mousePositionY = e.pageY;
		});
	});

}
