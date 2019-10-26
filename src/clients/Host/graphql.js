export const getHost = `query GetHost($user: String!) {
  getHost(user: $user) {
    user
    vendorsOwned {
      items {
        name
        semanticId
      }
    }
  }
}
`

export const createHost = `mutation CreateHost($input: CreateHostInput!) {
  createHost(input: $input) {
    user
    vendorsOwned {
      items {
        name
        semanticId
      }
    }
  }
}`
