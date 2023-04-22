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

// carousel
const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

// próximo slide
function nextSlide() {
  if (slideIndex === slides.length - 1) {
        slideIndex = 0;
  } else {
        slideIndex++;
  }
  sliderInner.style.transform = `translateX(-${slideIndex * 600}px)`;
}

// slide anterior
function prevSlide() {
  if (slideIndex === 0) {
        slideIndex = slides.length - 1;
  } else {
        slideIndex--;
  }
  sliderInner.style.transform = `translateX(-${slideIndex * 600}px)`;
}

// botões
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

// passar slides automaticamente
setInterval(nextSlide, 5000);

// validar formulário

function validarContato() {
   let nome = document.forms["formContact"]["nome"].value;
   let email = document.forms["formContact"]["email"].value;
   let telefone = document.forms["formContact"]["telefone"].value;
   let mensagem = document.forms["formContact"]["mensagem"].value;
  
   if (nome == "" || nome.length < 12) {
      document.getElementById("erro-nome").innerHTML = "Informe seu nome completo!";
      return false;
      }
      
      if (email == "" || !/\S+@\S+\.\S+/.test(email)) {
            document.getElementById("erro-email").innerHTML = "Informe um e-mail válido!";
            return false;
          }

   if (telefone == "" || telefone.length < 5) {
      document.getElementById("erro-telefone").innerHTML = "Informe seu telefone corretamente!";
      return false;
      }
   if (mensagem == "" || mensagem.length < 5) {
      document.getElementById("erro-mensagem").innerHTML = "Preencha a mensagem com o assunto.";
            return false;
      }
      return true;
};

/* não recarregar
document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault();
});
*/