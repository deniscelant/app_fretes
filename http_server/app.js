const urlLogin = "http://localhost:8080/http_server/login.html";

// fetch(urlLogin)
//   .then((response) => response.text()) // ou .json() se for JSON
//   .then((text) => {
//     const welcome = document.getElementById("welcome");
//     welcome.innerHTML = "Seja bem-vindo " + text;
//   })
//   .catch((error) => {
//     console.error("Erro ao buscar dados:", error);
//   });

fetch(urlLogin)
  .then((response) => console.log(response)) // ou .json() se for JSON