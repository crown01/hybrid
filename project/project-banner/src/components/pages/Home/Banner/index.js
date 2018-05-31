
import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'swiper'
//210.94
class Banner extends Component {

    constructor (props) {
        super(props)
        this.state = {
            banners: []
        }
    }

    getBanners () {//获取焦点数据之后进行更新
        axios.get('/mz/v4/api/billboard/home', {
            params: {__t: Date.now()}
        }).then (res => {
            console.log(res.data.data.billboards)
            this.setState({banners: res.data.data.billboards})
            //在vue中，当上一次的数据更新引起的dom的重新渲染完成后，Vue.nextTick里面的回调函数会执行
            // Vue.nextTick (() => {
            //     //实例化swiper
            // })
            
            setTimeout(() => {
                new Swiper(this.el, {
                    pagination: {el: '.swiper-pagination'}
                })
            }, 0);
        })
    }

    componentWillMount () {
        //我一般情况下会将初始化数据获取放在willMount里，但是大家知道，和放在DidMount里效果一样
        //注意alibaba一直是放入到DidMount
        this.getBanners()

    }

    renderSlide () {
        let { banners } = this.state
        if (!banners.length) return (<div className="swiper-wrapper"></div>)

        return (
            <div className="swiper-wrapper">
                {
                    banners.map(item => {
                        return (
                            <div key = {item.id} className="swiper-slide">
                                <div className="img-box img-loading">
                                    <img width="100%" src={item.imageUrl} alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render () {
        return (
            <div ref = {el => this.el = el} className="swiper-container">
                {this.renderSlide()}
                <div className="swiper-pagination"></div>
            </div>
        )
    }

    componentDidUpdate () {
        // new Swiper(this.el, {
        //     pagination: {el: '.swiper-pagination'}
        // })
    }
    // componentDidMount () {
    //     //在这里实例的话，页面中有0个swiper-slide
    //     new Swiper(this.el, {
    //         pagination: {el: '.swiper-pagination'}
    //     })
    // }
}



export default Banner