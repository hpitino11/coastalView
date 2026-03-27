/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    const navbarLogo = document.querySelector('.navbar-logo');

    if (!navbarCollapsible || !navbarLogo) {
        return;
    }

    const mobileMenuOpen = document.querySelector('#navbarResponsive.show');
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
        navbarLogo.src = mobileMenuOpen ? navbarLogo.dataset.logoDark : navbarLogo.dataset.logoLight;
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
        navbarLogo.src = navbarLogo.dataset.logoDark;
    }
};


    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link:not(.dropdown-toggle)')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Switch to dark logo when mobile menu opens (white background appears), revert on close
    const navbarCollapse = document.body.querySelector('#navbarResponsive');
    const navbarLogo = document.querySelector('.navbar-logo');
    if (navbarCollapse && navbarLogo) {
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            navbarLogo.src = navbarLogo.dataset.logoDark;
        });
        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            if (window.scrollY === 0) {
                navbarLogo.src = navbarLogo.dataset.logoLight;
            }
        });
    }

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
