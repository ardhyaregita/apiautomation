const request = require("supertest");
const { expect } = require("chai");
const { getToken } = require("./get.token.spec");
const config = require('../../data/config.json');

async function deleteCustomer(customerId, token){
    const response = await request(config.baseURL)
        .delete(`/customers/${customerId}`)
        .set("Authorization", `Bearer ${token}`);
    return response;
}

const customerId = "800a8ef0-82ec-40bf-8352-427d08faebd7";
const wrongCustomerId = "da753620-10e1-4c94-b6cc-0";


describe('Delete Customer', () => {
    let token;

    before(async () => {
        token = await getToken();
    });

    it('Failed delete customer', async () => {
        const response = await deleteCustomer(wrongCustomerId, token);
        // Assert
        expect(response.status).to.equal(404);
        // Lakukan asersi lain jika diperlukan
    });

    it('Success delete customer', async () => {
        const response = await deleteCustomer(customerId, token);
        console.log((await response).body);
        // Assert
        expect(response.status).to.equal(200);
        // Lakukan asersi lain jika diperlukan
    });
});
