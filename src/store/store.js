import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./rootReducer.js"

let initState = {}
const logger = createLogger()
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunkMiddleware, logger)
)

export default store
