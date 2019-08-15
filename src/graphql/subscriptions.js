// eslint-disable
// this is an auto generated file. This will be overwritten

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
        glassType
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
        glassType
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
        glassType
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
export const onCreateComponent = `subscription OnCreateComponent {
  onCreateComponent {
    id
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
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
    ratio
    recipe {
      id
      name
      price
      description
      instructions
      glassType
      components {
        nextToken
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComponent = `subscription OnUpdateComponent {
  onUpdateComponent {
    id
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
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
    ratio
    recipe {
      id
      name
      price
      description
      instructions
      glassType
      components {
        nextToken
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComponent = `subscription OnDeleteComponent {
  onDeleteComponent {
    id
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
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
    ratio
    recipe {
      id
      name
      price
      description
      instructions
      glassType
      components {
        nextToken
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const onCreateConsumer = `subscription OnCreateConsumer {
  onCreateConsumer {
    user
    currentVendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
export const onUpdateConsumer = `subscription OnUpdateConsumer {
  onUpdateConsumer {
    user
    currentVendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
export const onDeleteConsumer = `subscription OnDeleteConsumer {
  onDeleteConsumer {
    user
    currentVendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
      currentConsumers {
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
      currentConsumers {
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
      currentConsumers {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
    id
    status
    price
    cost
    auth_code
    consumer {
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
    }
    vendor {
      id
      semanticId
      name
      website
      currentConsumers {
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
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
    id
    reviewer {
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
      user
      currentVendor {
        id
        semanticId
        name
        website
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
      glassType
      components {
        nextToken
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
    glassType
    images {
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
      items {
        id
        ratio
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
    glassType
    images {
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
      items {
        id
        ratio
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
    glassType
    images {
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
      items {
        id
        ratio
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
