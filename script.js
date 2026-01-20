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