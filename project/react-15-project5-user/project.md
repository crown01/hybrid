
### 项目开发

1. 利用create-react-app 进行了项目的环境搭建，初始化了项目模板

2. 安装需要用到的依赖

    redux/react-redux/redux-thunk
    node-sass/sass-loader
    axios

3. 执行npm run eject将配置文件抽离

4. 处理项目结构

5. 搭建redux环境

    创建store、进行reducer划分、使用thunk中间件
6. 配置跨域代理
    列表数据：https://aura.maizuo.com/api/recommend/home?page=1&num=20
    详情： https://aura.maizuo.com/api/item?id=2044
    焦点图： https://m.maizuo.com/v4/api/billboard/home?__t=1526875795456

7. 使用swiper插件来实现Home页的轮播图

    注意，放在public里面的文件可以直接通过网络绝对路径去使用，而且不需要加public

    //在这里，我们使用renderSlide的函数来做数据的渲染，因为一开始的时候banners是为空的，如果直接在render函数中进行map遍历其实是没有意义的，所以使用函数进行了一个判断处理，当数据获取之后，更改状态重新render的时候重新执行这个函数，这个时候才会去遍历

    使用了swiper之后，需要在某一个时刻进行实例化，必须等待swiper-slide都渲染完成后才能进行，
    所以放在componentDidMount里不行，因为数据的获取是异步的，当执行完componentWillMount、render、componentDidMount的时候，数据依然没有获取到
    ，因为数据获取到之后会执行运行中阶段的钩子函数，所以我们考虑将这个动作放入到运行中钩子函数

    componentWillReceiveProps不能用，因为这个时候没有属性的改变，不会执行
    shouldComponentUpdate、componentWillUpdate也不行，这个时候，还没有重新render，只能放到componentDidUpdate里

    在vue中有Vue.nextTickapi，可以在更改完数据之后，直接设置nextTick回调函数，当数据引起的重新渲染接收之后会执行nextTick里面的回调函数。可以在这个里面做实例化swiper

    其实我们可以在更改状态之后，写setTimeout，那么事件间隔我0ms也ok


8. 实现底部导航，准备划分一个单独的底部组件

    因为不是所有的路由组件都需要footer，所以我们可以有两种方式：
    1. 哪个路由组件需要用到footer 就给哪个路由组件
    2. 就将footer放入到app根组件中，当路由变化的时候，根据请求控制footer是否渲染

    其实第一种方法比较合理，但是为了练习，我们在这里使用第二种方法。

    现在需要在app中监听路由的变化之后控制footer，但是发现无处下手，app，二了吧唧的，根本没啥反应，经过测试，我们得到几条显示

    1. car/Home组件的属性上有一些history、match等等的东西
    2. App/Footer组件的属性上没有这些东西
    推论： 路由组件的属性上会有一些history等相关的路由参数

    当路由切换的时候，路由组件身上的match属性会发送改变，会触发componentWillReceiveProps

    在某一个路由组件中想要监听路由的变化，就在其componentWillReceiveProps中做处理

    但是，App依然是二了吧唧的，不会去接收match这些属性，因为它就不是路由组件

    1. 每一个路由组件外面都会包裹一个Route组件，而在最外面还有一个Router组件，而Route组件身上有location和match，Router组件身上有history，Route组件为里面的路由组件传递了location和match，Router组件为路由组件传递了history

    推论，App组件之所以没有这些属性是因为它不是路由组件，所有在外面没有Route组件

    解决的办法： 给App外面加一个Route组件，或者让其变成一个路由组件


    在这里我们使用withRouter的HOC（高阶组件）来解决这个问题，withRouter可以接收一个不是路由组件的组件，返回一个算是路由组件的组件

    高阶组件是一个函数，接收一个组件再返回一个新组件，这样就可以给新组件上添加一些api了，实现代码复用

    其实，我们在前面一直在使用一个connect，connect函数的返回值是一个高阶组件,也就是说connect函数会返回一个高阶组件，而这个高阶组件接收到UI组件之后，会返回一个新组件，在新组件中其实渲染还是我们的UI组件，只是为UI组件传入了需要的属性

    效果的实现方式： 使用withRouter对App进行了处理之后，App可以接收到location、match相关的api，而且外面也有了Route包裹了，当路由变化的时候，Route会重新给App传递新的location...，。相当于App接收到的属性变化了，在这里就可以在生命周期的钩子函数中做出处理


9. 解决了一个问题： 当组件在切换的时候，可能数据获取还没有执行完成，当切换过后，数据获取完成，需要更改state的时候会报一个错误，说不能去给已经卸载的组件更改状态，所以我们考虑使用了isMounted的api来判断是否装载，如果装载之后再去更改state，但是这个api发现已经被弃用，所以我们采取了自己写开关的方式。

10. 实现在mine里配置二级路由：login、user，而且进入到mine的时候，从store中取出数据判断是否登陆了，如果登陆了就跳转到user，否则跳转login

    如果一个非路由组件使用withRouter高阶组件之后变成了伪路由组件之后，如果还想使用store中的数据，需要用connect处理一下的话，还是需要将withRouter包裹在最外面，如果包裹在里面，那么生成Route组件就不会接收新的属性了，内部的真正的UI组件也不能监听路由的变化了

    在componentWillReceiveProps中监听到路由变化后，利用属性中的history方法里的replace、push、go、goBack等等方法可以进行跳转（编程式导航）

11. 为了开发速度，我们去使用一下现成的UI组件库 - ant design （蚂蚁金服），不仅能使用在react中，在react-native中也能使用，这是PC端的，移动端的是ant design mobile (antd-mobile)

12. 我们发现，在antd-mobile里有的组件里的一些方法和最新的react版本不契合导致会报一些警告
    登陆之后，执行成功回调之后，弹出toast，再去进行路由的跳转，在这里因为LoginForm不是路由组件，所以让Login给LoginForm传递了自己的history属性

    当跳转出去的时候，发现底部的我的这个按钮不会变色，所以我们做了一个处理，就是让Footer在渲染底部的时候，将最后一个path改为/mine/user，这样就可以匹配到我们进入mine/user了，就会加上类名，当footer检测到store中的userInfo有了，就证明登陆成功了，然后去做这些事情，但是这个时候我们发现footer里的类名不能切换了，是因为，footer变成容器组件包裹UI组件了，路由变化的时候不敏感了，所以使用了withRouter对其进行包裹处理

    其实我们根本的原因是因为footer中的每一个按钮都是exact之后才加类名，当我们登陆之后，path变成/mine/user与第四个按钮的/mine不完全匹配了，我们只需要对第四个按钮做成exact = false就ok了

    当我们登陆了之后，进入到/mine/user了，我们切换出其他的路由再次切换回来的时候，相当于Mine组件被销毁又被mount了。这个时候Mine组件的初始化阶段生命周期会重新执行，也就是说会重新判断是否登陆然后进行跳转

    但是，当我们在进入到/mine/user后再次点击“我的”按钮的时候，发现又回到了mine，因为按钮本身点击就是进入/mine的，点击之后，跳转到/mine, 这个时候Mine没有销毁，就不会触发初始化阶段的钩子函数，就不会去检测是否登陆，这个时候，我们明白，只要路由有变化，这个时候从/mine/user -> /mine其实已经发送变化了，Mine因为是路由组件所以接收的history、location属性都会变化，所以，我们可以在componentWillReceiveProps里做处理

13. 登陆状态保存，我们在登陆之后准备把用户信息保存在本地存储里，这个动作我们考虑之后觉得还是放在actionCreator方法里比较好，因为组件不要做这样的逻辑，reducer也不可以做与操作数据无关的动作，然后希望进入到项目之后能去本地存储里取出存好的信息，为了保证只要进入项目，都能进行这个获取用户信息的动作，所以将其放入到App根组件的生命周期的钩子了

14. 登陆、注销之后的跳转：

    现在采取的方式是：登陆成功、注销成功之后手动的进行跳转，其实。不需要，因为登陆成功和注销之后的差别就是store中userInfo数据变化了，所以让mine去监听数据变化，去进行跳转

    所以又更改成了让mine去进行跳转：
    因为mine是一个路由组件，所以它能监听到路由的变化，而且，mine也是一个容器组件包裹UI组件的，所以它依然能检测到store中的userInfo的变化，当我们登陆成功或者注销的时候，store中的userInfo都会变化，这个时候Mine外面的容器组件就会给它传入新的userInfo属性，所以我们可以在Mine组件的componentWillReceiveProps里去判断更改后的userInfo的值，然后进行跳转

    但是这样做的时候出了一个小小的问题：
    在注销的时候，点击按钮更改store的状态，这个时候因为User也是容器UI组件，所以会User会接收到新的userInfo状态，值为null，然后去rerender，在render中的结构里还使用着userInfo，所以出问题了，我们可以这样来解决： 当注销之后，我们在User组件的shouldComponentUpdate里去判断后阻止更新，这个时候Mine组件也去做了判断之后，进行跳转了...

#### React-router 4+

在这里，我们学react-router 4.0版本，需要注意的是，在4.0中，路由的搭建更灵活，我们不会基于全局的对于路由进行管理，而是在使用的时候进行路由的配置

我们需要下载的也不是react-router了，而是 react-router-dom

[文档](http://reacttraining.cn/)

1. 首先现在最外层包裹上Router，Router分为两种：BrowserRouter/HashRouter

	BrowserRouter监听的是地址栏path的变化，HashRouter监听的是hash值的变化，在这里强烈推荐大家使用BrowserRouter，因为HashRouter在某些时候会报一个警告，不允许重复跳转

    使用BrowserRouter需要后端去进行一个配置

2. 在需要切换路由的时候，引入Route，path指定路径，component指定要渲染的组件，render可以传入一个函数，在这里逻辑判断之后再去返回一个组件，exact属性设置之后，只有完全匹配之后才能使用

3. switch 里面只运行渲染一个路由，可以有效的防止同级路由多次渲染



<Switch>
   	<Route exact path = '/' component = {Home} />
   	
   	
   	<Route path = '/render' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">render</div>
   	}} />
   	
   	<Route path = '/a/b' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">ab</div>
   	}} />
   	
   	<Route  path = '/a' render = {() => {
   		//做出一些逻辑操作之后，返回一个组件
   		return <div className = "content">a</div>
   	}} />
   	
   	
</Switch>

4. 重定向，可以使用Redirect组件，添加from、to属性进行重定向跳转

5. react-router中提供了Link和NavLink，都可以使用to属性进行跳转，NavLink可以对现在路由做出判断后给a标签加上样式或者类名，exact完全匹配

5. 路由传参数,react-router4里只有一种参数就是路由参数，需要配置 /detail/:id,而query参数能传，但是传的时候，和取的 时候都没有对应的api来使用

	它们都可以在this.props中的match、location里得到

6. withRouter高阶组件，高阶组件组件：就是一个函数，任务是为其他的组件添加一些属性和方法api，例如connect，可以将store中的一些东西安装到新生成的容器组件上

	withRouter可以根据传入的组件生成一个新的组件，并且为新组件添加上router相关的api
	
7. 编程式导航： 在组件中获取到history的api进行跳转，如果是路由组件，直接从this.props中取出，如果不是的话，可以让外面的路由组件传入，或者可以使用withRouter高阶组件处理之后使用

