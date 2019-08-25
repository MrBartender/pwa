export const getConsumer = `query GetConsumer($user: String!) {
  getConsumer(user: $user) {
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

export const createConsumer = `mutation CreateConsumer($input: CreateConsumerInput!) {
  createConsumer(input: $input) {
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
