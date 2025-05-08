const urlLogin = "http://localhost:8080/http_server/login.html";
const urlDB = "http://localhost:8080/http_server/db.json";
const urlHub = "http://localhost:8080/http_server/hub.html";

if (document.title === "Hub") {
  fetch(urlDB)
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
  fetch(urlDB)
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
