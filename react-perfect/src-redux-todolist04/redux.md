


1. 下载redux工具
2. 通过createStore方法传入reducer创建了store，reducer是一个函数
3. store拥有getState方法，这个方法一执行就能得到store里管理的状态
4. reducer里返回什么，store的状态就是什么，所以，想要给store挂载默认状态，应该给reducer函数设置默认返回值
5. 组件想要用到store的状态，就调用store的getState方法，并将store的状态挂载到组件的状态上
6. 当需要更改状态的时候，去调用actionCreator的方法，就会创建一个action，利用store的dispatch方法传递给store，这个时候reducer就会执行，能接收到当前的状态和action
7. reducer需要创建一个与原状态相同的新状态，然后操作新状态，再返回新状态，这个时候store里的数据就变化了

8. 这个时候，store.subscribe方法里传入的回调函数就会触发，我们在这个回调函数里获取最新的状态




无状态组件不适合直接使用store里的状态，因为当store的状态更新的时候，无状态组件（函数）无法重新执行，需要父组件的帮助