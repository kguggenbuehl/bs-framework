$(document).ready(function() {

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
		const scrollArea = $(scrollContainer).find(scrollAreaClass).first();
		const scrollAreaContentWidth = scrollArea[0].scrollWidth;
		const scrollPositionLeft = scrollArea.scrollLeft();
        const scrollPositionRight = scrollAreaContentWidth - scrollContainer.width() - scrollPositionLeft;

		if (scrollPositionLeft > 5) {
			scrollContainer.addClass(shadowLeftVisibleClass);
		} else {
			scrollContainer.removeClass(shadowLeftVisibleClass);
		}
		if (scrollPositionRight > 5) {
			scrollContainer.addClass(shadowRightVisibleClass);
		} else {
			scrollContainer.removeClass(shadowRightVisibleClass);
		}
	}

	const improveResponsiveTables = function() {
		
		
	};


    // check all scrollcontainer on too large scroll areas
    // add shadow if necessary
    // add scroll-listener to all scroll areas
	const scrollContainerClass = '.c-horizontalScroll';
    const scrollAreaClass = '.c-horizontalScroll__scrollArea';
    const shadowLeftVisibleClass = 'c-horizontalScroll--shadowLeftVisible';
    const shadowRightVisibleClass = 'c-horizontalScroll--shadowRightVisible';

	$(scrollContainerClass).each(function(i) {

        checkShadow($(this));

        $(this).find(scrollAreaClass).scroll(function(event) {
            const parent = $(event.target).closest(scrollContainerClass);
            checkShadow(parent);
        }); 
    });

    // add listener to check shadows on resize
	$(window).resize(function(event) {
		$(scrollContainerClass).each(function(index) {
			checkShadow($(this));
		});
	});

});