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


document.addEventListener("DOMContentLoaded", () => {

    // MODAL
    const modalFundo = document.getElementById('modalFundo');
    const fecharModal = document.getElementById('fecharModal');


    const botaoRegistrar = document.getElementById('botaoRegistrar');
    const voltarLogin = document.getElementById('voltarLogin');
    const linkRecuperar = document.getElementById('linkRecuperar');
    const voltarLoginRec = document.getElementById('voltarLoginRec');

    const botaoLogin = document.getElementById('botaoLogin');
    const loginEmail = document.getElementById('loginEmail');
    const loginSenha = document.getElementById('loginSenha');
    const nomeUsuarioSpan = document.getElementById('nomeUsuario');

    const botaoCadastrar = document.getElementById('botaoCadastrar');
    const registroNome = document.getElementById('registroNome');
    const registroEmail = document.getElementById('registroEmail');
    const registroSenha = document.getElementById('registroSenha');

    const googleBtn = document.querySelectorAll('.google');
    const facebookBtn = document.querySelectorAll('.facebook');

    const botaoSair = document.getElementById("botaoSair");

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    // Fechar modal
    fecharModal.addEventListener('click', () => modalFundo.style.display = 'none');

    // Registrar
    botaoRegistrar.addEventListener('click', () => {
        formLogin.classList.add('oculto');
        formRegistro.classList.remove('oculto');
        tituloModal.textContent = "Registrar";
    });

    // Voltar login do registro
    voltarLogin.addEventListener('click', () => {
        formRegistro.classList.add('oculto');
        formLogin.classList.remove('oculto');
    });

    // Abrir recuperação
    linkRecuperar.addEventListener('click', () => {
        formLogin.classList.add('oculto');
        formRegistro.classList.add('oculto');
        formRecuperar.classList.remove('oculto');
        tituloModal.textContent = "Recuperar Senha";
    });

    // Voltar login do recuperar
    voltarLoginRec.addEventListener('click', () => {
        formRecuperar.classList.add('oculto');
        formLogin.classList.remove('oculto');
    });


    let emailRecuperar = "";
    let nomeRecuperar = "";

    const formRecuperar = document.getElementById('formRecuperar');
    const formNovaSenha = document.getElementById('formNovaSenha');
    const botaoRecuperar = document.getElementById('botaoRecuperar');
    const botaoAlterarSenha = document.getElementById('botaoAlterarSenha');
    const tituloModal = document.getElementById('tituloModal');
    const formLogin = document.getElementById('formLogin');

    // Recuperar senha
    botaoRecuperar.addEventListener('click', () => {
        const nome = document.getElementById("recuperarNome").value.trim();
        const email = document.getElementById("recuperarEmail").value.trim();
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.nome.toLowerCase() === nome.toLowerCase());

        if (usuarioEncontrado) {
            emailRecuperar = email;
            nomeRecuperar = nome;

            formRecuperar.classList.add('oculto');
            formNovaSenha.classList.remove('oculto');
        } else {
            alert("Nome ou email incorretos. Verifique e tente novamente.");
        }
    });

    // Alterar senha
    botaoAlterarSenha.addEventListener('click', () => {
        const novaSenha = document.getElementById('novaSenha').value.trim();
        const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

        if (!novaSenha || !confirmarSenha) {
            alert("Preencha todos os campos!");
            return;
        }
        if (novaSenha !== confirmarSenha) {
            alert("As senhas não conferem!");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const index = usuarios.findIndex(u => u.email === emailRecuperar && u.nome.toLowerCase() === nomeRecuperar.toLowerCase());
        if (index !== -1) {
            usuarios[index].senha = novaSenha;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }

        alert("Senha alterada com sucesso!");
        formNovaSenha.classList.add('oculto');
        formLogin.classList.remove('oculto');
        document.getElementById("novaSenha").value = '';
        document.getElementById("confirmarSenha").value = '';
    });
    // Login
    botaoLogin.addEventListener('click', () => {
        const email = loginEmail.value;
        const senha = loginSenha.value;
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuarioEncontrado) {
            alert(`Login realizado! Bem-vindo, ${usuarioEncontrado.nome}`);
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            nomeUsuarioSpan.textContent = `Olá, ${usuarioEncontrado.nome}`;
            modalFundo.style.display = 'none';
            if (botaoSair) botaoSair.classList.remove("oculto");
        } else {
            alert("Email ou senha incorretos.");
        }
    });

    // Registro
    botaoCadastrar.addEventListener('click', () => {
        const nome = registroNome.value;
        const email = registroEmail.value;
        const senha = registroSenha.value;

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.find(u => u.email === email)) {
            alert("Email já cadastrado!");
            return;
        }

        usuarios.push({ nome, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Cadastro realizado com sucesso!");

        registroNome.value = registroEmail.value = registroSenha.value = '';
        formRegistro.classList.add('oculto');
        formLogin.classList.remove('oculto');
    });

    // Social login
    googleBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Conectando com Google...");
            btn.style.transform = "rotate(360deg)";
            setTimeout(() => {
                alert("Login/Registro com Google realizado!");
                nomeUsuarioSpan.textContent = "Olá, GoogleUser";
            }, 600);
        });
    });

    facebookBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Conectando com Facebook...");
            btn.style.transform = "scale(1.5)";
            setTimeout(() => {
                alert("Login/Registro com Facebook realizado!");
                nomeUsuarioSpan.textContent = "Olá, FacebookUser";
            }, 600);
        });
    });

    // Logout
    if (usuarioLogado && botaoSair) {
        nomeUsuarioSpan.textContent = `Olá, ${usuarioLogado.nome}`;
        botaoSair.classList.remove("oculto");
    }

    if (botaoSair) {
        botaoSair.addEventListener("click", () => {
            localStorage.removeItem("usuarioLogado");
            nomeUsuarioSpan.textContent = "";
            botaoSair.classList.add("oculto");
            alert("Você saiu da sua conta.");
            modalFundo.style.display = 'block';
        });
    }
});
