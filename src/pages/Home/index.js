import React from 'react'
import { Route } from 'react-router-dom'
// 引入 antd-mobile
import { TabBar } from 'antd-mobile'
import './index.scss'

// 导入home子组件
import Index from '../Index'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'

// tarbar 数据
const tarbarList = [
  {
    id: 1,
    icon: 'icon-ind',
    title: '首页',
    path: '/home/index'
  },
  {
    id: 2,
    icon: 'icon-findHouse',
    title: '找房',
    path: '/home/houselist'
  },
  {
    id: 3,
    icon: 'icon-infom',
    title: '资讯',
    path: '/home/news'
  },
  {
    id: 4,
    icon: 'icon-my',
    title: '我的',
    path: '/home/profile'
  }
]

export default class Home extends React.Component {
  state = {
    // tabbar 默认哪个高亮
    selectedTab: this.props.location.pathname,
    hidden: false,
    fullScreen: false
  }

  render() {
    return (
      <div className="home">
        {/* 路由出口 */}
        <Route path="/home/index" component={Index}></Route>
        <Route path="/home/houselist" component={HouseList}></Route>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/profile" component={Profile}></Route>

        {/* 底部tarbar */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.TabBarFn()}
        </TabBar>
      </div>
    )
  }

  // tarbar 的渲染方法
  TabBarFn = () => {
    return tarbarList.map(item => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.id}
          icon={<i className={'iconfont ' + item.icon} />}
          selectedIcon={<i className={'iconfont ' + item.icon} />}
          selected={this.state.selectedTab === item.path}
          onPress={() => {
            // 点击它, 编程式导航
            this.props.history.push(item.path)
            this.setState({
              selectedTab: item.path
            })
          }}
        ></TabBar.Item>
      )
    })
  }
}
