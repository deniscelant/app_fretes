const posts = "http://localhost:3000/posts";
const users = "http://localhost:3000/users";

const nome = document.querySelector("#name").value;
const tel = document.querySelector("#tel").value;
const cep = document.querySelector("#cep").value;

const xmr = new XMLHttpRequest();

xmr.onload = () => {
    console.log(xmr.responseText)
    const user = {
        "name": nome,
        "tel": tel,
        "cep": cep,
    }
};

xmr.open("POST", users);
xmr.send();
