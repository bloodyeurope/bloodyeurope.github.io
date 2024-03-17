
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.heartbeat h1');
  
 
  function handleScroll() {
    // Calculate the position of the bottom of the header element
    var headerBottom = header.offsetTop + header.offsetHeight;
  
    // Check if the bottom of the header is above the top of the viewport
    if (headerBottom < window.scrollY) {
      // If the bottom of the header is above the top of the viewport, it's entirely out of view
      header.classList.remove('header-heartbeat');
    } else {
      // Otherwise, the header is either in the viewport or partially visible
      header.classList.add('header-heartbeat');
    }
  }
  
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on page load
});

