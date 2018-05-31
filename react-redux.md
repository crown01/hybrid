


### react-redux的使用

首先一定要知道：react-redux只是一个连接react和redux的工具

容器组件（智能组件）、UI组件（木偶组件）

react-redux觉得，每一个组件都能分离成两个组件，也就是一个容器组件和一个UI组件

容器组件负责全部的数据状态交互逻辑

UI组件只负责使用数据、展示数据

容器组件react-redux会帮我们做的，也就说，我们可以利用connect函数来从UI组件中生成一个容器组件

##### 核心API

Provider 、 connect

##### 使用方式：

1.  需要将Provider组件套在整个组件的最外面，作为根组件来存在, 并传入store
        <Provider store = { store }>
    
    可以将自己属性上的store传递给内部所有的容器组件, 一定要注意，不是给所有的组件，而是给所有的容器组件传！

    利用context来进行传递的，每一个组件都可以给childcontext上面挂载一些东西，它的子孙组件就可以从this.context里面取得需要的数据，这样就可以实现一个直接在组件树上跨级传递数据的方式

2.  将需要使用状态的组件变成容器组件+UI组件

    可以通过connect函数从UI组件中生成一个容器组件，并且容器组件身上有store相关api
    需要让容器组件将一些数据之类的传递给UI组件才能用

    在connect函数中可以传入两个参数：mapStateToProps/mapDispatchToProps

    mapStateToProps函数可以接收到state，其实就是store里的state，返回一个对象，对象上有什么，UI组件的属性上就有什么，也就说，通过mapStateToProps函数就可以将state里的状态传入给UI组件使用了

    mapDispatchToProps函数可以接收到dispatch，其实就是store.dispatch，返回一个对象，对象上有什么，UI组件的属性上就有什么，也就说，通过mapDispatchToProps函数就可以配置一些发送action的方法到UI组件上

    但是，如果我们将这写创建action并且发送action的动作放入到某个组件中的话，就不能做到代码的复用了，所以我们依然需要一个actionCreator,并且我们让actionCreator只是去创建action，在mapDispatchToProps中利用bindActionCreators的方法将actionCreator里的方法传入到UI组件中，并且自动的将actionCreator创建好的action给dispatch走


3. 注意，我们的actionCreator现在能力被阉割了，目前只能创建一个action并且返回出来，不能去执行异步操作了，也就说异步操作只能放在组件中执行，但是UI组件只负责使用数据和显示数据，不应该去加入哪些异步的动作