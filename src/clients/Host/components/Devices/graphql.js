export const createDevice = `mutation CreateDevice($input: CreateDeviceInput!) {
  createDevice(input: $input) {
    id
    status
    name
    clientId
    pourCode
    calibration {
      formula
    }
    pumps {
      items {
        id
        semanticId
        status
        costByVolume
        volumeLeft
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
        authCode
      }
      nextToken
    }
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
