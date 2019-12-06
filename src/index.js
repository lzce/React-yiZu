import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// 导入全局css
import './index.scss'

// 引入 antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'
// 字体图标样式文件
import './assets/fonts/iconfont.css'

import App from './App'
render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
)
