const request = require("request");

module.exports = async (body) => {

    const options = {
      method: "POST",
      url: `https://bling.com.br/Api/v2/pedido/json/?apikey=73d27b61145c1ef99a9a48ae698796d3597e70a1e44030e2d6ea1aaf4490710df4fd2c43`,
      success: [200],
      body,
      timeout: 240000,
      headers: {},
      json: true
    };

    return new Promise((resolve, reject) => {
      request(options, (err, response, body) => {
        if (err || !response) return reject(err);
        const success = options.success.find(s => s === response.statusCode);
        if (!success) return reject(body);
        return resolve(body);
      });
    });
  
};