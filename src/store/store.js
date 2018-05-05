import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./rootReducer.js"

let initState = {
  recommend: [], //精选歌单
  newSong: {}, //今日新歌
  rankTypeList: [], //音乐排行榜分类列表
  billboardSong: {}, //音乐排行榜歌曲
  singerTypeList: [], //歌手类型列表
  singerList: [] //歌手列表
}
const logger = createLogger()
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunkMiddleware, logger)
)

export default store
