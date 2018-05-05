import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getRankType, getBillboardSong } from "./actionCreator.js"
import util from "./../util/util.js"
import "./billboard.css"

class Billboard extends React.Component {
  constructor(props) {
    super(props)
    this.getSongList = this.getSongList.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getRankType())
  }

  getSongList(rankId) {
    this.props.dispatch(getBillboardSong(rankId))
  }
  getSongDetail(song) {
    let { history, location } = this.props
    history.push(`/song/${song.audio_id}`, { hash: song.hash })
  }

  render() {
    let rankTypeList = this.props.rankTypeList
    let billboardSong = this.props.billboardSong
    let billboardSongInfo = billboardSong.info
    let billboardSongList = billboardSong.songs && billboardSong.songs.list
    return (
      <div>
        <div className="float-left main-left">
          <ul>
            {rankTypeList.map(ele => {
              return (
                <li
                  className="rank-type"
                  key={ele.id}
                  onClick={this.getSongList.bind(this, ele.rankid)}
                  title={ele.rankname}
                >
                  <img
                    src={ele.imgurl.replace("{size}", 150)}
                    className="img40 mr10 float-left"
                  />
                  <h4>{ele.rankname}</h4>
                  <span className="font14 color999">
                    {ele.update_frequency}更新
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="main-right">
          {billboardSongInfo && (
            <div className="main-right-top">
              <div className="img-border float-left mr20">
                <img
                  src={billboardSongInfo.banner7url.replace("{size}", 150)}
                />
              </div>
              <h2 className="h2">{billboardSongInfo.rankname}</h2>
              <p>
                <button>播放</button>
              </p>
            </div>
          )}
          <div className="main-right-bottom">
            <h3 className="title">歌曲列表</h3>
            <ul className="songlist">
              {billboardSongList &&
                billboardSongList.map((ele, index) => {
                  return (
                    <li key={ele.audio_id} className="song">
                      <span className="song-key">{index + 1}</span>
                      <span
                        className="song-filename"
                        onClick={this.getSongDetail.bind(this, ele)}
                      >
                        {ele.filename}
                      </span>
                      <span className="song-duration">
                        {util.changeSecondToMinute(ele.duration)}
                      </span>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rankTypeList: state.rankTypeList,
    billboardSong: state.billboardSong
  }
}

export default connect(mapStateToProps)(Billboard)
