
import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import GoodItem from '../../commons/GoodItem'
import ListView from '../../commons/ListView'
import BackTop from '../../commons/BackTop'
class List extends Component {
    constructor (props) {
        super(props)

        this.state = {
            goods: [],
            loading: false,//是否在加载的开发
            hasMore: true,
            isBackShow: false
        }
        //一些不需要在dom中直接渲染的数据，能不挂在state上就别挂了，挂在this上就可以了
        this.page = 1;
        this.num = 10;
        
        this.onReachEnd = this.onReachEnd.bind(this)
        this.onScroll = this.onScroll.bind(this)
    }
    componentWillUnmount () {
        //在卸载组件的时候，关闭开关
        this.mounted = false
    }
    getGoods () {
        //这个开关用来判断是否卸载了
        this.mounted = true
        //获取某一页的某些数据
        let { page, num } = this

        this.setState({loading : true})
        axios.get ('/aura/api/recommend/home', {
            params: { page, num }
        }).then (({data}) => {
            if ( !this.mounted ) return false;
            let goods = this.state.goods.concat(data.data.list)
            let hasMore = this.page*this.num < data.data.total
            this.page ++;           
            this.setState({goods, loading: false, hasMore: hasMore })      
        })
    }
    componentWillMount () {//初始化获取数据
        this.getGoods()
    }
    onReachEnd () {//滚动到底部
        this.getGoods()
    }
    onScroll (top) {//滚动监听
        let { isBackShow } = this.state
        if (top > 300) {// 如果该出来了，让它出来
            this.setState({isBackShow: true})
        }else{// 如果该回去了，让它回去
            this.setState({isBackShow: false})
        }
    }

    shouldComponentUpdate (props, state) {
        //判断如果是其他的状态变化，就向下走
        if ( state.goods!== this.state.goods || state.loading !== this.state.loading || state.hasMore !== this.state.hasMore ) {
            return true
        }
        //如果是isBackShow变化，去看一下数据是否一样，一样的话就不需要重新渲染
        if (state.isBackShow === this.state.isBackShow) return false;
        return true;
    }

    render () {
        console.log('render')
        let { goods, loading, hasMore, isBackShow } = this.state
        return (
            <div className = "list page">
                <div className = "good-box">
                    <div className="title">—&nbsp;好货精选&nbsp;—</div>
                    <ListView
                        onReachEnd = {this.onReachEnd}
                        contentClassName = {'good-content'}
                        row = { GoodItem }
                        dataList = { goods }
                        distanceEnd = {50}
                        loading = {loading}
                        hasMore = {hasMore}
                        onScroll = {this.onScroll}
                    ></ListView>

                    { !isBackShow  || <BackTop  /> }
                </div>
            </div>
        )
    }
}

export default List



