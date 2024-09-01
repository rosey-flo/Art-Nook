import { gql } from "@apollo/client"

export const GET_USER = gql`
query GetUser {
  getUser {
    message
    user {
      _id
      username
    }
  }
}`

export const GET_ALL_ARTWORK = gql `
query GetAllArtwork {
  getAllArtwork {
    _id
    artist {
      username
    }
    date
    description
    title
    imageUrl
  }
}
`

export const GET_USER_ARTWORK = gql`
query GetUserArtwork($getUserArtworkId: ID) {
  getUserArtwork(id: $getUserArtworkId) {
    date
    description
    imageUrl
    title
  }
}
`
