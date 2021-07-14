const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {dynamoClient,
    getOrders,
    addOrUpdateOrder,
    getOrderById,
    deleteOrder,
    getFarmer,
    getFarmerById,
    addOrUpdateFarmer,
    deleteFarmer} = require('./dynamo')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/buy', async (req, res) => {
    const {content, name} = req.body;
    
    try{
        await addOrUpdateOrder(req.body)

    } catch(err){
        console.log(err)
    }
})

app.post('/sell', async (req, res) => {

    try{
        await addOrUpdateFarmer(req.body)
    } catch(err){
        console.log(req.body)
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port ' + port);
})