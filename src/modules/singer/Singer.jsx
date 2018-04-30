import React from "react"
import { connect } from "react-redux"
import { getSingerType, getSingerList } from "./actionCreator.js"

class Singer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getSingerType())
  }
  getSingerList(classId) {
    this.props.dispatch(getSingerList(classId))
  }

  getSingerInfo(singerId) {
    let { history } = this.props
    history.push(`/singer/${singerId}`)
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
                  key={ele.classid}
                  onClick={this.getSingerList.bind(this, ele.classid)}
                >
                  <img src={ele.imgurl} />
                  <span>{ele.classname}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <ul>
            {singerList.map(ele => {
              return (
                <li
                  key={ele.singerid}
                  onClick={this.getSingerInfo.bind(this, ele.singerid)}
                >
                  <img src={ele.imgurl.replace("{size}", 150)} />
                  <span>{ele.singername}</span>
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
