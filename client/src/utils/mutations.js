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

export const ADD_JOB = gql`
mutation addJob($jobData: JobData) {
    addJob(jobData: $jobData) {
        _id
        username
        savedJobs {
            title
            company
            appStatus
            salary
            link
        }
    }
}
`;