
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