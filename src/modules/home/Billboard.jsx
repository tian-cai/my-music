import React from "react"
import { connect } from "react-redux"
import { getRankType } from "./actionCreator.js"

class Billboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getRankType())
  }

  render() {
    return (
      <div>
        <div>212</div>
        <div>65</div>
      </div>
    )
  }
}

export default connect()(Billboard)
