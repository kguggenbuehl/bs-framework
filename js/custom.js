$(document).ready(function() {
	console.log('ready');

	function checkArrow(tableContainer){
		const table = $(tableContainer).find('table');
		const tableWidth = table.width();
		const tablePosition = table.position().left;

		if (tablePosition < 0) {
			tableContainer.addClass('shadowLeft--visible');
		} else {
			tableContainer.removeClass('shadowLeft--visible');
		}

		if (tableWidth + tablePosition - 10 <= tableContainer.width()) {
			tableContainer.removeClass('shadowRight--visible');
		} else {
			tableContainer.addClass('shadowRight--visible');
		}
	}

	const improveResponsiveTables = function() {
		
		tableContainer.each(function(i) {

			checkArrow($(this));

			tableContainer.find('.table-responsive').scroll(function(event) {
				const parent = $(event.target).parent();
				checkArrow(parent);
			});
		});
	};



	const tableContainer = $('.table-responsive-container');

	$(window).resize(function(event) {
		tableContainer.each(function(index) {
			checkArrow($(this));
		});
	});

	improveResponsiveTables();

});