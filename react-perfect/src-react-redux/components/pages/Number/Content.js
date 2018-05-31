
import React , { Component } from 'react'

import { connect } from 'react-redux'

//UI组件
class Content extends Component {
    
    render () {
        let { num } = this.props
        return (
            <div>
                <h2 className="text-center">{ num }</h2>
            </div>
        )
    }
}
//这就是一个容器组件 他们可以从context上面得到Provider给传递的一些store的相关api

//将state传递给UI组件,返回什么，容器组件就会给UI组件传递什么，UI组件的props上就会接收到什么

//当store中的state变化的时候，容器组件是知道的，因为容器组件会使用store.subscribe，然后会重新给UI组件传递新的数据

/*
    @params: state
*/

// let mapStateToProps = (state) => {
//     return state.number
// }

// let Container = connect(mapStateToProps)(Content)

// export default Container

export default connect(state => state.number)(Content)