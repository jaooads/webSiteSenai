async function carregarMenu() {
    fetch('/menu/menu.html')
        .then(response => response.text())
        .then(header => {
            document.getElementById('menu').innerHTML = header;
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/menu/menu.css';
            document.head.appendChild(link);
        })
        .catch(error => {
            document.getElementById('menu').innerHTML = `<p>Erro ao carregar o menu</p>`;
        });
}

carregarMenu();