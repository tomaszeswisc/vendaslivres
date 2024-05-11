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



// Este evento é acionado quando o DOM está completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões de remoção de produtos
    const removeButtons = document.querySelectorAll(".remove-product-button");
    // Seleciona todos os inputs de quantidade de produtos
    const quantityInputs = document.querySelectorAll(".product-qnt-input");
    // Seleciona o elemento que mostra o valor total do carrinho
    const cartTotalElement = document.querySelector(".cart-total-container span");
    // Inicializa o valor total do carrinho
    let cartTotal = parseFloat(cartTotalElement.textContent.replace("R$ ", ""));

    // Função para atualizar o valor total do carrinho
    function updateCartTotal() {
        // Reinicia o valor total do carrinho
        cartTotal = 0;
        // Seleciona todos os produtos no carrinho
        const cartProducts = document.querySelectorAll(".cart-product");

        // Itera sobre cada produto no carrinho
        cartProducts.forEach((product) => {
            // Seleciona o elemento que mostra o preço do produto
            const priceElement = product.querySelector(".cart-product-price");
            // Seleciona o input de quantidade do produto
            const quantityInput = product.querySelector(".product-qnt-input");
            // Extrai o preço e a quantidade do produto
            const price = parseFloat(priceElement.textContent.replace("R$ ", ""));
            const quantity = parseInt(quantityInput.value);
            // Calcula o subtotal do produto e adiciona ao valor total do carrinho
            cartTotal += price * quantity;
        });

        // Atualiza o valor total do carrinho no elemento HTML
        cartTotalElement.textContent = "R$ " + cartTotal.toFixed(2);
    }

    // Adiciona evento de clique para os botões de remoção de produtos
    removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Seleciona a linha do produto a ser removido
            const productRow = this.parentElement.parentElement;
            // Remove a linha do produto do carrinho
            productRow.remove();
            // Chama a função para atualizar o valor total do carrinho
            updateCartTotal();
        });
    });

    // Adiciona evento de mudança de quantidade para os inputs
    quantityInputs.forEach((input) => {
        input.addEventListener("change", updateCartTotal);
    });

    // Chama a função para atualizar o valor total inicialmente
    updateCartTotal();
});
