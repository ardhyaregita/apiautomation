const request = require("supertest");
const userData = require('../../data/user.data.json')
const config = require('../../data/config.json')

async function getCustomerId(){
    const response = await request(config.baseURL) //BASEURL
    .post("/customers") //ENDPOINT
    .send(userData)
    const custId = await response.body.data.customerId
    
    return custId
}

module.exports = {getCustomerId}