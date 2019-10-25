export const getHost = `query GetHost($user: String!) {
  getHost(user: $user) {
    user
    vendorsOwned {
      items {
        id
        semanticId
        name
        website
        currentConsumers {
          items {
            user
          }
          nextToken
        }
        collections {
          items {
            id
            name
          }
          nextToken
        }
        devices {
          items {
            id
            status
            name
            clientId
            pourCode
          }
          nextToken
        }
        orders {
          items {
            id
            cognitoIdentityId
            status
            price
          }
          nextToken
        }
      }
      nextToken
    }
  }
}
`

export const createHost = `mutation CreateHost($input: CreateHostInput!) {
  createHost(input: $input) {
    user
    vendorsOwned {
      items {
        id
        semanticId
        name
        website
        currentConsumers {
          items {
            user
          }
          nextToken
        }
        collections {
          items {
            id
            name
          }
          nextToken
        }
        devices {
          items {
            id
            status
            name
            clientId
            pourCode
          }
          nextToken
        }
        orders {
          items {
            id
            cognitoIdentityId
            status
            price
          }
          nextToken
        }
      }
      nextToken
    }
  }
}`
