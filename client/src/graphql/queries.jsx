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

export const GET_ALL_ARTWORK = gql`
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
    liked
  }
}
`

export const GET_USER_ARTWORK = gql`
query GetUserArtwork($getUserArtworkId: ID) {
  getUserArtwork(id: $getUserArtworkId) {
    _id
    date
    description
    imageUrl
    title
  }
}
`

export const GET_USER_FAVORITES = gql`
query GetUserFavorites {
  getUserFavorites {
    _id
    date
    description
    imageUrl
    title
  }
}
`
