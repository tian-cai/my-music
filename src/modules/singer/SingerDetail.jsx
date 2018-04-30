import React from "react"
import { connect } from "react-redux"
import { getSingerInfo } from "./actionCreator.js"

class SingerDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { match, dispatch } = this.props
    let singerId = match.params.singerId
    dispatch(getSingerInfo(singerId))
  }

  render() {
    return 5616516
  }
}

export default connect()(SingerDetail)
