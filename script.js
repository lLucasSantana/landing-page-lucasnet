// Validação simples do formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  this.reset();
});

// Função para animar elementos ao scroll com cascata
function animateOnScroll() {
  const cards = document.querySelectorAll('.card');
  const beneficios = document.querySelectorAll('.beneficio');
  const contatoElems = document.querySelectorAll('.contato-img, .contato-form');

  const windowBottom = window.innerHeight;

  function fadeInElements(elements, delayStep = 200) {
    elements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowBottom - 50) {
        setTimeout(() => {
          el.classList.add('fade-in');
        }, index * delayStep);
      }
    });
  }

  fadeInElements(cards, 200);
  fadeInElements(beneficios, 200);
  fadeInElements(contatoElems, 200);
}

// Evento de scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scroll para links do menu
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação do hero ao carregar
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
  }, 200); // pequeno delay para suavizar
});
