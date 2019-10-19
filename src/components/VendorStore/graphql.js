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
