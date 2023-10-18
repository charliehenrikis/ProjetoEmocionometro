let voltarLogin = document.getElementById("voltarLogin");

function voltarAoInicio() {
  window.location.href = "../index.html";
}

// Código para exibir a Div Oculta no .MENU2

// Captura a classe .menu2
let menu2 = document.querySelector(".menu2");
let menu4 = document.querySelector(".menu4");

// Captura a div que contém as divs "Professor" e "Aluno"
var menuExpandir = document.querySelector(".menuExpandir");

// Adiciona um evento de clique à classe .menu2
menu2.addEventListener("click", function () {
  // Alterna a classe "expanded" para .menu2
  menu2.classList.toggle("expanded");

  // Exibe ou oculta a div de expansão
  if (menu2.classList.contains("expanded")) {
    menuExpandir.style.display = "block";
    menu4.style.marginTop = "75px";
  } else {
    menuExpandir.style.display = "none";
    menu4.style.marginTop = "150px";
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
let professorId;

// captura o ID na URL do navegador
const getIdUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  professorId = id;
  carregarDados(professorId);
};

const buscarProfessor = async (id) => {
  const response = await fetch(`http://localhost:3000/Professor/${id}`);
  const professor = await response.json();
  return professor;
};

const carregarDadosFormulario = (professor) => {
  document.getElementById("nome").value = professor.Nome;
  document.getElementById("perfil").value = professor.Perfil;
  document.getElementById("disciplina").value = professor.Disciplina;
  const imagemAtivo = document.getElementById("ativo");
  imagemAtivo.src = professor.Ativo
    ? "../IMG/ativo.png"
    : "../IMG/desativo.png";
};

const carregarDados = async (id) => {
  if (id) {
    const professor = await buscarProfessor(id);
    console.log(professor);
    carregarDadosFormulario(professor);
  }
};

const editarProfessor = async () => {
  const Nome = document.getElementById("nome").value;
  const Perfil = document.getElementById("perfil").value;
  const Disciplina = document.getElementById("disciplina").value;
  const imagemAtivo = document.getElementById("ativo");
  const Ativo = imagemAtivo.src.endsWith("ativo.png");
  const professor = {
    Nome,
    Disciplina,
    Perfil,
    Ativo,
  };
  await fetch(`http://localhost:3000/Professor/${professorId}`, {
    method: "PUT",
    headers: {
      'Accept': "application/json, text/plain, /",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(professor),
  });
  window.location.href = "../HTML/professor.html";
};

getIdUrl();
