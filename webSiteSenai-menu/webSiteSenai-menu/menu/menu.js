async function carregarMenu() {
    fetch('/menu/menu.html')
        .then(response => response.text())
        .then(header => {
            // injeta dentro do container
            document.getElementById('menu-container').innerHTML = header;

            // adiciona evento no botão só depois que o menu foi injetado
            const mobileBtn = document.getElementById("mobile-menu-button");
            const navMenu = document.getElementById("nav-menu");

            if (mobileBtn && navMenu) {
                mobileBtn.addEventListener("click", () => {
                    navMenu.classList.toggle("active");
                });
            }
        })
        .catch(error => {
            document.getElementById('menu-container').innerHTML = `<p>Erro ao carregar o menu</p>`;
        });
}

carregarMenu();
