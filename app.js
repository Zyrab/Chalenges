
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
    console.log(e.target)
    if (e.target.className === 'mode-toggle-button'){
      toggleClass('dark' , 'hidden')
      toggleClass('light' , 'hidden')
      toggleClass('body' , 'dark-mode')

  }
  });


  function toggleClass (elemntid, classlist) {
    document.getElementById(elemntid).classList.toggle(classlist)
  }