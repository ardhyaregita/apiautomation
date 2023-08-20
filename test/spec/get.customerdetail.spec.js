const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json');
const { getCustomerId } = require("./get.customerid.spec");


async function getCustomer(payload,token){
    const response = await request(config.baseURL)
    .get('/customers/e3239077-b6d7-41ab-ad5c-7a7e0f083a8f')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response

}

describe('get Customer',() => {
    it('Success get detail customer', async () => {
        //Get Token
        const token = await getToken()
        //Assert
        expect((await response).status).to.equal(200);
        //expect((await response).body.data.name).to.equal(payload.name);
    })
    it('Failed get detail customer', async () => {
        //Get Token
        const token = await getToken()
        //Assert
        expect((await response).status).to.equal(400);
        
    })
})



