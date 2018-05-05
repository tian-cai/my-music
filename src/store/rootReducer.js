import { combineReducers } from "redux"
import {
  rankTypeList,
  billboardSong,
  recommend,
  newSong
} from "./../modules/home/reducer.js"
import { singerTypeList, singerList } from "./../modules/singer/reducer.js"

let rootReducer = combineReducers({
  recommend,
  newSong,
  rankTypeList,
  billboardSong,
  singerTypeList,
  singerList
})
export default rootReducer
