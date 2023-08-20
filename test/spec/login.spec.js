const request = require("supertest");
const { expect } = require("chai");

const BASEURL = "https://kasir-api.belajarqa.com"

async function getToken(payload){
    const response = await request(BASEURL) //BASEURL
    .post("/authentications") //ENDPOINT
    .send(payload)
    return response
}


describe('Login Feature', ()=>{
    it('Success Login', async () => {
        const payload = {
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10",
        }
        
        const response = await getToken(payload)

        console.log((await response).status);
        console.log((await response).body);

        //ASSERTION
         expect((await response).status).to.equal(201);
         expect((await response).body.data.user.name).to.equal("Kelontong Murah");

    })
    it('Failed Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com") //BASEURL
        .post("/authentications") //ENDPOINT
        .send({ //PAYLOAD
            "email": "kelontong.murah@gmail.com",
            "password": "SUKAJAYA10222",
         })
         //console.log((await response).status);
        //console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(401);
       
   })
})

describe('Get User', ()=>{
    const queryPage = 2
    it('Success Get User Detail', async ()=>{
        const response = await request('https://reqres.in')
        .get(`/api/users`+`?page=${queryPage}`)
        //.set("Authorization", `Bearer ${token}`)
        
        console.log((await response).status);
        console.log((await response).body);
    })
    

})