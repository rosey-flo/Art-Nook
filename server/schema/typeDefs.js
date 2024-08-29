const gql = String.raw;

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }


  type Response {
    message: String
  }

  type AuthResponse {
    message: String
    user: User
  }

  type Query {
    getUser: AuthResponse
    
  }

  type Mutation {
    # User Mutations
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse

    
  }
`;

module.exports = typeDefs;