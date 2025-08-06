const slider = document.querySelector('.services-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
let autoScrollInterval;

function updateSlider() {
  // Ensure perfect alignment by using exact percentage values
  const position = currentIndex * 100;
  slider.style.transform = `translateX(-${position}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3; // Adding 3 to handle negative values
  updateSlider();
}

// Manual navigation
prevBtn.addEventListener('click', () => {
  clearInterval(autoScrollInterval); // Stop auto-scrolling when user interacts
  prevSlide();
  // Restart auto-scrolling after user interaction
  autoScrollInterval = setInterval(nextSlide, 3000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoScrollInterval); // Stop auto-scrolling when user interacts
  nextSlide();
  // Restart auto-scrolling after user interaction
  autoScrollInterval = setInterval(nextSlide, 3000);
});

// Initial alignment
updateSlider();

// Start auto-scrolling
autoScrollInterval = setInterval(nextSlide, 3000);

// Cute Anime.js animation for page title on hover
// const pageTitle = document.querySelector('.page-title');
// if (pageTitle) {
//   pageTitle.addEventListener('mouseenter', () => {
//     anime({
//       targets: pageTitle,
//       scale: [1, 1.15, 0.95, 1.1, 1],
//       rotate: [0, 8, -8, 4, 0],
//       color: [
//         '#ff6b6b', '#ffa502', '#2ed573', '#1e90ff', '#5352ed', '#ff6b6b'
//       ],
//       duration: 1200,
//       easing: 'easeInOutElastic(1, .7)'
//     });
//   });
// }

// // Cute Anime.js animation for page title on hover
// const jumpLetters = document.querySelector('.jump-letters');
// if (jumpLetters) {
//   // Split text into spans for each letter
//   const text = jumpLetters.textContent;
//   jumpLetters.innerHTML = text.split('').map(char => {
//     if (char === ' ') return '<span class="jump-letter" style="display:inline-block;width:0.6em;">&nbsp;</span>';
//     return `<span class="jump-letter" style="display:inline-block;">${char}</span>`;
//   }).join('');

//   const letterSpans = jumpLetters.querySelectorAll('.jump-letter');

//   jumpLetters.addEventListener('mouseenter', () => {
//     anime({
//       targets: letterSpans,
//       translateY: [0, -24, 0],
//       scale: [1, 1.3, 1],
//       delay: anime.stagger(60),
//       duration: 500,
//       elasticity: 600,
//       easing: 'easeOutElastic(1, .7)'
//     });
//   });
// }