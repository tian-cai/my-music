import React from "react"
import { connect } from "react-redux"
import { getSingerType, getSingerList } from "./actionCreator.js"
import util from "./../util/util.js"

class Singer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getSingerType())
  }

  getSingerList(classId, event) {
    if (event.target.tagName != "LI") {
      event.target = event.target.parentElement
    }
    util.curTab(event.target)
    this.props.dispatch(getSingerList(classId))
  }

  getSingerInfo(singerId) {
    let otherWindow = window.open(
      `http://www.kugou.com/yy/singer/home/${singerId}.html`
    )
    otherWindow.opener = null
  }

  render() {
    let singerTypeList = this.props.singerTypeList
    let singerList = this.props.singerList
    return (
      <div>
        <div className="float-left main-left">
          <ul>
            {singerTypeList.map(ele => {
              return (
                <li
                  className="rank-type"
                  key={ele.classid}
                  onClick={this.getSingerList.bind(this, ele.classid)}
                >
                  <img src={ele.imgurl} className="img40 mr10" />
                  <span>{ele.classname}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <ul className="singerlist">
            {singerList.map(ele => {
              return (
                <li
                  className="singer float-left"
                  key={ele.singerid}
                  onClick={this.getSingerInfo.bind(this, ele.singerid)}
                >
                  <img
                    src={ele.imgurl.replace("{size}", 150)}
                    className="mb10"
                  />
                  <h4 className="text-center">{ele.singername}</h4>
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
  return { singerTypeList: state.singerTypeList, singerList: state.singerList }
}

export default connect(mapStateToProps)(Singer)
