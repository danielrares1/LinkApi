const getDealsPipedrive = require('./functions/getDealsPipedrive.js');
const blingOrder = require('./transformations/newOrder');
const createOrderBling = require('./functions/postOrderBling');

(async () => {
  try {
    let deals = await getDealsPipedrive();
    for (let deal of deals.data) {
        let treatedDeal = blingOrder(deal)
        console.log('treatedDeal', JSON.stringify(treatedDeal,null,4))
        
        let createOrderBling2 = await createOrderBling(treatedDeal)
        console.log('createOrderBling', JSON.stringify(createOrderBling2,null,4))
    }
  } catch (error) {
      console.log('error', JSON.stringify(error,null,4))
  }
})();
