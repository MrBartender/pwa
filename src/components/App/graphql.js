export const getUserByUsername = `query GetUserByUsername($input: UserByUsernameInput!) {
  getUserByUsername(input: $input) {
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