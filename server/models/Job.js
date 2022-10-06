const {Schema} = require('mongoose');

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        appStatus: {
            type: String,
            required: true
        },
        dateApplied: {
            type: Date
        },
        datePosted: {
            type: Date
        },
        salary: {
            type: Number
        },
        isRemote: {
            type: Boolean
        },
        link: {
            type: String
        }
    }
);

module.exports = jobSchema;