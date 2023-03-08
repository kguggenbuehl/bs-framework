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


    // ************************************
    // horizontal scroll

    const scrollAreaClass = '.jsHorizontalScroll';
    const scrollWrapperClass = 'jsHorizontalScroll__wrapper';
    const shadowStartVisibleClass = 'jsHorizontalScroll__wrapper--shadowStartVisible';
    const shadowEndVisibleClass = 'jsHorizontalScroll__wrapper--shadowEndVisible';

    // Observer for checking sizes of scroll wrappers
    const resizeObserver = new ResizeObserver( elements => {
        for (element of elements) {
            addOverflowShadow(element.target);
        }
    });

    // get scroll position left and right
    // toggle class when more than 5 pixel scrolled
    function addOverflowShadow(scrollArea){
        const scrollAreaContentWidth = scrollArea.scrollWidth;
        const scrollWrapper = $(scrollArea).parent();
        const scrollPositionStart = $(scrollArea).scrollLeft();
        const scrollPositionEnd = scrollAreaContentWidth - scrollWrapper.width() + scrollPositionStart;

        if (scrollPositionStart > 5 || scrollPositionStart < -5) {
            scrollWrapper.addClass(shadowStartVisibleClass);
        } else {
            scrollWrapper.removeClass(shadowStartVisibleClass);
        }
        if (scrollAreaContentWidth - scrollWrapper.width() + scrollPositionStart > 5 && scrollAreaContentWidth - scrollWrapper.width() - scrollPositionStart > 5 ){
            scrollWrapper.addClass(shadowEndVisibleClass);
        } else {
            scrollWrapper.removeClass(shadowEndVisibleClass);
        }
    }

    // check all scroll areas in document
    $(scrollAreaClass).each(function(i) {

        // add wrapper to scroll area
        $(this).wrap("<div class='"+scrollWrapperClass+"'></div>");

        // add listener to scroll => check shadow
        $(this).scroll(function(event) {
            addOverflowShadow(this);
        });

        // observe wrapper size => check shadow
        // will be triggered at page load as well
        resizeObserver.observe(this);

    });

});


