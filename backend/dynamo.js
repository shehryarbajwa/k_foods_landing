const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'mandi-api'

const getOrders = async () => {
    const params = {
        TableName: TABLE_NAME
    }

    const orders = await dynamoClient.scan(params).promise()
    console.log(orders)
    return orders
}

const addOrUpdateOrder = async (character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }

    return await dynamoClient.put(params).promise()
}

const getOrderById = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.put(params).promise()
}

const deleteOrder = async (id) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.delete(params).promise()
}

getOrders()

module.exports = {
    dynamoClient,
    getOrders,
    addOrUpdateOrder,
    getOrderById,
    deleteOrder
}