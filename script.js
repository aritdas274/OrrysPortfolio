const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else{
        entry.target.classList.remove('show');
    }
  });
});

// Grab all elements with the class and watch them
document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));



// toggle theme
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// image slider

const container = document.getElementById('landscapeIMGcontainer');
const images = document.querySelectorAll('.landscapeIMG');
const nextBtn = document.getElementById('rightArrow');
const prevBtn = document.getElementById('leftArrow');

let currentIndex = 0;
const totalImages = images.length;
let autoSlideInterval;

function updateSlider() {
    // We calculate the width of one image based on the container size
    const slideWidth = images[0].clientWidth;
    
    // Scroll the container to the correct position
    container.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
    });
}

function moveSlide(direction) {
    currentIndex += direction;

    // Infinite Loop: If next on last, go to first. If prev on first, go to last.
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    updateSlider();
    resetTimer(); // Restarts the 5-second countdown
}

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        // Automatically trigger the next slide logic
        moveSlide(1);
    }, 5000); // 5 Seconds
}

// Attach event listeners to your SVG IDs
nextBtn.addEventListener('click', () => {
    console.log("Next clicked"); // Check your browser console to see if this fires
    moveSlide(1);
});

prevBtn.addEventListener('click', () => {
    console.log("Previous clicked");
    moveSlide(-1);
});

// Start the auto-slide on load
resetTimer();

// Adjust position if user resizes window
window.addEventListener('resize', updateSlider);