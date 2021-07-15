const express = require('express')
const buyerRouter = express.Router();

const { addOrUpdateOrder } = require("../../models/dynamo");
buyerRouter.post('/sell', async (req, res) => {
    const {content, name} = req.body;

    try{
        await addOrUpdateOrder(req.body)
    } catch(err){
        console.log(req.body)
    }
});

module.exports = buyerRouter;