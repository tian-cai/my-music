import React from "react"
import { connect } from "react-redux"
import { Carousel } from "antd"
import { getBanner, getRecommend } from "./actionCreator.js"

class Recommend extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getBanner())
    this.props.dispatch(getRecommend())
  }

  render() {
    return (
      <div>
        <Carousel effect="fade" autoplay="true">
          <img src="http://imge.kugou.com/mobilebanner/20180413/20180413161235161702.jpg" />
          <img src="http://imge.kugou.com/mobilebanner/20180416/20180416184909252414.jpg" />
        </Carousel>
      </div>
    )
  }
}

export default connect()(Recommend)
