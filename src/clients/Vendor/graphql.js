export const getHost = `query GetHost($user: String!) {
  getHost(user: $user) {
    user
    vendor {
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
      hosts {
        items {
          user
        }
      }
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
      hosts {
        items {
          user
        }
      }
    }
  }
}`
