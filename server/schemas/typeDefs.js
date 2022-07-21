const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {

    }
    
    type Mutation {
        login()
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: ID
        authors: [""]
        description: String
        title: String
        image:
        link: String
    }
    
    type Auth {
        token: 
        user: 
    }`;
