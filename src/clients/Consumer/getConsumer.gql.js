export default `query GetConsumer($id: ID!) {
  getConsumer(id: $id) {
    id
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
