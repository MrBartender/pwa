export const consumerActions = {
  SET_CONSUMER: 'SET_CONSUMER',

  setConsumer: consumer => ({
    type: consumerActions.SET_CONSUMER,
    payload: {
      consumer,
    },
  }),
}

export function consumerReducer(state = {}, { payload, type }) {
  switch (type) {
    case consumerActions.SET_CONSUMER:
      return Object.assign({}, state, payload.consumer)
    default:
      return state
  }
}
