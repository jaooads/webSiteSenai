let carrinhoQuantidade = 0;

const botoesComprar = document.querySelectorAll('.btn-comprar');
const carrinho = document.getElementById('carrinho');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        carrinhoQuantidade++;
        carrinho.textContent = `🛒 (${carrinhoQuantidade})`;
    });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Toggle menu principal no mobile
menuToggle.addEventListener('click', () => {
    if (menu.style.display === 'flex' || menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
});

// Toggle submenu no mobile
const submenuLinks = document.querySelectorAll('nav ul li > a');

submenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // evita seguir link
                if (submenu.style.display === 'block') {
                    submenu.style.display = 'none';
                } else {
                    submenu.style.display = 'block';
                }
            }
        }
    });
});