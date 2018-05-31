import React, { Component } from 'react';
//一切皆模块，图片之类的文件也可以引入进来，其实这里引入的是图片文件的真正路径
// import logo from './assets/logo.svg';
import './stylesheets/App.scss';

import Number from './components/pages/Number'

class App extends Component {

  render() {
    console.log(this)
    return (
      <div className="App">
          <Number/>
      </div>
    );
  }
}

export default App;

//sass里，前面加_的，我们叫particles，不会单独编译成css文件