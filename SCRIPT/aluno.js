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
    menuExpandir.style.display = "block";
    menu4.style.marginTop = "75px";
  } else {
    menuExpandir.style.display = "none";
    menu4.style.marginTop = "150px";
  }
  // menuExpandir.style.display = menu2.classList.contains("expanded") ? "block" : "none";
});

// Código para botão cadastrar Aluno
document.addEventListener("DOMContentLoaded", function () {
  const novoUsuarioButton = document.getElementById("novousuario");

  novoUsuarioButton.addEventListener("click", function () {
    // Redirecionar para a página desejada
    window.location.href = "cadastraraluno.html";
  });
});

// A partir daqui, lógica para buscar Alunos
let alunoData = []; // Para armazenar os dados de Alunos

//Apartir daqui Json Server
const getAluno = async () => {
  const apiUrl = await fetch("https://dbjson-emocionometro-q03p.onrender.com/Aluno"); // Correção: Removi uma barra extra na URL
  alunoData = await apiUrl.json();
  exibirAluno(""); // Exibe todos os alunos inicialmente
};

const exibirAluno = (searchValue) => {
  const content = document.getElementById("content");

  content.innerHTML = ""; //pra impedir duplicacao antes de excluir

  alunoData.forEach((alu) => {
    if (alu.Nome.toLowerCase().includes(searchValue.toLowerCase())){
    const imagemAtivo = alu.Ativo;
    const alunoHTML = `
    <tr>
      <td>${alu.Nome}</td>
      <td>${alu.Turma}</td>
      <td class="ativo">
        <img src="${imagemAtivo}" alt="" />
      </td>
      <td class="action">
        <img src="../IMG/ações.png" alt="modificar" onclick="irParaEdicao(${alu.id})" />
        <img src="../IMG/excluir.png" alt="excluir" onclick="excluirAluno(${alu.id})" />
      </td>
    </tr>`;

    content.innerHTML += alunoHTML; // Correção: Use += para adicionar, não substituir
    }
  });
};

const buscaInput = document.getElementById("buscaInput");

buscaInput.addEventListener("input", () => {
  const buscaValor = buscaInput.value;
  if (buscaValor.length >= 3) {
    exibirAluno(buscaValor); // Atualiza a exibição com base na pesquisa
  } else {
    // Se o comprimento for inferior a 3, limpe a exibição
    exibirAluno(""); // Exibe todos os alunos novamente
  }
});

// Método DELETE
const excluirAluno = async (id) => {
  await fetch(`https://dbjson-emocionometro-q03p.onrender.com/Aluno/${id}`, { method: "DELETE" });
  getAluno(); // Atualiza a lista de alunos após a exclusão
};

const irParaEdicao = (id) => {
  window.location = `editaraluno.html?id=${id}`;
};

// Inicialmente, carregue os dados dos alunos
getAluno();