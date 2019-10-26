export const getHost = `query GetHost($id: ID!) {
  getHost(id: $id) {
    id
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
    id
    vendorsOwned {
      items {
        name
        semanticId
      }
    }
  }
}`
