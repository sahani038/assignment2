// JavaScript for toggling mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

// Open the mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the mobile menu
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Carousel functionality
const carouselImages = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        showImage(currentIndex);
    });
});

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}, 3000); // Change this value for different interval

// Show the first image initially
showImage(currentIndex);
