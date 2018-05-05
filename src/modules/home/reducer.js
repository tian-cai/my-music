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

export function recommend(state = [], action) {
  switch (action.type) {
    case "GET_RECOMMEND_SONG_LIST":
      return [...action.data]
    default:
      return state
  }
}
export function newSong(state = {}, action) {
  switch (action.type) {
    case "GET_NEWSONG":
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
