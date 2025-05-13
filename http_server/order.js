import * as db from "/http_server/url.js";
import bootstrap from '/bootstrap'

const cep = "85812003";
const region = cep[0];
const subregion = cep[1];
const sector = cep[2];

class Order {
  inputOrder() {
    const orderdoc = document.createElement("div");
    document.body.appendChild(orderdoc);
    orderdoc.innerHTML = `
    <fieldset>
      <legend>
        Insira os móveis que serão enviados
      </legend>
      <div id="orderElements">
        <div id="orderElementsDiv_01">
          <input type="text" placeholder="Armário"/>
          <input type="number" placeholder="2"/>
            
        </div>
        <button id="addOrderElements">Adicionar mais</button>
      </div>
    </fieldset>
      <form action="">
        <fieldset>
          <legend>Insira as informações abaixo:</legend>
          <input
            type="text"
            id="startRoute"
            placeholder="Embarque da mudança"
          />
          <input type="text" id="finalRoute" placeholder="Destino final" />
          <button type="submit">Finalizar pedido</button>
        </fieldset>
      </form>

    `;
  }

  orderDoc() {
    const order = document.createElement("div");
    document.body.appendChild(order);
    order.innerHTML = `
        <div id="userData">
        <input type="text" id="user_name" >${
          document.querySelector("#user_name").value
        }
        <input type="tel" id="tel">${document.querySelector("#user_tel").value}
        <input type="text" id="cep">${document.querySelector("#user_cep").value}
      </div>
      <div id="orderElements">
        <h4>Insira os móveis ou objetos que serão enviados</h4>
        <input type="text" placeholder="EX: Guarda-roupa">
      </div>
      <form action="">
        <fieldset>
          <legend>Insira as informações abaixo:</legend>
          <input
            type="text"
            id="startRoute"
            placeholder="Embarque da mudança"
          />
          <input type="text" id="finalRoute" placeholder="Destino final" />
          <button type="submit">Finalizar pedido</button>
        </fieldset>
      </form>

    `;
  }

  changeOrder() {}
  deleteOrder() {}
}

fetch(db.urlDB)
  .then((req) => req.json())
  .then((res) => {
    // const order = new Order()
  });

const button = document.querySelector("#createButton");
button.onclick = () => {
  const order = new Order();
  order.inputOrder();
};
