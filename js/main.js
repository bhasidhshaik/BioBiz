let lastScrollTop = 0; // To keep track of the last scroll position
let header = document.getElementById('header'); // Header element
let isHeaderVisible = false; // To track if the header is visible

window.addEventListener('scroll', function() {
  let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  // If the user scrolls down more than 50px, show the header for the first time
  if (currentScrollTop > 50 && !isHeaderVisible) {
    header.style.top = "0"; // Show the header
    // isHeaderVisible = true; // Set the flag to true after the header is shown
    setTimeout(() => {
      isHeaderVisible = true;
    }, 2000);
  }

  // If scrolling down and the header is already visible, hide the header
  if (currentScrollTop > lastScrollTop && currentScrollTop > 50 && isHeaderVisible) {
    header.style.top = "-100%"; // Hide the header
  }

  // If scrolling up and the header is already hidden, show the header
  if (currentScrollTop < lastScrollTop && currentScrollTop > 50 && isHeaderVisible) {
    header.style.top = "0"; // Show the header again
  }

  if(currentScrollTop <50 && isHeaderVisible){
    header.style.top = "-100%"; 
    isHeaderVisible = false;
    console.log("First");
    
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll positions
});

let hamburgerBtn = document.getElementById('hamburger-menu');
let navContainer = document.getElementsByClassName('nav-container');
let body = document.querySelector('body');
hamburgerBtn.addEventListener('click' , ()=>{
  navContainer[0].classList.toggle('nav-container-show');
  body.classList.toggle('body-scroll-lock');
})


document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#card-slider', {
      type       : 'loop', // Loop the carousel
      perPage    : 3, // 3 cards per page
      gap        : '10px',
      breakpoints: {
        1200: {
          perPage: 2, // 2 cards on medium-sized screens
        },
        768: {
          perPage: 1, // 1 card on small screens
        },
      },
      arrows: false, // Disable default arrows (we're using custom ones)
      pagination: false, // Disable pagination
    });
  
    splide.mount();
  
    // Manually trigger next/prev buttons
    document.getElementById('prevBtn').addEventListener('click', function () {
      splide.go('<');
    });
  
    document.getElementById('nextBtn').addEventListener('click', function () {
      splide.go('>');
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const newsList = document.querySelector(".news-list");
    const clone = newsList.cloneNode(true); // Clone the entire list
    newsList.parentElement.appendChild(clone); // Append it to the container
  });
  