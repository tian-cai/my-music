import React from "react"
import { connect } from "react-redux"
import { getSongDetail } from "./actionCreator.js"

class SongDetail extends React.Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
  }

  componentWillMount() {
    let hash = this.props.location.state.hash
    this.props.dispatch(getSongDetail(hash))
  }
  play() {
    let AudioDom = document.getElementsByTagName("audio")[0]
    AudioDom.play()
  }

  render() {
    let songDetail = this.props.songDetail
    return (
      <div>
        <span>{songDetail.songName}</span>
        <span onClick={this.play}>play</span>
        <audio src={songDetail.url}>play</audio>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { songDetail: state.songDetail }
}

export default connect(mapStateToProps)(SongDetail)
