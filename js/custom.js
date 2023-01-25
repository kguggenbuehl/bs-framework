$(document).ready(function() {
	console.log('ready');

	function checkShadow(scrollContainer){
		const scrollArea = $(scrollContainer).find('.horizontalScroll__area');
		const scrollAreaContentWidth = scrollArea[0].scrollWidth;
		const scrollPosition = scrollArea.scrollLeft();

		
		if (scrollPosition > 5) {
			scrollContainer.addClass('shadowLeft--visible');
		} else {
			scrollContainer.removeClass('shadowLeft--visible');
		}
		if (scrollAreaContentWidth - scrollPosition - 5 > scrollContainer.width()) {
			scrollContainer.addClass('shadowRight--visible');
		} else {
			scrollContainer.removeClass('shadowRight--visible');
		}
	}

	const improveResponsiveTables = function() {
		
		scrollContainer.each(function(i) {

			checkShadow($(this));

			scrollContainer.find('.horizontalScroll__area').scroll(function(event) {
				const parent = $(event.target).closest('.horizontalScroll__container');
				checkShadow(parent);
			});
		});
	};



	const scrollContainer = $('.horizontalScroll__container');

	$(window).resize(function(event) {
		scrollContainer.each(function(index) {
			checkShadow($(this));
		});
	});

	improveResponsiveTables();

});