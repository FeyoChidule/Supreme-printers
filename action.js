let currentIndex = 0;
    const totalSlides = 6; 
    const slideInterval = 3000; 
    function updateSliderPosition() {
      const sliderContainer = document.querySelector('.slider-container');
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
    }
    function updateIndicators() {
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderPosition();
    }
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
      updateSliderPosition();
    }
    function goToSlide(index) {
      currentIndex = index;
      updateSliderPosition();
    }
    function startAutoSlide() {
      setInterval(nextSlide, slideInterval);
    }
    window.onload = startAutoSlide;

    /*menu buttun*/
    const open = document.querySelector(".fa-bars")
    const close = document.querySelector(".fa-close")
    const nav = document.getElementById("nav")


    open.addEventListener("click",()=>{
      open.style.display = "none"
      close.style.display="block"
      nav.style.display="block"
      

    })
    close.addEventListener("click",()=>{
      nav.style.display="none"
      open.style.display = "block"
      close.style.display = "none"
    })

    // Select the nav and the button
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.style.display = "none"
          close.style.display = "none"
          open.style.display = "block"
        }
      });
    });


// Track scroll direction and manage visibility
let lastScrollTop = 0;
const elements = document.querySelectorAll('.section');

function checkVisibility() {
  elements.forEach(element => {
    const elementRect = element.getBoundingClientRect();  
    const elementHeight = elementRect.height;
    const elementTop = elementRect.top;

    const threshold = window.innerHeight * 0.2;
    if (elementTop + elementHeight > threshold && elementTop < window.innerHeight) {
      element.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  checkVisibility();
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
window.addEventListener('load', () => {
  checkVisibility();
});

// Get the button element
const scrollButton = document.getElementById('scrollButton');

function scrollToBottom() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });
}
function scrollToTop() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
scrollButton.addEventListener('click', () => {
  if (scrollButton.classList.contains('top')) {
    scrollToTop(); 
  } else {
    scrollToBottom(); 
  }
});

function checkScrollPosition() {
  const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
  const isAtTop = window.scrollY === 0;

  if (isAtBottom) {
    scrollButton.classList.add('top');
    scrollButton.textContent = '↑';
  } else if (isAtTop) {
    scrollButton.classList.remove('top');
    scrollButton.textContent = '↓';
  }
}
checkScrollPosition();
window.addEventListener('scroll', checkScrollPosition);






 
