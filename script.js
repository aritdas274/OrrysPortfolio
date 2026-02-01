//Preview Script
// Select elements
const overlay = document.getElementById('previewOverlay');
const previewImg = document.getElementById('previewImg');
const closeBtn = document.getElementById('closeBtn');
const galleryImages = document.querySelectorAll('.sec img');

// Open Preview
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    previewImg.src = img.src; // Take the source of the clicked image
    overlay.style.display = 'flex'; // Show the overlay
    document.body.style.overflow = 'hidden'; // Stop the background from scrolling
    if ("vibrate" in navigator) {
      navigator.vibrate(70); // Quick 60ms vibration
    }
  });
});

// Close Preview Function
const closePreview = () => {
  overlay.style.display = 'none';
  previewImg.src = ""; // Clear the image source
  document.body.style.overflow = 'auto'; // Allow scrolling again
};

// Event Listeners for closing
closeBtn.addEventListener('click', closePreview);

// Close when clicking the black background (not the image)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closePreview();
  }
});

//card animation remover
// Wait for 5200 milliseconds (5.2 seconds)
setTimeout(() => {
  const element = document.getElementById('cardPage');

  // Check if the element exists to avoid errors
  if (element) {
    element.style.display = 'none';
  }
}, 5200);


const options = {
  // rootMargin: 'top right bottom left'
  // -40% from the bottom means the trigger is 40% up from the bottom
  // To trigger when it hits 40% from the TOP, use -60% bottom margin
  rootMargin: '0px 0px -20% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

// Grab all elements with the class and watch them
document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

//vibration setup
function handleButtonClick() {
  // 1. Check if the browser supports vibration
  if ("vibrate" in navigator) {
    navigator.vibrate(70); // Quick 60ms vibration
  }
}

// artist toggle here
const slider = document.getElementById('select');

function gd() {
  // 1. Move the slider
  slider.style.transition = "all 0.4s ease";
  slider.style.left = "0%";

  // 2. Redirect after a tiny delay (to let the animation finish)
  // setTimeout(() => {
  //     window.location.href = "graphic-designer.html"; // Replace with your URL
  // }, 300); 
}

function dop() {
  // 1. Move the slider
  slider.style.transition = "all 0.4s ease";
  slider.style.left = "45%";

  // 2. Redirect after a tiny delay
  setTimeout(() => {
    window.location.href = "https://www.instagram.com/bitann_films/"; // Replace with your URL
  }, 300);
}

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

// js to calculate the height of the work section 

const divA = document.querySelector('#potrait').offsetHeight;
const divB = document.querySelector('#landscape').offsetHeight;
const divC = document.querySelector('#square').offsetHeight;
const divD = document.querySelector('#square').offsetHeight;
const target = document.querySelector('.torn-paper-div');


target.style.height = (divA + divB + divC + divD) + 'px';
