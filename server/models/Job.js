const {Schema} = require('mongoose');

// chose to make jobs only contained in subdocuments of users because they aren't publically visible
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