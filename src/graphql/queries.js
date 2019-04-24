// eslint-disable
// this is an auto generated file. This will be overwritten

export const getVendor = `query GetVendor($id: ID!) {
  getVendor(id: $id) {
    id
    semanticId
    name
    website
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    currentUsers {
      items {
        id
        name
        username
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
        semantic_id
        pourCode
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
        auth_code
      }
      nextToken
    }
  }
}
`;
export const listVendors = `query ListVendors(
  $filter: ModelVendorFilterInput
  $limit: Int
  $nextToken: String
) {
  listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCollection = `query GetCollection($id: ID!) {
  getCollection(id: $id) {
    id
    name
    drinks {
      items {
        id
        name
        price
        description
        instructions
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const listCollections = `query ListCollections(
  $filter: ModelCollectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
    nextToken
  }
}
`;
export const getRating = `query GetRating($id: ID!) {
  getRating(id: $id) {
    id
    reviewer {
      id
      name
      username
      currentVendor {
        id
        semanticId
        name
        website
      }
      previousVendors {
        nextToken
      }
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    score
    comment
  }
}
`;
export const listRatings = `query ListRatings(
  $filter: ModelRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reviewer {
        id
        name
        username
      }
      recipe {
        id
        name
        price
        description
        instructions
      }
      score
      comment
    }
    nextToken
  }
}
`;
export const getRecipe = `query GetRecipe($id: ID!) {
  getRecipe(id: $id) {
    id
    name
    price
    description
    instructions
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    components {
      ingredient {
        id
        name
        alcoholic
      }
      product {
        id
        name
        proof
        volume
      }
      ratio
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
        auth_code
      }
      nextToken
    }
  }
}
`;
export const listRecipes = `query ListRecipes(
  $filter: ModelRecipeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    proof
    volume
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    nextToken
  }
}
`;
export const getIngredient = `query GetIngredient($id: ID!) {
  getIngredient(id: $id) {
    id
    name
    alcoholic
    products {
      items {
        id
        name
        proof
        volume
      }
      nextToken
    }
  }
}
`;
export const listIngredients = `query ListIngredients(
  $filter: ModelIngredientFilterInput
  $limit: Int
  $nextToken: String
) {
  listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getDevice = `query GetDevice($id: ID!) {
  getDevice(id: $id) {
    id
    status
    name
    semantic_id
    pourCode
    vendor {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    calibration {
      formula
    }
    pumps {
      items {
        id
        semantic_id
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
        auth_code
      }
      nextToken
    }
    availableRecipes {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
  }
}
`;
export const listDevices = `query ListDevices(
  $filter: ModelDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getPump = `query GetPump($id: ID!) {
  getPump(id: $id) {
    id
    semantic_id
    status
    product {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    costByVolume
    volumeLeft
    calibration {
      weights
    }
  }
}
`;
export const listPumps = `query ListPumps(
  $filter: ModelPumpFilterInput
  $limit: Int
  $nextToken: String
) {
  listPumps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      semantic_id
      status
      product {
        id
        name
        proof
        volume
      }
      costByVolume
      volumeLeft
      calibration {
        weights
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    username
    currentVendor {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    previousVendors {
      items {
        id
        semanticId
        name
        website
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
        auth_code
      }
      nextToken
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      username
      currentVendor {
        id
        semanticId
        name
        website
      }
      previousVendors {
        nextToken
      }
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    status
    price
    cost
    auth_code
    consumer {
      id
      name
      username
      currentVendor {
        id
        semanticId
        name
        website
      }
      previousVendors {
        nextToken
      }
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    device {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    vendor {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    timestamps {
      ordered
      paid
      poured
    }
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      price
      cost
      auth_code
      consumer {
        id
        name
        username
      }
      recipe {
        id
        name
        price
        description
        instructions
      }
      device {
        id
        status
        name
        semantic_id
        pourCode
      }
      vendor {
        id
        semanticId
        name
        website
      }
      timestamps {
        ordered
        paid
        poured
      }
    }
    nextToken
  }
}
`;
export const searchVendors = `query SearchVendors(
  $filter: SearchableVendorFilterInput
  $sort: SearchableVendorSortInput
  $limit: Int
  $nextToken: Int
) {
  searchVendors(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      semanticId
      name
      website
      currentUsers {
        nextToken
      }
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchCollections = `query SearchCollections(
  $filter: SearchableCollectionFilterInput
  $sort: SearchableCollectionSortInput
  $limit: Int
  $nextToken: Int
) {
  searchCollections(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
    nextToken
  }
}
`;
export const searchRecipes = `query SearchRecipes(
  $filter: SearchableRecipeFilterInput
  $sort: SearchableRecipeSortInput
  $limit: Int
  $nextToken: Int
) {
  searchRecipes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchProducts = `query SearchProducts(
  $filter: SearchableProductFilterInput
  $sort: SearchableProductSortInput
  $limit: Int
  $nextToken: Int
) {
  searchProducts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    nextToken
  }
}
`;
export const searchIngredients = `query SearchIngredients(
  $filter: SearchableIngredientFilterInput
  $sort: SearchableIngredientSortInput
  $limit: Int
  $nextToken: Int
) {
  searchIngredients(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchDevices = `query SearchDevices(
  $filter: SearchableDeviceFilterInput
  $sort: SearchableDeviceSortInput
  $limit: Int
  $nextToken: Int
) {
  searchDevices(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    nextToken
  }
}
`;
