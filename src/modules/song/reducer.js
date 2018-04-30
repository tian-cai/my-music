export function songDetail(state = {}, action) {
  switch (action.type) {
    case "GET_SONGDETAIL":
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
