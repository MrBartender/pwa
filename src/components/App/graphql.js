export const getUserByUsername = `query SearchUsers($username: String!) {
  searchUser(filter: { username: { match: $username }}) {
    items {
      id
      name
      username
    }
  }
}`

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    username
  }
}`