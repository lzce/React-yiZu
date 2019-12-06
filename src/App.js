import React from 'react'
// 导入路由
import { Route, Redirect } from 'react-router-dom'

// 导入子组件, 带tabbar 的 home 和 不带tabbar的 CityList
import Home from './pages/Home'
import CityList from './pages/CityLity'

export default class App extends React.Component {
  state = {}
  render() {
    return (
      <div className="app">
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </div>
    )
  }
}
