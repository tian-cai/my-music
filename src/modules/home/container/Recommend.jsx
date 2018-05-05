import React from "react"
import { connect } from "react-redux"
import { Carousel } from "antd"
import { getBanner, getRecommend } from "./../actionCreator.js"
import util from "./../../util/util.js"
import SongList from "./../component/SongList.jsx"

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
          <SongList songList={newSong.data} />
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
                      <p className="text-overflow" title={ele.specialname}>
                        {ele.specialname}
                      </p>
                      <span
                        title={ele.username}
                        className="float-left song-title-author text-overflow"
                      >
                        {ele.username}
                      </span>
                      <span
                        title={util.formatTime(ele.publishtime)}
                        className="float-right song-title-time text-overflow"
                      >
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
