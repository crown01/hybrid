import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import List from './components/pages/List'
import Car from './components/pages/Car'
import Mine from './components/pages/Mine'
import Detail from './components/pages/Detail'
import AppFooter from './components/commons/AppFooter'
import actionCreator from './store/commons/actionCreator'
import { connect } from 'react-redux'

class App extends Component {
  componentWillReceiveProps (props) {
     //如果是mine的话，不要router了
  }
  componentWillMount () {
    //进入项目的时候，无论从哪里进入都会执行app的钩子函数，去获取初始的状态
    this.props.getInitialUserInfo()
  }
  renderFooter () {//渲染底部
    let { pathname } = this.props.location
    let nofooters = [ '/mine/login', '/detail' ]
    
    let noFooter = nofooters.some(item => {
      if ( item === pathname ) {
        return true;
      }
      return false
    })
    if ( noFooter ) return ''
    return (<AppFooter/>)
  } 

  renderRoutes () {//渲染Route路由的方法
    let { routes } = this.props
    return routes.map(item => {
            return (<Route 
              exact = {item.isExact} 
              path = {item.path} 
              key = {item.id}
              component={item.component} />)
          })
  }
  render() {
    return (
      <div className="app">
        
        <Switch>    
          {this.renderRoutes()}
          <Redirect from = "**" to = {{pathname: '/'}} />
        </Switch>

        { this.renderFooter() }
      </div>
    );
  }
}
App.defaultProps = {
  routes: [
    {id: 1, path: '/', component: Home, isExact: true},
    {id: 2, path: '/list', component: List},
    {id: 3, path: '/car', component: Car},
    {id: 4, path: '/mine', component: Mine},
    {id: 5, path: '/detail/:id', component: Detail}
  ]
}
export default withRouter(connect(state => state, dispatch => {
  return {
    getInitialUserInfo () {
      dispatch(actionCreator.getInitialUserInfo())
    }
  }
})(App));
