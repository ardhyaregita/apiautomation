const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json')

async function addCustomer(payload,token){
    const response = await request(config.baseURL)
    .post('/customers')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response

}

describe('Add Customer',() => {
    it('Success create new customer', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            "name": "Bambang",
            "phone": "081222333444",
            "address": "Jalan Malioboro",
            "description": "Bambang anak malioboro"

        }
        
        const response = await addCustomer(payload,token)
        console.log((await response).body);
        //Assert
        expect((await response).status).to.equal(201);
        //expect((await response).body.data.name).to.equal(payload.name);
    })

    it('Failed create new customer', async () => {
        //Get Token
        const token = await getToken()
        //Create User
        const payload = {
            
            "phone": "081222333444",
            "address": "Jalan Malioboro"
            
        }
        const response = await addCustomer(payload,token)
        //Assert
        expect((await response).status).to.equal(400);
        
    })
})



