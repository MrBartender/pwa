export const hostActions = {
  SET_HOST: 'SET_HOST',

  setHost: host => ({
    type: hostActions.SET_HOST,
    payload: {
      host,
    },
  }),
}

export function hostReducer(state = {}, { payload, type }) {
  switch (type) {
    case hostActions.SET_HOST:
      return Object.assign({}, state, payload.host)
    default:
      return state
  }
}
