// Seleciona o elemento com a classe 'carousel' para controlar o carrossel
const carousel = document.querySelector('.carousel');

// Seleciona o botão de navegação anterior (prev)
const prevBtn = document.querySelector('.prev');

// Seleciona o botão de navegação seguinte (next)
const nextBtn = document.querySelector('.next');

// Contador para controlar a posição atual do carrossel
let counter = 0;

// Seleciona todos os itens do carrossel
const items = document.querySelectorAll('.carousel-item');

// Obtém a quantidade total de itens no carrossel
const itemCount = items.length;

// Obtém a largura do primeiro item do carrossel
const itemWidth = items[0].clientWidth;

// Define a transformação inicial do carrossel para mostrar o primeiro item
carousel.style.transform = `translateX(${-itemWidth * counter}px)`;

// Função para avançar no carrossel
function nextSlide() {
  if (counter < itemCount - 1) {
    counter++;
  } else {
    counter = 0; // Volta para a primeira imagem ao chegar ao final
  }
  carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
}

// Evento para avançar no carrossel ao clicar no botão "Próximo"
nextBtn.addEventListener('click', () => {
  nextSlide();
  clearInterval(autoPlayInterval); // Limpa o intervalo de avanço automático
});

// Evento para voltar no carrossel ao clicar no botão "Anterior"
prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = itemCount - 1; // Volta para a última imagem ao chegar ao início
  }
  carousel.style.transform = `translateX(${-itemWidth * counter}px)`;
  clearInterval(autoPlayInterval); // Limpa o intervalo de avanço automático
});

let autoPlayInterval;

// Inicia o avanço automático a cada 3 segundos
autoPlayInterval = setInterval(nextSlide, 3000);
