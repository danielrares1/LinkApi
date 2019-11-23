const js2xmlparser = require("js2xmlparser");

module.exports = data => {
  let obj = {
    cliente: {
      nome: data.person_id.name
    },
    volumes: [
      {
        volume: {
          servico: "Entrega Grátis"
        }
      }
    ],
    itens: [
      {
        item: {
          descricao: data.title,
          qtde: 1,
          vlr_unit: data.value
        }
      }
    ],
    parcelas: [
      {
        parcela: {
          vlr: data.value
        }   
      }
    ]
  };

  return js2xmlparser.parse("pedido", obj);
};
