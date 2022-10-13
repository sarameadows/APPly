const { Schema } = require('mongoose');

const jobSchema = new Schema(
    {
        dateApplied: {
            type: Date,
            required: false,
        },
        datePosted: {
            type: Date,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: false,
        },
        location: {
            type: String,
            required: false,
        },
        officeSetting: {
            type: String,
            required: false,
        },
        source: {
            type: String,
            required: false,
        },
        requirements: {
            type: [String],
            required: false,
        },
        applicationStatus: {
            type: String,
            required: true,
        },
        benefits: {
            type: [String],
            required: false,
        },
        pay: {
            type: String,
            required: false,
        }
    }
);
  
module.exports = jobSchema;