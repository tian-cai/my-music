import React from "react"
import { Row, Col, Layout } from "antd"
import "./style/reset.css"
import "./style/common.css"
import "./style/app.css"
import BackUp from "./modules/common/BackUp.jsx"
import CustomHead from "./modules/home/CustomHead.jsx"
import CustomRoute from "./modules/route/CustomRoute.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout className="layout">
        <Row>
          <Col span={18} offset={3}>
            <CustomHead />
            <div className="main">
              <CustomRoute />
            </div>
          </Col>
        </Row>
        <BackUp />
      </Layout>
    )
  }
}

export default App
