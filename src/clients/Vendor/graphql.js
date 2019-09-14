export const getVendor = `query GetVendor($user: String!) {
  getVendor(user: $user) {
    user
    currentVendor {
      id
      semanticId
      name
      collections {
        nextToken
      }
      devices {
        nextToken
      }
    }
  }
}
`

export const createVendor = `mutation CreateVendor($input: CreateVendorInput!) {
  createVendor(input: $input) {
    user
    currentVendor {
      id
      semanticId
      name
      collections {
        nextToken
      }
      devices {
        nextToken
      }
    }
  }
}
`
