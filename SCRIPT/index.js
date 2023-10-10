// faz com ao clicar em entrar redireciona para a página index.html
var botao = document.getElementById("redirecionarBotao");

botao.addEventListener("click", function () {
  window.location.href = "../emocionometro/HTML/inicio.html";
});

//faz com que ao clicar no icone de olhinho no formulario a senha seja mostrada
// AINDA NÃO FUNCIONAL
function mostrarOcultarSenha() {
  const senha = document.getElementById("senha");
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}

// faz com que ao preencher o email e senha o botão de entrar fique verde
//A FAZER
