import {gql} from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

// i think we'll need to run GET_ME after any addition to the user's arrays,
// so i'm not going to return all the data at once here
export const ADD_JOB = gql`
mutation addJob($jobData: JobData!) {
    addJob(jobData: $jobData) {
        _id
        username
        jobs {
            jobId
            title
            company
        }
    }
}
`;

export const ADD_LINK = gql`
mutation addLink($name: String!, $link: String!) {
    addLink(name: $name, link: $link) {
        _id
        username
        links {
            linkId
            name
            link
        }
    }
}
`;

export const ADD_NOTE = gql`
mutation addNote($title: String, $text: String!) {
    addNote(title: $title, text: $text) {
        _id
        username
        notes {
            noteId
            title
            text
        }
    }
}
`;

export const REMOVE_JOB = gql`
mutation removeJob($jobId: ID!) {
    removeJob(jobId: $jobId) {
        _id
        username
        jobs {
            jobId
            title
            company
        }
    }
}
`;

export const REMOVE_LINK = gql`
mutation removeLink($linkId: ID!) {
    removeLink(linkId: $linkId) {
        _id
        username
        links {
            linkId
            name
            link
        }
    }
}
`;

export const REMOVE_NOTE = gql`
mutation removeNote($noteId: ID!) {
    removeNote(noteId: $noteId) {
        _id
        username
        notes {
            noteId
            title
            text
        }
    }
}
`;