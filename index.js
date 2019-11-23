const js2xmlparser = require('js2xmlparser');

(async =() => { 
    let pipedriveUrl = "https://companydomain.pipedrive.com/v1/deals?api_token=d2e1bf8f8a3a0abb0523267c6a237b49ca46bb7d&status=won"
    
    let obj = {
        "name" : "daniel"
    }

    console.log(js2xmlparser.parse("nome",obj))
})();