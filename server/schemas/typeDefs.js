const { gql } = require('apollo-server-express');

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
    _id: ID
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
    requirements: String
    benefits: String
  }

  type Link {
    _id: ID
    name: String
    link: String
  }

  type Note {
    _id: ID
    title: String
    text: String
  }

  type Auth {
    token: ID
    user: User
  }

  input JobData {
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
    requirements: String
    benefits: String
  }

  type Query {
    me: User
    getNotes: User
    getLinks: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobData: JobData!): User
    addLink(name: String!, link: String!): User
    addNote(title: String!, text: String!): User
    removeJob(jobId: ID!): User
    removeLink(linkId: ID!): User
    removeNote(noteId: ID!): User
    updateJob(jobId: ID!, jobData: JobData!): User
  }
`;

module.exports = typeDefs;
