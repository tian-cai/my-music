import React from "react"
import { Link } from "react-router-dom"
import logo from "./../../assets/logo.png"

class CustomHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="head">
        <Link to={"/"} className="float-left ml20">
          <img src={logo} />
        </Link>
        <Link to={"/"} className="float-left ml20">
          首页
        </Link>
        <Link to={"/billboard"} className="float-left ml20">
          排行榜
        </Link>
        <Link to={"/singer"} className="float-left ml20">
          歌手
        </Link>
      </div>
    )
  }
}

export default CustomHead
