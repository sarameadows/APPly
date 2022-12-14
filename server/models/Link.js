const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `links` array in User.js
const linkSchema = new Schema({
    name: {
        type: String
    },  
    link: {
        type: String
    }
});

module.exports = linkSchema;