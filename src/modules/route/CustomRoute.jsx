import React from "react"
import { Route, Switch } from "react-router-dom"
import Recommend from "./../home/container/Recommend.jsx"
let Singer, Billboard
import("./../home/container/Billboard.jsx").then(module => {
  Billboard = module.default
})
import("./../singer/Singer.jsx").then(module => {
  Singer = module.default
})

class CustomRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Recommend} />
        <Route path="/billboard" component={Billboard} />
        <Route exact path="/singer" component={Singer} />
      </Switch>
    )
  }
}

export default CustomRoute
