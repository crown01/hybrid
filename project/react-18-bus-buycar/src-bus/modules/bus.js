
import { EventEmitter } from 'events'
const bus = Object.assign({}, EventEmitter.prototype)

// import Vue from 'vue'
// const bus = new Vue()

export default bus


