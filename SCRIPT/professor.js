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

// Código para botão cadastrar Professor
document.addEventListener("DOMContentLoaded", function () {
  const novoUsuarioButton = document.getElementById("novousuario");

  novoUsuarioButton.addEventListener("click", function () {
    // Redirecionar para a página desejada
    window.location.href = "cadastrarprofessor.html";
  });
});

// A partir daqui, lógica para buscar professores
let professorData = []; // Para armazenar os dados de professores

const getProfessor = async () => {
  const apiUrl = await fetch("http://localhost:3000/Professor");
  professorData = await apiUrl.json();
  exibirProfessor(""); // Exibe todos os professores inicialmente
};

const exibirProfessor = (searchValue) => {
  const content = document.getElementById("content");

  content.innerHTML = ""; // Limpar o conteúdo antes de exibir os resultados

  professorData.forEach((prof) => {
    if (prof.Nome.toLowerCase().includes(searchValue.toLowerCase())) {
      const imagemAtivo = prof.Ativo;
      const professorHTML = `
        <tr>
          <td>${prof.Nome}</td>
          <td>${prof.Disciplina}</td>
          <td>${prof.Perfil}</td>
          <td class="ativo">
            <img src="${imagemAtivo}" alt="" />
          </td>
          <td class="action">
            <img src="../IMG/ações.png" alt="modificar" id="imagemEditar" onclick="irParaEdicao(${prof.id})" />
            <img src="../IMG/excluir.png" alt="excluir" id="imagemDeletar" onclick="excluirProfessor(${prof.id})" />
          </td>
        </tr>`;

      content.innerHTML += professorHTML;
    }
  });
};

const buscaInput = document.getElementById("buscaInput");

buscaInput.addEventListener("input", () => {
  const buscaValor = buscaInput.value;
  if (buscaValor.length >= 3) {
    exibirProfessor(buscaValor); // Atualiza a exibição com base na pesquisa
  } else {
    // Se o comprimento for inferior a 3, limpe a exibição
    exibirProfessor(""); // Exibe todos os alunos novamente
  }
});

// Método DELETE
const excluirProfessor = async (id) => {
  await fetch(`http://localhost:3000/Professor/${id}`, { method: "DELETE" });
  getProfessor(); // Atualiza a lista de professores após a exclusão
};

const irParaEdicao = (id) => {
  window.location = `editarprofessor.html?id=${id}`;
};

// Inicialmente, carregue os dados dos professores
getProfessor();