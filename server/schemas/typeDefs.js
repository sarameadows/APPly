const {gql} = require('apollo-server-express');

// maybe the username is just displayed for the user to make the site feel personal?
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    jobsSaved: [Job]
}

type Job {
    _id: ID
    dateApplied: String
    datePosted: String
    title: String
    company: String
    appStatus: String
    salary: Integer
    isRemote: Boolean
    link: String
}

input JobData {
    dateApplied: String
    datePosted: String
    title: String
    company: String
    appStatus: String
    salary: Integer
    isRemote: Boolean
    link: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobData: JobData!): User
}
`;
// no password for user in here because it should be inaccessible from the frontend

// appStatus = not yet applied, waiting for reply, etc.
// could change appStatus, isRemote to use enum values (has to be one of a list)

module.exports = typeDefs;