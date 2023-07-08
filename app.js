
// scroll animations
window.addEventListener("scroll", function() {
    var scrollUpArrow = document.querySelector(".scroll-up");
    var scrollPosition = window.scrollY;
  
    // Adjust the opacity based on the scroll position
    scrollUpArrow.style.opacity = 0 + (scrollPosition * 0.001);
  });

  document.querySelector('.nav__trigger').addEventListener('click', function(e) {
    e.preventDefault();
    var parentElement = this.parentNode;
    parentElement.classList.toggle('nav--active');
  });
  document.querySelector('.mode-bar').addEventListener('click', e => {
    if (e.target.className === 'mode-toggle-button' || e.target.className.includes('mode-button')){
      toggleClass('#dark' , 'hidden')
      toggleClass('#light' , 'hidden')
      toggleClass('#body' , 'dark-mode')
      toggleClass('H1','dark-mode-color')
      toggleClass('H2','dark-mode-color')
      toggleClass('ARTICLE','dark-mode-color')
      toggleClass('.project','dark-mode-project')
      toggleClass('.mode-button','night')

  }
  });


    function toggleClass(elementSelector, classList) {
      const elements = document.querySelectorAll(elementSelector);
      elements.forEach((element) => {
        element.classList.toggle(classList);
      });
    }