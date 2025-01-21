// JavaScript to make navigation links fixed and highlight the active section link
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');

    // When scroll reaches the header's position, make nav links fixed
    if (window.scrollY > header.offsetHeight) {
        navLinks.classList.add('nav-fixed');
    } else {
        navLinks.classList.remove('nav-fixed');
    }

    // Highlight the active link when scrolling through sections
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.slider-track');
    const totalCards = document.querySelectorAll('.card').length;
    const slideWidth = document.querySelector('.card').offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


