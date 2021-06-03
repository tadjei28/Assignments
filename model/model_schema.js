const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    companyName :{
        type: String,
        required : true
    },

    username : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    ConfirmPassword: {
        type: String,
        required : true
    },

    date: {
        type : Date,
        default: Date.now
    }


})

const userModel = mongoose.model ('mytable',signupTemplate)

module.export = userModel
