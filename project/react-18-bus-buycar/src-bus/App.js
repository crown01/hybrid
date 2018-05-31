import React, { Component } from 'react';
//一切皆模块，图片之类的文件也可以引入进来，其实这里引入的是图片文件的真正路径
import logo from './logo.svg';
import './App.css';
import A from './components/A'
import B from './components/B'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <B/>

        <A/>
      </div>
    );
  }
}

export default App;
