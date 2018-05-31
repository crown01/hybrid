
//store需要拥有一个能力（绑定事件和触发事件的能力）
//在这里我们从events模块中取出EventEmitter，这个东西的原型上有能绑定事件和触发事件的方法
import { EventEmitter } from 'events'

//在这里，我们的store就拥有了绑定事件和触发事件的能力
const store = Object.assign({}, EventEmitter.prototype, {

})

export default store