import * as db from "/http_server/url.js"

const cep = "85812003";
const region = cep[0];
const subregion = cep[1];
const sector = cep[2];

class Order{
    constructor(doc, region){
        doc = this.doc
        region = this.region
    }

    changeOrder(){}
    deleteOrder(){}
}

fetch(db.urlDB)
.then((req) => req.json())
.then((res) => {

    // const order = new Order()
})

