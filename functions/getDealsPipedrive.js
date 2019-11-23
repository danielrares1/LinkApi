const request = require("request");

module.exports = async () => {

    const options = {
      method: "GET",
      url: `https://companydomain.pipedrive.com/v1/deals?api_token=d2e1bf8f8a3a0abb0523267c6a237b49ca46bb7d&status=won`,
      success: [200],
      body: {},
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
