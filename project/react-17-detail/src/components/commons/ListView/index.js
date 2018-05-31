
import React, { Component } from 'react'
import './inde.scss'
class ListView extends Component {
    constructor (props) {
        super(props)

        this.listenScroll = this.listenScroll.bind(this)
    }
    renderRow () {//渲染item的方法
        //dataList: 存放数据的数组 row: item组件
        let { dataList, row } = this.props
        if ( !dataList.length ) return '';
       
        return dataList.map(item => {
            let Item = row(item)
            return Item
        })
        
    }
    render () {
        let { contentClassName = 'content' } = this.props
        return (
            <div className = {'list-view ' + contentClassName}>
                { this.renderRow() }

                {
                    this.hasMore || <div className="message">
                        没有更多数据了
                    </div>
                }
                
            </div>
        )
    }
    listenScroll (e) {
        console.log(123)
        //已经滚动的距离
        let alreadyScroll = document.documentElement.scrollTop
        //执行滚动监听
        if (this.props.onScroll) this.props.onScroll( alreadyScroll );
        
        //如果没有更多了，那就也别监听了
        if ( !this.hasMore ) return false
                       
       let distance = this.htmlHeight - alreadyScroll - this.clientHeight

       if (distance < this.distanceEnd) {
          //已经滚动到底部
          if ( !this.loading ) {//如果当前不在加载过程中，才去加载新数据
            this.onReachEnd()
          }
          
       }

    }
    componentWillReceiveProps (props) {
        //当传入的loading变化的时候
        if (props.loading !== this.props.loading) {
            this.loading = props.loading
            //当loading变化的时候就是加载完成的时候，也去更新一下是否还有更多数据
            this.hasMore = props.hasMore
        }
    }
    componentDidMount () {
        //是否还有更多
        this.hasMore = this.props.hasMore
        //是否正在加载
        this.loading = this.props.loading
        //滚动到底部要执行的方法
        this.onReachEnd = this.props.onReachEnd
        //距离底部的临界值
        this.distanceEnd  = this.props.distanceEnd
        //屏幕的高度
        this.clientHeight = document.documentElement.clientHeight
        //整个页面的高度
        this.htmlHeight = document.documentElement.offsetHeight
        //监听滚动条
        window.addEventListener('scroll', this.listenScroll)
    }
    componentWillUnmount () {
        window.removeEventListener('scroll', this.listenScroll)
    }
    componentDidUpdate () {
        //渲染完成数据后再次计算当前页面的高度
        this.htmlHeight = document.documentElement.offsetHeight
    }
}

export default ListView