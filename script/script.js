document.addEventListener('DOMContentLoaded', function () {
    let activeLink = document.querySelector('.nav-items.active-nav-link');

    // Change nav link to active on click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            activeLink = document.querySelector('.nav-items.active-nav-link');
            activeLink.classList.remove('active-nav-link');
            this.querySelector('li').classList.add('active-nav-link');
        });
    });

    // Set default nav link
    const setActiveNavLink = (navItem) => {
        activeLink.classList.remove('active-nav-link');
        navItem.classList.add('active-nav-link');
        activeLink = navItem;
    };

    const toggleMenu = () => {
        const menuSelector = document.querySelector('div[aria-label="menu"]');

        if (menuSelector.classList.contains('translate-y-52')) {
            menuSelector.classList.remove('translate-y-52');
            menuSelector.classList.add('translate-y-0');
        } else {
            menuSelector.classList.remove('translate-y-0');
            menuSelector.classList.add('translate-y-52');
        }
    };

    const menuIconSelector = document.querySelector('.open-menu');
    const menuLink = document.querySelector('.menu-link');

    menuIconSelector.addEventListener('click', toggleMenu);
    menuLink.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', function (event) {
        const menuSelector = document.querySelector('div[aria-label="menu"]');
        if (menuSelector.classList.contains('translate-y-0')) {
            menuSelector.classList.remove('translate-y-0');
            menuSelector.classList.add('translate-y-52');
        }
    });
});
