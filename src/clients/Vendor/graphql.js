export const getHost = `query GetHost($user: String!) {
  getHost(user: $user) {
    user
    vendor {
      id
      semanticId
    }
  }
}
`

export const createHost = `mutation CreateHost($input: CreateHostInput!) {
  createHost(input: $input) {
    user
    vendor {
      id
      semanticId
    }
  }
}`
