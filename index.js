const express = require('express')   //imports express
const mongoose = require("mongoose")  //imports mongoose
const cookieParser=require('cookie-parser')  //imports cookie-parser
const passport =require('passport')      //imports passport
const User = require("./Models/User");
const Router = require('./Routes/User');
require('./auth/passport')




const app = express()     //Initiates our app

const port = 5000

app.use(express.json())  //Express.json middleware
app.use(cookieParser())   //CookieParser middleware
app.use(express.urlencoded({ extended: true })) //Middleware
app.use(passport.initialize())   //Passport middleware
app.use(Router)

mongoose.connect(
    "mongodb+srv://admin:adm'n@cluster0.cvhh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection
    .once("open", function () {
      console.log("Connected to Mongo");
    })
    .on("error", function (err) {
      console.log("Mongo Error", err);
    });

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})