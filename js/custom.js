$(document).ready(function() {
	console.log('ready');

	    // ************************************
    // mobile-navigation

    // toggles menu
    const navToggleClass = 'c-hamburger__button--active';
    // close menu if closeMenu === true
    function toggleMenu(container, list, btn, closeMenu) {
        if (closeMenu) {
            $('html').removeClass('js-mobilenav-visible');
            $(btn).removeClass(navToggleClass);
            $(container).slideUp(200);
            $(selectors.navBackground).fadeOut(200);
        } else {
            $('html').toggleClass('js-mobilenav-visible');
            $(btn).toggleClass(navToggleClass);
            $(selectors.navBackground).fadeToggle(200);
            $(container).slideToggle(200);
        }
        window.helperJs.toggleAriaExpanded(btn, closeMenu);
    }

    // hamburger & mobilenav
    const selectors = {
        navButton : '.js-hamburger',
        navBackground : '.js-mobilenav__bg',
        navContainer : '.mobilenav__container',
        navList : '.mobilenav-box > ul',
        navSkiplink : 'a[href="#mainnav"]'
    };
    
    $(selectors.navButton + ', ' + selectors.navBackground).on('click', function(e) {
        // toggle menu
        toggleMenu(selectors.navContainer, selectors.navList, selectors.navButton);

        // close by pressing ESC
        // loop through menu by tab
        $(selectors.navContainer + ', ' + selectors.navButton).keydown(function(e) {
            // get last link in Menu
            const lastLinkInList = $(selectors.navContainer).find('button, a, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])').last()[0];
            // close menu with escape and focus button
            if (e.key === 'Escape') {
                toggleMenu(selectors.navContainer, selectors.navList, selectors.navButton, true);
                $(selectors.navButton).focus();
                return false;
            // go to button clicking tab and last link focused
            } else if (!e.shiftKey && e.key === 'Tab') {
                if (e.target === lastLinkInList) {
                    e.preventDefault;
                    $(selectors.navButton).focus();
                    return false;
                }
            // go to last link when clicking shift-tab, open menu and button focused
            } else if (e.shiftKey && e.key === 'Tab') {
                if ($(e.target).hasClass(selectors.navButton.substring(1)) && $(selectors.navContainer).is(':visible')) {
                    e.preventDefault;
                    lastLinkInList.focus();
                    return false;
                }
            }
        });
    });

    // change skiplink-href for navigation, when mobilenav is visible
    $(selectors.navSkiplink).on('click', function(e){
        if ($(selectors.navButton).is(':visible')){
            e.preventDefault;
            $(selectors.navButton).click();
            $(selectors.navList).find('>li:first-child()>a').focus();
            return false;
        }
    });

	function checkShadow(scrollContainer){
		const scrollArea = $(scrollContainer).find('.c-horizontalScroll__scrollArea');
		const scrollAreaContentWidth = scrollArea[0].scrollWidth;
		const scrollPosition = scrollArea.scrollLeft();

		
		if (scrollPosition > 5) {
			scrollContainer.addClass('c-horizontalScroll--shadowLeftVisible');
		} else {
			scrollContainer.removeClass('c-horizontalScroll--shadowLeftVisible');
		}
		if (scrollAreaContentWidth - scrollPosition - 5 > scrollContainer.width()) {
			scrollContainer.addClass('c-horizontalScroll--shadowRightVisible');
		} else {
			scrollContainer.removeClass('c-horizontalScroll--shadowRightVisible');
		}
	}

	const improveResponsiveTables = function() {
		
		scrollContainer.each(function(i) {

			checkShadow($(this));

			scrollContainer.find('.c-horizontalScroll__scrollArea').scroll(function(event) {
				const parent = $(event.target).closest('.c-horizontalScroll');
				checkShadow(parent);
			}); 
		});
	};



	const scrollContainer = $('.c-horizontalScroll');

	$(window).resize(function(event) {
		scrollContainer.each(function(index) {
			checkShadow($(this));
		});
	});

	improveResponsiveTables();

});