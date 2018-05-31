
### redux-thunk

注意，我们的actionCreator现在能力被阉割了，目前只能创建一个action并且返回出来，不能去执行异步操作了，也就说异步操作只能放在组件中执行，但是UI组件只负责使用数据和显示数据，不应该去加入哪些异步的动作，那么怎么办呢？

在这里我们就要用到一些redux的中间件工具：redux-thunk、redux-promise、redux-saga.....

在这里，redux-thunk的作用就是让actionCreator的方法能返回一个可以接收到dispatch的函数，在这个函数里就可以做一些异步的操作了

1. 从redux中引入applyMiddleWare，然后在createStore的时候，传入中间件的设置
2. 将异步动作就可以放入到actionCreator返回的函数中，因为这个函数会接收dispatch，所以异步执行后手动dispatch就好了