import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation LoginUser($email: String, $password: String) {
  loginUser(email: $email, password: $password) {
    message
    user {
      _id
      username
    }
  }
}`

export const REGISTER_USER = gql`
mutation RegisterUser($username: String, $email: String, $password: String) {
  registerUser(username: $username, email: $email, password: $password) {
    message
    user {
      _id
      username
    }
  }
}`

export const LOGOUT_USER = gql`
mutation LogoutUser {
  logoutUser {
    message
  }
}`

export const ADD_ARTWORK = gql`
	mutation AddArtwork($title: String!, $description: String, $imageUrl: String!, $date: String, $artist: String) {
  addArtwork(title: $title, description: $description, imageUrl: $imageUrl, date: $date, artist: $artist) {
    _id
    date
    description
    imageUrl
    title
    artist {
      _id
      email
      username
    }
  }
}
`

export const DELETE_ARTWORK = gql`
	mutation DeleteArtwork($deleteArtworkId: ID!) {
  deleteArtwork(id: $deleteArtworkId) {
    message
  }
}
`