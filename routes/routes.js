
const express = require('express');


const router = express.Router();
const usermodel = require('../model/model_schema')



router.get('/', function(request, response){
    response.status(200).send("hello homer")
})


router.post("/login", async (request,response) => {
    const { email, password } = request.body
    // console.log(email);
    let responseData = await usermodel.findOne({email})
    console.log(responseData);
    if(responseData){
        if(password === responseData.password){
            response.status(200).send({message:"Successful"})
        } else {
            response.status(200).send({message:"wrong username or password"})
        }
    } else {

        response.status(400).send({message:"User does not exist"})
    }



})

router.post('/signup', async (request,response) => {
    const { Companyname, username, email,password, confirmpassword } = request.body

    const responseData = {};
    try {
        let newuser = new usermodel({Companyname, username, email,password, confirmpassword})
    
         responseData =  await newuser.save()
    } catch (error) {
        response.status(400).send({message:error})
        
    }
    
    response.status(200).send({message:"you have successfully signed up. You can login now!!!", data: responseData})

})



module.exports = router