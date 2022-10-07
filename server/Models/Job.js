const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
    {
        dateApplied: {
            type: Date,
            required: true,
        },
        datePosted: {
            type: Date,
            required: true,
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
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        officeSetting: {
            type: String,
            required: true,
        },
        pay: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
        requirements: {
            type: String,
            required: true,
        },
        applicationStatus: {
            type: String,
            required: true,
        },
        benefits: {
            type: String,
            required: false,
        },
        pay: {
            type: String,
            required: true,
        }
    }
);
  
const Job = model('Job', jobSchema);
  
module.exports = Job;