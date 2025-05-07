import db from "./db.json"



const form = document.getElementById("loginForm")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
// })

const fname = document.querySelector("#name").value
const tel = document.querySelector("#tel").value
const cep = document.querySelector("#cep").value

const xmr = new XMLHttpRequest();

xmr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const res = this.response;
    db.users = {
        "name": "denis",
        "tel": "45999898148"
    }
  }
};

xmr.open("GET", "http://localhost:8080/http_server/db.json", true);
xmr.setRequestHeader("Content-type", "application/json");
xmr.send(JSON.stringify({"name": fname, "tel": tel, "cep": cep}));
