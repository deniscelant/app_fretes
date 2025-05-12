import * as db from "./http_server/url.js"

if (document.title === "Hub") {
  fetch(db.urlDB)
    .then((response) => response.json()) // ou .json() se for JSON
    .then((text) => {
      const welcome = document.getElementById("welcome");
      welcome.innerHTML = "Seja bem-vindo " + text.users.nome;
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
    });
}

if (document.title === "Login") {
  fetch(db.urlDB)
    .then((req) => req.json())
    .then((res) => {
      console.log(res.users);
      document.querySelector("#loginForm").addEventListener("submit", () => {
        if (
          document.querySelector("#name").value == res.users.nome &&
          document.querySelector("#tel").value == res.users.tel &&
          document.querySelector("#cep").value == res.users.cep
        ) {
          alert("logado.");
        } else {
          alert("informações incorretas.");
        }
      });
    });
}
