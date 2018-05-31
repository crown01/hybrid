
import {
    CHANGE_USER_INFO,
    REMOVE_USER_INFO
} from './const'

const actionCreator = {
    getInitialUserInfo () {//获取初始的用户信息，从本地存储中
        let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : null
        return {
            type: CHANGE_USER_INFO,
            userInfo
        }
    },
    //用户名、密码、成功回调、失败回调
    login ({username, password, success, fail}) {
        return dispatch => {
            setTimeout(() => {//调用真实的登陆接口
                
                if ( username === '123' && password === '456' ) {
                    let userInfo = {
                        userId:1,
                        username: '二狗子',
                        headimgurl: '/images/ergouzi-head.jpeg'
                    }
                    let action = {
                        type: CHANGE_USER_INFO,
                        userInfo
                    }
                    dispatch( action )
                    success()
                    //存储登陆信息
                    localStorage.userInfo = JSON.stringify(userInfo)
                    return false;
                }
                fail()
            }, 1000);

        }
    },
    exit () {
        localStorage.removeItem('userInfo')
        return {
            type:REMOVE_USER_INFO 
        }
    }
}
export default actionCreator