import React from "react"
import { connect } from "react-redux"
import { Carousel } from "antd"
import { getBanner, getRecommend } from "./actionCreator.js"
import util from "./../util/util.js"

class Recommend extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getBanner())
    this.props.dispatch(getRecommend())
  }
  getSongSheet(specialid) {
    let otherWindow = window.open(
      `http://www.kugou.com/yy/special/single/${specialid}.html`
    )
    otherWindow.opener = null
  }

  render() {
    let { recommend, newSong } = this.props
    return (
      <div>
        <Carousel effect="fade" autoplay="true">
          {newSong.banner &&
            newSong.banner.map(ele => {
              return <img src={ele.imgurl} title={ele.title} key={ele.id} />
            })}
        </Carousel>
        <div className="block">
          <h3 className="title">今日新歌</h3>
          <ul className="songlist">
            {newSong.data &&
              newSong.data.map((ele, index) => {
                return (
                  <li key={ele.audio_id} className="song">
                    <span className="song-key">{index + 1}</span>
                    <span className="song-filename">{ele.filename}</span>
                    <span className="song-duration">
                      {util.changeSecondToMinute(ele.duration)}
                    </span>
                  </li>
                )
              })}
          </ul>
        </div>
        <div className="block">
          <h3 className="title">精选歌单</h3>
          <ul className="songlist">
            {recommend &&
              recommend.map((ele, index) => {
                return (
                  <li
                    key={ele.specialid}
                    title={ele.specialname}
                    className="song-sheet"
                    onClick={this.getSongSheet.bind(this, ele.specialid)}
                  >
                    <img src={ele.imgurl.replace("{size}", 480)} />
                    <div className="song-sheet-title">
                      <p>{ele.specialname}</p>
                      <span>{ele.username}</span>
                      <span className="float-right">
                        {util.formatTime(ele.publishtime)}
                      </span>
                    </div>
                    <span className="song-sheet-count">{ele.playcount}</span>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    recommend: state.recommend,
    newSong: state.newSong
  }
}

export default connect(mapStateToProps)(Recommend)
