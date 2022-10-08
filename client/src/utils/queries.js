import {gql} from '@apollo/client';

// i'm reckoning jobId will be required to work with a modal, or any kind of detail view
export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
        savedJobs {
            jobId
            dateApplied
            datePosted
            title
            company
            link
            location
            officeSetting
            pay
            source
            applicationStatus
            requirements
            benefits
        }
    }
}
`;