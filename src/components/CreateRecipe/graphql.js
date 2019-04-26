export const createRecipe = `mutation CreateRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
    id
    name
    price
    description
    instructions
  }
}`;

export const createComponent = `mutation CreateComponent($input: CreateComponentInput!) {
  createComponent(input: $input) {
    id
  }
}`

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
    }
  }
}`