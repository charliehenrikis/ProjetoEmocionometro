var voltarLogin = document.getElementById("voltarLogin");

voltarLogin.addEventListener("click", function () {
  window.location.href = "login.html";
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


