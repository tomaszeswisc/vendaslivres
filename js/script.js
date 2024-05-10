// Código JavaScript para rolar a página para o topo 

    // Seleciona o botão
    const botaoVoltarAoTopo = document.getElementById('voltarAoTopo');

    // Adiciona um evento de clique ao botão
    botaoVoltarAoTopo.addEventListener('click', () => {
        // Faz a página voltar ao topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', () => {
        // Verifica a posição da rolagem
        if (window.scrollY > 100) { // Exibe o botão quando a página é rolada para baixo
            botaoVoltarAoTopo.style.display = 'block';
        } else { // Oculta o botão quando a página está no topo
            botaoVoltarAoTopo.style.display = 'none';
        }
    });



// Função para adicionar Produtos do index.html ao carrinho e redirecionar para a página de loja
function addToCart(idProduto) {
    // Redireciona para loja.html e adiciona a âncora correspondente ao produto
    window.location.href = 'loja.html#' + idProduto;
    }

    
// Código JavaScript para dar zoom nas imagens dos produtos 

// Seleciona todos os elementos com a class product-box
const boxes = document.querySelectorAll(".product-box")

//Iteraçao sobre cada elemento box
boxes.forEach(box => {
    //Enconter o elemento img dentro do elemento box atual
    const img =box.querySelector(".product-image")

    //Adicionar os ouvintes de eventos ao elemento box atual
    box.addEventListener("mousemove", (e) => {
        const x = e.clientX - box.getBoundingClientRect().left
        const y = e.clientY - box.getBoundingClientRect().top

        console.log(x, y)

        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(3)"
    })

    box.addEventListener("mouseleave", (e) => {
      
        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"
    })

})
