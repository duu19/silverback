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
const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
let index = 0;

// exibir imagem selecionada
function showImage() {
     images.forEach(image => image.classList.remove('active'));
     dots.forEach(dot => dot.classList.remove('active'));
     images[index].classList.add('active');
     dots[index].classList.add('active');
}

// pŕoximo slide
function nextImage() {
      index++;
      if (index >= images.length) {
        index = 0;
      }
      showImage();
}

// slide anterior
function prevImage() {
      index--;
      if (index < 0) {
        index = images.length - 1;
      }
      showImage();
}

// exibir imagem correspondente ao dot
function selectImage(event) {
      const dot = event.target;
      if (dot.classList.contains('dot')) {
        index = Array.from(dots).indexOf(dot);
        showImage();
      }
}

// passar as imagens automaticamente
setInterval(nextImage, 4000);
// alterar de imagem através dos dots
document.querySelector('.slider').addEventListener('click', selectImage);

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