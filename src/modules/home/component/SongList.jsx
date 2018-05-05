import React from "react"
import util from "./../../util/util.js"

class SongList extends React.Component {
  constructor(props) {
    super(props)
  }

  playSong(hash, album_id) {
    let otherWindow = window.open(
      `http://www.kugou.com/song/#hash=${hash}&album_id=${album_id}`
    )
    otherWindow.opener = null
  }

  render() {
    let songList = this.props.songList
    return (
      <ul className="songlist">
        {songList &&
          songList.map((ele, index) => {
            return (
              <li
                key={ele.audio_id}
                className="song"
                onClick={this.playSong.bind(this, ele.hash, ele.album_id)}
              >
                <span className="song-key">{index + 1}</span>
                <span className="song-filename">{ele.filename}</span>
                <span className="song-duration">
                  {util.changeSecondToMinute(ele.duration)}
                </span>
              </li>
            )
          })}
      </ul>
    )
  }
}

export default SongList
