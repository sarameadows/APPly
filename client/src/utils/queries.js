import {gql} from '@apollo/client';

// i'm reckoning jobId will be required to work with a modal, or any kind of detail view
export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
        jobs {
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

// i'd recommend using GET_NOTES and GET_LINKS with useLazyQuery
export const GET_NOTES = gql`
query getNotes {
    getNotes {
        _id
        username
        email
        notes {
            noteId
            title
            text
        }
    }
}
`;

export const GET_LINKS = gql`
query getLinks {
    getLinks {
        _id
        username
        email
        links {
            linkId
            name
            link
        }
    }
}
`;