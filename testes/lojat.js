//Remover produto do carrinho
document.addEventListener("DOMContentLoaded", function () {
    const removeButtons = document.querySelectorAll(".remove-product-button");

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
});

//Atualizar valores do carrinho

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
    

    // Adiciona evento de mudança de quantidade para os inputs
    quantityInputs.forEach((input) => {
        input.addEventListener("change", updateCartTotal);
    });

    // Chama a função para atualizar o valor total inicialmente
    updateCartTotal();
});






/*//adicionar produto no carrinho
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".button-hover");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productContainer = this.parentElement.parentElement; // Alteração na linha para encontrar o container correto do produto
            const productTitle = productContainer.querySelector(".product-title").innerText;
            const productPrice = productContainer.querySelector(".product-price").innerText;

            const cartRow = document.createElement("tr");
            cartRow.innerHTML = `
                <td>${productTitle}</td>
                <td>${productPrice}</td>
                <td><input type="number" class="product-qnt-input" value="1"></td>
                <td><button class="remove-product-button">Remover</button></td>
            `;

            const cartTableBody = document.querySelector(".cart-table tbody");
            cartTableBody.appendChild(cartRow);

            updateCartTotal();

            const removeButton = cartRow.querySelector(".remove-product-button");
            removeButton.addEventListener("click", function () {
                cartRow.remove();
                updateCartTotal();
            });
        });
    });

    function updateCartTotal() {
        const cartRows = document.querySelectorAll(".cart-table tbody tr");
        let total = 0;

        cartRows.forEach((row) => {
            const priceElement = row.querySelector("td:nth-child(2)");
            const price = parseFloat(priceElement.innerText.replace("R$", ""));

            const quantityElement = row.querySelector(".product-qnt-input");
            const quantity = parseInt(quantityElement.value);

            total += price * quantity;
        });

        const totalElement = document.querySelector(".cart-total-container span");
        totalElement.innerText = `R$ ${total.toFixed(2)}`;
    }
});*/
