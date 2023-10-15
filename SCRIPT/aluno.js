var voltarLogin = document.getElementById("voltarLogin");

voltarLogin.addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Código para exibir a Div Oculta no .MENU2

  // Captura a classe .menu2
  var menu2 = document.querySelector(".menu2");
  var menu4 = document.querySelector(".menu4");

  // Captura a div que contém as divs "Professor" e "Aluno"
  var menuExpandir = document.querySelector(".menuExpandir");

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

  //Código para botão cadastrar Aluno
document.addEventListener("DOMContentLoaded", function () {
  const novoUsuarioButton = document.getElementById("novousuario");
  getAluno();
  novoUsuarioButton.addEventListener("click", function () {
    // Redirecionar para a página desejada
    window.location.href = "cadastraraluno.html";
  });
});
  
//Apartir daqui Json Server
const getAluno = async () => {
  const apiUrl = await fetch("http:///localhost:3000/Aluno");
  const aluno = await apiUrl.json();
  exbirAluno(aluno);
};

const exbirAluno = (aluno) => {
  const content = document.getElementById("content");
  aluno.forEach((alu) => {
    const alunoHTML = `<tr>
    <td>${alu.Nome}</td>
    <td>${alu.Turma}</td>
    <td class="ativo">
                  <img src=${alu.Ativo} alt="" />
                </td>
                <td class="action">
                  <img src="../IMG/ações.png" alt="modificar" />
                  <img src="../IMG/excluir.png" alt="excluir" />
                </td>
    </tr>`;

    content.innerHTML = content.innerHTML + alunoHTML;
  });
};


