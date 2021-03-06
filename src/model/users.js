const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const schema = mongoose.Schema;
const preUser = new schema({
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true
    },
    
})