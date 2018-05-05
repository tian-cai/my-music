import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getRankType, getBillboardSong } from "./../actionCreator.js"
import util from "./../../util/util.js"
import SongList from "./../component/SongList.jsx"
import "./../billboard.css"

class Billboard extends React.Component {
  constructor(props) {
    super(props)
    this.getSongList = this.getSongList.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getRankType())
  }

  getSongList(rankId, event) {
    if (event.target.tagName != "LI") {
      event.target = event.target.parentElement
    }
    util.curTab(event.target)
    this.props.dispatch(getBillboardSong(rankId))
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
            </div>
          )}
          <div className="main-right-bottom">
            <h3 className="title">歌曲列表</h3>
            <SongList songList={billboardSongList} />
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
