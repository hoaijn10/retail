const navMenu = document.getElementById('nav-menu');
const stats = Array.from(document.querySelectorAll('[id^="stats-"]'));
const colNavBtn = document.getElementById('col-nav');
const logo = document.getElementById('logo');
const expandSectionBtn = document.getElementById('expand-section-btn');
const items = document.getElementById('items');
const beHiddens = document.querySelectorAll('.be-hidden');

let currentIndex = 0;
let navCollapsed = false;
let sectionExpanded = false;
let menuExpanded = false;

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function hideAllExceptCurrent() {
    const screenWidth = window.innerWidth;
    stats.forEach((stat, index) => {
        stat.style.display = (screenWidth <= 768 && index !== currentIndex) ? 'none' : 'flex';
    });
}

function next() {
    currentIndex = (currentIndex + 1) % stats.length;
    hideAllExceptCurrent();
}

function expandMenu() {
    toggleClass(navMenu, 'hidden');
    menuExpanded = !menuExpanded;
}

function collapseNav() {
    toggleClass(logo, 'hidden');
    toggleClass(colNavBtn, 'rotate-180');
    if (sectionExpanded) {
        expandSection();
    }
    beHiddens.forEach(beHidden => toggleClass(beHidden, 'hidden'));
    navCollapsed = !navCollapsed;
    console.log("navCollapsed: ", navCollapsed);
}

function expandSection() {
    toggleClass(expandSectionBtn, 'rotate-90');
    toggleClass(items, 'hidden');
    sectionExpanded = !sectionExpanded;
}

// Initial setup
hideAllExceptCurrent();

function f5() {
    if (navCollapsed) {
        collapseNav();
    }
    hideAllExceptCurrent();
    if (menuExpanded) {
        expandMenu();
    }
}
