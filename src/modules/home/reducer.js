export function rankTypeList(state = [], action) {
  switch (action.type) {
    case "GET_RANKTYPE_LIST":
      return [...action.data]
    default:
      return state
  }
}

export function billboardSong(state = {}, action) {
  switch (action.type) {
    case "GET_BILLBOARD_SONG_LIST":
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export function recommendList(state = [], action) {
  switch (action.type) {
    case "GET_RECOMMEND_SONG_LIST":
      return [...action.data]
    default:
      return state
  }
}
