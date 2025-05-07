const urlLogin = "http://localhost:8080/http_server/login.html";
const urlDB = "http://localhost:8080/http_server/db.json";

// fetch(urlLogin)
//   .then((response) => response.text()) // ou .json() se for JSON
//   .then((text) => {
//     const welcome = document.getElementById("welcome");
//     welcome.innerHTML = "Seja bem-vindo " + text;
//   })
//   .catch((error) => {
//     console.error("Erro ao buscar dados:", error);
//   });

fetch(urlDB)
  .then((req) => req.json())
  .then((res) => {
    console.log(res.users)
    document.querySelector("#loginForm").addEventListener("submit", () => {
      if (
        document.querySelector("#name").value === res.users.nome &&
        document.querySelector("#tel").value === res.users.tel &&
        document.querySelector("#cep").value === res.users.cep
      ) {
        alert("logado.");
      } else {
        alert("informações incorretas.");
      }
    });
  });
