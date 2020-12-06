/* IS NAVBAR ITEM ACTIVE? START */

const navLinks = document.querySelectorAll(".nav-item");

const handleClick = (e) => {
  navLinks.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

navLinks.forEach((item) => {
  item.addEventListener("click", handleClick);
});

/* IS NAVBAR ITEM ACTIVE? END */

/* NAVBAR COLOR IF SCROLL DOWNS START */
const navBar = document.querySelector('.navbar');
const navBarBrand = document.querySelector('.navbar-brand');
const navLinksColor = document.querySelectorAll('.nav-link');
console.log(navLinksColor);
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navBar.classList.add("nav-colored");
        navBar.classList.remove("nav-transparent");
        navBar.classList.remove("mt-5");
        navBarBrand.style.color = "#fff";

        for (let i=0; i < navLinksColor.length; i++) {
          navLinksColor[i].style.color = "#fff";
        }
        
      
        
    } 
    else {
        navBar.classList.add("nav-transparent");
        navBar.classList.remove("nav-colored");
        navBar.classList.add("mt-5");
        navBarBrand.style.color = "#452268";
        

        for (let i=0; i < navLinksColor.length; i++) {
          navLinksColor[i].style.color = "#ABADAE";
        }
    }
};

/* NAVBAR COLOR IF SCROLL DOWNS END */