import axios from 'axios'
const baseUrl = 'http://mandee.ap-south-1.elasticbeanstalk.com'
const buyAction = 'buy'
const farmAction = 'sell'
const formInputUrl = 'http://mandee.ap-south-1.elasticbeanstalk.com/buy'

const buyRequest = async (data) => {
    const request = await axios.post(`${ baseUrl }/${buyAction}`, data)
    return request
}

const farmSignup = async (data) => {
    const request = await axios.post(`${ baseUrl }/${farmAction}`, data)
    return request
}

export default {buyRequest, farmSignup, formInputUrl}