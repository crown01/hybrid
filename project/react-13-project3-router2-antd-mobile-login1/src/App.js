import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import List from './components/pages/List'
import Car from './components/pages/Car'
import Mine from './components/pages/Mine'
import AppFooter from './components/commons/AppFooter'

class App extends Component {
  componentWillReceiveProps (props) {
     //如果是mine的话，不要router了
  }

  renderFooter () {//渲染底部
    let { pathname } = this.props.location
    let nofooters = [ '/mine/login' ]
    
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
    {id: 4, path: '/mine', component: Mine}
  ]
}
export default withRouter(App);
