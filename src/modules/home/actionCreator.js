import axios from "axios"
import { message } from "antd"
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
        message.error(error || "服务器错误")
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
        message.error(error || "服务器错误")
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
        message.error(error || "服务器错误")
      })
  }
}

export function getBillboardSong(rankId) {
  return dispatch => {
    axios
      .get(service.GET_BILLBOARD_SONG.replace("{rankId}", rankId))
      .then(response => {
        dispatch({
          type: T.GET_BILLBOARD_SONG_LIST,
          data: response.data
        })
      })
      .catch(error => {
        message.error(error || "服务器错误")
      })
  }
}
