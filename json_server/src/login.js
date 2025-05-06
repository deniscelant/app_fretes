const cors = require('cors');
xmr.use(cors());

const postsURL = "http://localhost:3001/posts";
const usersURL = "http://localhost:3001/users";


const nome = document.querySelector("#name").value;
const tel = document.querySelector("#tel").value;
const cep = document.querySelector("#cep").value;

const xmr = new XMLHttpRequest();

xmr.open("POST", usersURL);
xmr.setRequestHeader('Content-Type', 'application/json');

xmr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      alert('Usuário adicionado com sucesso!');
    }
  };

xmr.send(JSON.stringify({
    name: nome,
    tel: tel,
    cep: cep,
}));
