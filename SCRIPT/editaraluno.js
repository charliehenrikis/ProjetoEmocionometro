let voltarLogin = document.getElementById("voltarLogin");

function voltarAoInicio() {
  window.location.href = "../index.html";
}

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

elementosAtivos.forEach((elemento) => {
  elemento.addEventListener("click", function () {
    const imagem = elemento.querySelector("img");
    const nomeArquivo = imagem.getAttribute("src").split("/").pop();

    if (nomeArquivo === "desativo.png") {
      imagem.setAttribute("src", "../IMG/ativo.png");
    } else {
      imagem.setAttribute("src", "../IMG/desativo.png");
    }
  });
});

//EDITAR PROFESSOR
let alunoId;

// captura o ID na URL do navegador
const getIdUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  alunoId = id;
  carregarDados(alunoId);
};

const buscarProfessor = async (id) => {
  const response = await fetch(`http://localhost:3000/Aluno/${id}`);
  const aluno = await response.json();
  return aluno;
};

const carregarDadosFormulario = (aluno) => {
  document.getElementById("nome").value = aluno.Nome;
  document.getElementById("turma").value = aluno.Turma;
  const imagemAtivo = document.getElementById("ativo");
  imagemAtivo.src = aluno.Ativo
    ? "../IMG/ativo.png"
    : "../IMG/desativo.png";
};

const carregarDados = async (id) => {
  if (id) {
    const aluno = await buscarAluno(id);
    console.log(aluno);
    carregarDadosFormulario(aluno);
  }
};

const editarAluno = async () => {
  const Nome = document.getElementById("nome").value;
  const Turma = document.getElementById("turma").value;
  const imagemAtivo = document.getElementById("ativo");
  const Ativo = imagemAtivo.src.endsWith("ativo.png");
  const aluno = {
    Nome,
    Turma,
    Ativo,
  };
  await fetch(`http://localhost:3000/Aluno/${alunoId}`, {
    method: "PUT",
    headers: {
      'Accept': "application/json, text/plain, /",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aluno),
  });
  window.location.href = "../HTML/aluno.html";
};

getIdUrl();
