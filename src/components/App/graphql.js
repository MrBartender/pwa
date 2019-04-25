export const getUserByUsername = `query GetUser($username: String!) {
  getUser(username: $username) {
    id
    name
    username
  }
}`

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    username
  }
}`