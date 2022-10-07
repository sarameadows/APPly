// import the gwl tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    input jobInput {
        dateApplied
        datePosted:
        title: String
        company: String
        link: String
        location: String
        officeSetting: String
        pay: String
        source: String
        requirements: String
        applicationStatus: String
        benefits: String
        pay: String
    }
    type User {
        _id: ID
        username: String
        email: String
        jobs: [Job]
    }
    type Job {
        
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        jobs: [Job]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addJob(input: jobInput): User
        addNote(title: String, text: String): User
        addLink(name: String, link: String): User
    }
`;

// export the typeDefs
module.exports = typeDefs;