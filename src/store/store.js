import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./rootReducer.js"

let initState = {
  recommend: [],
  newSong: {},
  rankTypeList: [], //音乐排行榜分类列表
  billboardSong: {}, //音乐排行榜歌曲
  songDetail: {},
  singerTypeList: [],
  singerList: []
}
const logger = createLogger()
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunkMiddleware, logger)
)

export default store
