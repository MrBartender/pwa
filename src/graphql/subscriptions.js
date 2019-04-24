// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateVendor = `subscription OnCreateVendor {
  onCreateVendor {
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
export const onUpdateVendor = `subscription OnUpdateVendor {
  onUpdateVendor {
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
export const onDeleteVendor = `subscription OnDeleteVendor {
  onDeleteVendor {
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
export const onCreateCollection = `subscription OnCreateCollection {
  onCreateCollection {
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
export const onUpdateCollection = `subscription OnUpdateCollection {
  onUpdateCollection {
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
export const onDeleteCollection = `subscription OnDeleteCollection {
  onDeleteCollection {
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
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
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
export const onUpdateRating = `subscription OnUpdateRating {
  onUpdateRating {
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
export const onDeleteRating = `subscription OnDeleteRating {
  onDeleteRating {
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
export const onCreateRecipe = `subscription OnCreateRecipe {
  onCreateRecipe {
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
export const onUpdateRecipe = `subscription OnUpdateRecipe {
  onUpdateRecipe {
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
export const onDeleteRecipe = `subscription OnDeleteRecipe {
  onDeleteRecipe {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
export const onCreateIngredient = `subscription OnCreateIngredient {
  onCreateIngredient {
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
export const onUpdateIngredient = `subscription OnUpdateIngredient {
  onUpdateIngredient {
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
export const onDeleteIngredient = `subscription OnDeleteIngredient {
  onDeleteIngredient {
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
export const onCreateDevice = `subscription OnCreateDevice {
  onCreateDevice {
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
export const onUpdateDevice = `subscription OnUpdateDevice {
  onUpdateDevice {
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
export const onDeleteDevice = `subscription OnDeleteDevice {
  onDeleteDevice {
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
export const onCreatePump = `subscription OnCreatePump {
  onCreatePump {
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
export const onUpdatePump = `subscription OnUpdatePump {
  onUpdatePump {
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
export const onDeletePump = `subscription OnDeletePump {
  onDeletePump {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
