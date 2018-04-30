export function singerTypeList(state = [], action) {
  switch (action.type) {
    case "GET_SINGER_TYPE":
      return [...action.data]
    default:
      return state
  }
}

export function singerList(state = [], action) {
  switch (action.type) {
    case "GET_SINGER_LIST":
      return [...action.data]
    default:
      return state
  }
}
