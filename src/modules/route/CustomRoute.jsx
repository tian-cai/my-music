import React from "react"
import { Route, Switch } from "react-router-dom"
import Recommend from "./../home/Recommend.jsx"
import Billboard from "./../home/Billboard.jsx"
import SongDetail from "./../song/SongDetail.jsx"
import Singer from "./../singer/Singer.jsx"
import SingerDetail from "./../singer/SingerDetail.jsx"

class CustomRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Recommend} />
        <Route path="/billboard" component={Billboard} />
        <Route path="/song/:songId" component={SongDetail} />
        <Route exact path="/singer" component={Singer} />
        <Route path="/singer/:singerId" component={SingerDetail} />
      </Switch>
    )
  }
}

export default CustomRoute
