import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        emails: String
    }

    type Query {
        friend: Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        emails: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;
