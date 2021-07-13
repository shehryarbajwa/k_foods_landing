const axios = require('axios');
const uniqid = require('uniqid');
const {addOrUpdateOrder} = require('./dynamo')

// const seedData = async () => {
//     const order = {
//         'id': uniqid(),
//         'name': 'Shehryar Bajwa',
//         'contact_number': '03218609999',
//         'address': '502-G, Phase 5, DHA, Lahore',
//         'product': 'Eggs',
//         'province': 'Punjab',
//         'district': 'Punjab'
//     }

//     try {

//         await addOrUpdateOrder(order)

//     } catch (error) {
//         console.log(error)
//     }
// }
console.log(uniqid())
seedData()