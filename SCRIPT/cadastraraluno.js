let voltarLogin = document.getElementById("voltarLogin");

voltarLogin.addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Código para exibir a Div Oculta no .MENU2

  // Captura a classe .menu2
  let menu2 = document.querySelector(".menu2");
  let menu4 = document.querySelector(".menu4");

  // Captura a div que contém as divs "Professor" e "Aluno"
  let menuExpandir = document.querySelector(".menuExpandir");

  // Adiciona um evento de clique à classe .menu2
  menu2.addEventListener("click", function () {
    // Alterna a classe "expanded" para .menu2
    menu2.classList.toggle("expanded");

    // Exibe ou oculta a div de expansão
    if (menu2.classList.contains("expanded")) {
      menuExpandir.style.display = "block" ;
      menu4.style.marginTop = "75px"
    } else {
      menuExpandir.style.display = "none"
      menu4.style.marginTop = "150px"
    }
  // menuExpandir.style.display = menu2.classList.contains("expanded") ? "block" : "none";
  });

//ALTERAR FOTO ATIVO PARA INATIVO
const elementosAtivos = document.querySelectorAll(".ativo");
const inputAtivo = document.getElementById("ativar")
inputAtivo.value="../IMG/ativo.png"

elementosAtivos.forEach((elemento) => {
  elemento.addEventListener("click", function () {
    const imagem = elemento.querySelector("img");
    const nomeArquivo = imagem.getAttribute("src").split("/").pop();

    if (nomeArquivo === "desativo.png") {
      imagem.setAttribute("src", "../IMG/ativo.png");
      inputAtivo.value="../IMG/ativo.png"
    } else {
      imagem.setAttribute("src", "../IMG/desativo.png");
      inputAtivo.value="../IMG/desativo.png"
    }
  });
});


//apartir daqui Json Server - cadastrar
const formulario=document.getElementById('formulario')

const cadastrarAluno = async (aluno) => {
  console.log(aluno)
  await fetch('http://localhost:3000/Aluno',{
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'content-Type': 'application/json' 
  },
  body:JSON.stringify(aluno)
  })
  console.log('Cadastrado com sucesso')
  window.location = "aluno.html"
}

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
const Nome=formulario.elements['nome'].value
const Turma=formulario.elements['turma'].value
const Ativo=formulario.elements['ativar'].value
const aluno= {
  Nome,
  Turma,
  Ativo
};

cadastrarAluno(aluno)

})