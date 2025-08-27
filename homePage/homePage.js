let carrinhoQuantidade = 0;

const botoesComprar = document.querySelectorAll('.btn-comprar');
const carrinho = document.getElementById('carrinho');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        carrinhoQuantidade++;
        carrinho.textContent = `🛒 (${carrinhoQuantidade})`;
    });
});

