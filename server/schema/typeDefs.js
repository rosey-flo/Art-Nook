const gql = String.raw;

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    favorites: [Artwork]  # Added field
  }

  type Artwork {
    _id: ID
    title: String
    description: String
    imageUrl: String
    artist: User
    date: String
    liked: Boolean
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
    getUserArtwork(id: ID): [Artwork]
    getAllArtwork: [Artwork]
    getUserFavorites: [Artwork]  # Added query
  }

  type Mutation {
    # User Mutations
    registerUser(username: String, email: String, password: String): AuthResponse
    loginUser(email: String, password: String): AuthResponse
    logoutUser: AuthResponse
    updateUser(id: ID, username: String, email: String, password: String): User

    # # Artwork Mutations

    addArtwork(title: String!, description: String, imageUrl: String!, artist: String, date: String): Artwork
    updateArtwork(id: ID, title: String, description: String, imageUrl: String, date: String): Artwork
    deleteArtwork(id: ID): Response

    # Favorites Mutations
    toggleFavorite(artworkId: ID!): Response  # Added mutation
    

  }
`;

module.exports = typeDefs;