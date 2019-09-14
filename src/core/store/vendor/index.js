export const vendorActions = {
  SET_VENDOR: 'SET_VENDOR',

  setVendor: vendor => ({
    type: vendorActions.SET_VENDOR,
    payload: {
      vendor,
    },
  }),
}

export function vendorReducer(state = {}, { payload, type }) {
  switch (type) {
    case vendorActions.SET_VENDOR:
      return Object.assign({}, state, payload.vendor)
    default:
      return state
  }
}
