// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {         //if ei-näkyvissä (!) showMenu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;

        // Accessibility: Update ARIA attributes
        menuBtn.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false')

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;

        // Accessibility: Update ARIA attributes
        menuBtn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
    }
}


// Event listener for menu button click
menuBtn.addEventListener('click', toggleMenu);

// Event listener for Enter key press
menuBtn.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default action of the Enter key
        event.preventDefault();
        // Trigger the toggleMenu function
        toggleMenu();

    }
});

// Accessibility: Initialize ARIA attributes
menuBtn.setAttribute('aria-expanded', 'false');
menu.setAttribute('aria-hidden', 'true');

