let expandBtn = document.getElementById('expand-menu');
let navMenu = document.getElementById('nav-menu');
expandBtn.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
});

let stats = Array.from(document.querySelectorAll('[id^="stats-"]'));

let currentIndex = 0;

function hideAllExceptCurrent() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        stats.forEach((stat, index) => {
            stat.style.display = index === currentIndex ? 'flex' : 'none';
        });
    } else {
        stats.forEach(stat => stat.style.display = 'flex');
    }
}

hideAllExceptCurrent();

window.addEventListener('resize', hideAllExceptCurrent);

function next() {
    currentIndex = (currentIndex + 1) % stats.length;
    hideAllExceptCurrent();
}

let beHiddens = document.querySelectorAll('.be-hidden');
let colNavBtn = document.getElementById('col-nav');
let logo = document.getElementById('logo');
function colNav() {
    logo.classList.toggle('hidden');
    colNavBtn.classList.toggle('rotate-180');
    beHiddens.forEach(beHidden => beHidden.classList.toggle('hidden'));
}

let expandSectionBtn = document.getElementById('expand-section-btn');
let items = document.getElementById('items');
function expandSection() {
    expandSectionBtn.classList.toggle('rotate-90');
    items.classList.toggle('hidden');
}