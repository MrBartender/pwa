export const getUser = `query GetUserFromUsername($username: String!) {
  getUser(username: $username) {
    items{
      id
      name
      description
    }
  }
}`