import { combineReducers } from "redux"
import {
  rankTypeList,
  billboardSong,
  recommendList
} from "./../modules/home/reducer.js"
import { songDetail } from "./../modules/song/reducer.js"
import { singerTypeList, singerList } from "./../modules/singer/reducer.js"

let rootReducer = combineReducers({
  recommendList,
  rankTypeList,
  billboardSong,
  songDetail,
  singerTypeList,
  singerList
})
export default rootReducer
