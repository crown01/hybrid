

### 模块化

将系统功能分离成独立的功能部分的方法就是模块化的方法

优点： 有助于协同开发、提高开发效率、代码复用、便于维护

内聚度： 模块的独立性，越高越好

耦合度： 模块间的关系，越疏远越好

高内聚低耦合

one piece | 葫芦娃

模块化规范： 规定模块结合的方式 （ 导入、导出 ） 

commonJS  AMD CMD ES6MODULE


commonJS： 应用在node中（gulp、webpack）；同步；
    require('a')  module.exports = 

思考： 为什么commonJS要用同步的模块导入而不是异步的？

因为在node中，我们的模块都是本地的，所以引入模块的速度===文件的读取速度


AMD： 应用在浏览器端，使用require.js工具；异步的，原理（使用script标签的defer、async属性）

    require(a)/define([a],function(){}) 

CMD:  应用在浏览器端,使用sea.js工具；同步 -- 延迟加载
    require('')/define(function(){ var a = require('a');console.log(a) })

es6 module:同步； import  export



特点：模块内的变量、函数都是私有的，每一个模块都有自己的私有空间；如果需要被其他模块使用，需要暴露出接口；每引入一次模块，模块内的代码就会执行一次，但是当我们打包的时候只会打包一次。

axios


//a.js

var a = 12;
module.exports = a

//b.js

var a1 = require('./a')
var a2 = require('./a')
console.log(a)