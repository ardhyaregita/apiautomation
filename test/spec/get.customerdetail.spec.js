const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json');
//const { getCustomerId } = require("./get.customerid.spec");

async function getCustomer(payload, token) {
    const response = await request(config.baseURL)
        .get(`/customers/${payload.customerId}`)
        .set("Authorization", `Bearer ${token}`);
    return response;
}

const payload = {
    customerId: "800a8ef0-82ec-40bf-8352-427d08faebd7"
}

describe('get Customer', () => {
    let token;

    before(async () => {
        token = await getToken();
    });

    it('Success get detail customer', async () => {
        const response = await getCustomer(payload, token);
        console.log((await response).body);
        expect(response.status).to.equal(200);
        // Lakukan asersi lain jika diperlukan
    });

    it('Failed get detail customer', async () => {
        const nonExistentCustomerId = "da753620-10e1-4c94-b6cc-xxxxxxxxx";
        const response = await getCustomer(payload, token);
        expect(response.status).to.equal(200);
        
        
    });
});