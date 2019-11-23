const mongoose = require("mongoose");

const dealsSchema = new mongoose.Schema({
  _declaration: {
    _attributes: {
      version: {
        type: String
      }
    }
  },
  pedido: {
    cliente: {
      nome: { type: Object },
      volumes: { volume: { type: Object } },
      itens: { item: { type: Object } },
      parcelas: { parcela: { type: Object } }
    }
  }
});

const Deals = mongoose.model("Deals", dealsSchema);
module.exports = Deals;
