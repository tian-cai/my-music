import axios from "axios"
import service from "./../service/service.js"
import * as T from "./../../store/actionType.js"

export function getSongDetail(hash) {
  return dispatch => {
    axios
      .get(service.GET_SONG_DETAIL.replace("{hash}", hash))
      .then(response => {
        dispatch({
          type: T.GET_SONGDETAIL,
          data: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
