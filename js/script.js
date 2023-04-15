// mobile menu
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
};
  
animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
};
  
handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
};
  
addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
};
  
init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
};
  
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);  
mobileNavbar.init();

// slider
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("#slider-img");
let currentSlide = 0;

setInterval(() => {
  // não mostrar todos
  slides[currentSlide].classList.remove('active');

  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // exibir o próximo slide
  slides[currentSlide].classList.add('active');
}, 5000);