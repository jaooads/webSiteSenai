// MODAL
const modalFundo = document.getElementById('modalFundo');
const fecharModal = document.getElementById('fecharModal');
const botaoRegistrar = document.getElementById('botaoRegistrar');
const voltarLogin = document.getElementById('voltarLogin');
const formLogin = document.getElementById('formLogin');
const formRegistro = document.getElementById('formRegistro');
const tituloModal = document.getElementById('tituloModal');

fecharModal.addEventListener('click', () => modalFundo.style.display = 'none');

botaoRegistrar.addEventListener('click', () => {
    formLogin.classList.add('oculto');
    formRegistro.classList.remove('oculto');
    tituloModal.textContent = "Registrar";
});

voltarLogin.addEventListener('click', () => {
    formRegistro.classList.add('oculto');
    formLogin.classList.remove('oculto');
    tituloModal.textContent = "Bem-vindo!";
});

// LOGIN
const botaoLogin = document.getElementById('botaoLogin');
const loginEmail = document.getElementById('loginEmail');
const loginSenha = document.getElementById('loginSenha');

botaoLogin.addEventListener('click', () => {
    const email = loginEmail.value;
    const senha = loginSenha.value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuarioEncontrado) {
        alert(`Login realizado! Bem-vindo, ${usuarioEncontrado.nome}`);
        modalFundo.style.display = 'none';
    } else {
        alert("Email ou senha incorretos.");
    }
});

// REGISTRO
const botaoCadastrar = document.getElementById('botaoCadastrar');
const registroNome = document.getElementById('registroNome');
const registroEmail = document.getElementById('registroEmail');
const registroSenha = document.getElementById('registroSenha');

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
    tituloModal.textContent = "Bem-vindo!";
});

// INTERAÇÕES SOCIAIS
const googleBtn = document.querySelectorAll('.google');
const facebookBtn = document.querySelectorAll('.facebook');

googleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Conectando com Google...");
        btn.style.transform = "rotate(360deg)";
        setTimeout(() => alert("Login/Registro com Google realizado!"), 600);
    });
});

facebookBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Conectando com Facebook...");
        btn.style.transform = "scale(1.5)";
        setTimeout(() => alert("Login/Registro com Facebook realizado!"), 600);
    });
});
