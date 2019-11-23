const js2xmlparser = require('js2xmlparser');
const getDealsPipedrive = require('./functions/getDealsPipedrive.js');

(async () => { 
    try{
        let obj = {
            "name" : "daniel"
        }
    
        console.log(js2xmlparser.parse("nome",obj))
    
        let deals = await getDealsPipedrive()
        console.log(' deals ', JSON.stringify(deals,null,4) )
    } catch(error){

    }
    
  
})()