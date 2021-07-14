const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const getOrders = async () => {
    const params = {
        TableName: process.env.TABLE_NAME_BUYER
    }

    const orders = await dynamoClient.scan(params).promise()
    console.log(orders)
    return orders
}

const addOrUpdateOrder = async (order) => {
    const params = {
        TableName: process.env.TABLE_NAME_BUYER,
        Item: order
    }

    return await dynamoClient.put(params).promise()
}

const getOrderById = async (id) => {
    const params = {
        TableName: process.env.TABLE_NAME_BUYER,
        Key: {
            id
        }
    }
    return await dynamoClient.put(params).promise()
}

const deleteOrder = async (id) => {
    const params = {
        TableName: process.env.TABLE_NAME_BUYER,
        Key: {
            id
        }
    }
    return await dynamoClient.delete(params).promise()
}

const getFarmer = async () => {
    const params = {
        TableName: process.env.TABLE_NAME_FARMER
    }

    const orders = await dynamoClient.scan(params).promise()
    console.log(orders)
    return orders
}

const addOrUpdateFarmer = async (order) => {
    const params = {
        TableName: process.env.TABLE_NAME_FARMER,
        Item: order
    }

    return await dynamoClient.put(params).promise()
}

const getFarmerById = async (id) => {
    const params = {
        TableName: process.env.TABLE_NAME_FARMER,
        Key: {
            id
        }
    }
    return await dynamoClient.put(params).promise()
}

const deleteFarmer = async (id) => {
    const params = {
        TableName: process.env.TABLE_NAME_FARMER,
        Key: {
            id
        }
    }
    return await dynamoClient.delete(params).promise()
}

module.exports = {
    dynamoClient,
    getOrders,
    addOrUpdateOrder,
    getOrderById,
    deleteOrder,
    getFarmer,
    getFarmerById,
    addOrUpdateFarmer,
    deleteFarmer
}