const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;
Regardless of how far we scroll down the screen, the navTop will remain the same. But we need to know when to activate our sticky navigation. We can do that by determining how far we've scrolled so far using the window's scrollY property. Let's set up a basic function and event listener and console.log the two properties to see what's happening. 

function stickyNavigation() { 
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);
}

window.addEventListener('scroll', stickyNavigation);

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}
