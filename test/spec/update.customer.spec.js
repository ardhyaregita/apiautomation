const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json')

async function updateCustomer(customerId, payload, token){
    const response = await request(config.baseURL)
        .put(`/customers/${customerId}`)
        .send(payload)
        .set("Authorization", `Bearer ${token}`);
    return response;
}

const customerId = "800a8ef0-82ec-40bf-8352-427d08faebd7"; 

describe('Update Customer', () => {
    let token; 

    before(async () => {
        token = await getToken(); 
    });

    it('Success update customer', async () => {
        // Create User
        const updatePayload = {
            "name": "Bambang Update menjadi Bambi",
            "phone": "081212111",
            "address": "Jakarta",
            "description": "Pelanggan VIP"
        }
        
        const response = await updateCustomer(customerId, updatePayload, token);
        console.log((await response).body);
        // Assert
        expect(response.status).to.equal(200);
        // Lakukan asersi lain jika diperlukan
    })

    it('Failed update customer', async () => {
        // Create User
        const invalidPayload = {
            
        }
        
        const response = await updateCustomer(customerId, invalidPayload, token);
        // Assert
        expect(response.status).to.equal(400);
        // Lakukan asersi lain jika diperlukan
    })
})
