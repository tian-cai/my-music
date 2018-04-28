import React from "react"
import { Route, Switch } from "react-router-dom"
import Recommend from "./../home/Recommend.jsx"
import Billboard from "./../home/Billboard.jsx"

class CustomRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Recommend} />
        <Route path="/billboard" component={Billboard} />
      </Switch>
    )
  }
}

export default CustomRoute
