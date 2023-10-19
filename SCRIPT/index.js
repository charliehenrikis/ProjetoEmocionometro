// faz com ao clicar em entrar redireciona para a página index.html
let botao = document.getElementById("redirecionarBotao");

botao.addEventListener("click", function () {
  window.location.href = "./HTML/inicio.html";
});

//MUDAR COR DO BOTAO ENTRAR (FAVOR VERIFICAR)
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrarButton = document.querySelector('.entrar');

function atualizarCorBotao() {
    if (email.value.trim() !== '' && senha.value.trim() !== '') {
        entrarButton.classList.add('preenchido');
    } else {
        entrarButton.classList.remove('preenchido');
    }
}

email.addEventListener('input', atualizarCorBotao);
senha.addEventListener('input', atualizarCorBotao);

entrarButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (email.value.trim() !== '' && senha.value.trim() !== '') {
        // Campos preenchidos, adicione sua lógica aqui
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Chame a função para garantir que a cor do botão seja atualizada quando a página é carregada
atualizarCorBotao();

