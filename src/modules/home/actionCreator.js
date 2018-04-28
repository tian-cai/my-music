import axios from "axios"
import service from "./../service/service.js"

export function getBanner() {
  return dispatch => {
    axios
      .get(service.GET_BANNER)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function getRankType() {
  return dispatch => {
    axios
      .get(service.GET_BILLBOARD_TYPE)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
