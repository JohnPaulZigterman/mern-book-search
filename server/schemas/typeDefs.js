const { gql } =  require('apollo-server-express');
const typeDefs = gql`
    input BookInput {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
    }
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String!
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;