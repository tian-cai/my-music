import axios from "axios"
import { message } from "antd"
import service from "./../service/service.js"
import * as T from "./../../store/actionType.js"

export function getSingerType() {
  return dispatch => {
    axios
      .get(service.GET_SINGER_TYPE)
      .then(response => {
        dispatch({
          type: T.GET_SINGER_TYPE,
          data: response.data.list
        })
      })
      .catch(error => {
        message.error(error || "服务器错误")
      })
  }
}

export function getSingerList(classId) {
  return dispatch => {
    axios
      .get(service.GET_SINGER_LIST.replace("{classId}", classId))
      .then(response => {
        dispatch({
          type: T.GET_SINGER_LIST,
          data: response.data.singers.list.info
        })
      })
      .catch(error => {
        message.error(error || "服务器错误")
      })
  }
}
