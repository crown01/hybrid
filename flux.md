

### FLUX相关

flux是一种架构思想，通常会在react项目中去搭建flux架构，因为react只是一个视图层的轻量级的框架，需要引入FLUX这样的成熟的架构然后才能实现开发数据不断变化的大型应用程序的目的

flux里主要有四个部分：

store用来存储状态
view：视图，在这里用react来充当
actionCreator： 用来接受用户的操作，然后创建action
dispatcher：根据action做出判断后，通知store去更改状态


flux里面其实用的最多的还是复杂组件间的状态共享、通信

使用数据： 从store中取出数据，放到组件的状态上，然后在生命周期函数里给某个事件绑定处理程序，当数据变化后，函数执行，再去获取最新的状态

更改数据： 调用actionCreator的方法，然后创建action给dispatcher，然后更改状态，触发事件