import axios from "axios"
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
        console.log(error)
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
        console.log(error)
      })
  }
}

export function getSingerInfo(singerId) {
  return dispatch => {
    axios
      .get(service.GET_SINGER_INFO.replace("{singerId}", singerId))
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
