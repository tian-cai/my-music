import axios from "axios"
import service from "./../service/service.js"
import * as T from "./../../store/actionType.js"

export function getBanner() {
  return dispatch => {
    axios
      .get(service.GET_BANNER)
      .then(response => {
        dispatch({
          type: T.GET_NEWSONG,
          data: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function getRecommend() {
  return dispatch => {
    axios
      .get(service.GET_RECOMMEND)
      .then(response => {
        dispatch({
          type: T.GET_RECOMMEND_SONG_LIST,
          data: response.data.plist.list.info
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function getRecommendSonglist(id) {
  return dispatch => {
    axios
      .get(service.GET_SONGLIST.replace("{id}", id))
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
        dispatch({
          type: T.GET_RANKTYPE_LIST,
          data: response.data.rank.list
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function getBillboardSong(rankId) {
  return dispatch => {
    axios
      .get(service.GET_BILLBOARD_SONG.replace("{rankId}", rankId))
      .then(response => {
        console.log(response)
        dispatch({
          type: T.GET_BILLBOARD_SONG_LIST,
          data: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
