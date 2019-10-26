export const createVendor = `mutation CreateVendor($input: CreateVendorInput!) {
  createVendor(input: $input) {
    id
    semanticId
    name
    website
    owner {
      user
    }
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
}
`
