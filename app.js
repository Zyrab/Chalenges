
// scroll animations
window.addEventListener("scroll", function() {
    var scrollUpArrow = document.querySelector(".scroll-up");
    var scrollPosition = window.scrollY;
  
    // Adjust the opacity based on the scroll position
    scrollUpArrow.style.opacity = 0 + (scrollPosition * 0.001);
  });