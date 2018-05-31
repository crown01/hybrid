### 在react中实现类似于vue中的事件总线

在vue中存在event bus的机制来处理非父子组件的通信，原理就是创建一个空Vue实例来充当bus，因为Vue实例都具有绑定事件和触发事件的能力，所以可以实现


在react中可以利用node中的events模块中的EventEmmiter来实现，EventEmmiter的原型上就有绑定事件和触发事件的方法，放入到bus上，就可以了：

1. 创建bus

    const bus = Object.assign({}, EventEmitter.prototype)

2. 在B组件中给bus绑定事件

    componentWillMount () {
        bus.on('event-name', () => {
            //执行通信的逻辑
        })
    }

3. 在A组件中去触发bus的事件   

    componentDidMount () {
        bus.emit('event-name)
    }