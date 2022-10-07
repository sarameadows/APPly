const {gql} = require('apollo-server-express');

// may need to adjust requirements and benefits to represent an array...?
    // will mark them as arrays for now but may need to change it

// no password for user in here because it should be inaccessible from the frontend
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    jobs: [Job]
    notes: [Note]
    links: [Link]
}

type Job {
    jobId: ID
    dateApplied: String
    datePosted: String
    title: String
    company: String
    link: String
    location: String
    officeSetting: String
    pay: String
    source: String
    applicationStatus: String
    requirements: [String]
    benefits: [String]
}

type Link {
    linkId: ID
    name: String
    link: String
}

type Note {
    noteId: ID
    title: String
    text: String
}

type Auth {
    token: ID
    user: User
}

input JobData {
    jobId: ID!
    dateApplied: String
    datePosted: String
    title: String
    company: String
    link: String
    location: String
    officeSetting: String
    pay: String
    source: String
    applicationStatus: String
    requirements: [String]
    benefits: [String]
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobData: JobData!): User
    addLink(name: String!, link: String!): User
    addNote(title: String!, text: String!): User
}
`;

module.exports = typeDefs;