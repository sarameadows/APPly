const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const noteSchema = new Schema({
    title: {
        type: String
    },
    text: {
        type: String
    }
});

module.exports = noteSchema;