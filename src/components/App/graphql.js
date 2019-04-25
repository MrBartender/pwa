export const getUserByUsername = `query GetUserByUsername($username: String!) {
  getUserByUsername(username: $username) {
    id
    name
  }
}`

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    username
  }
}`