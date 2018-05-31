
import {
    CHANGE_USER_INFO
} from './const'

const actionCreator = {
    //用户名、密码、成功回调、失败回调
    login ({username, password, success, fail}) {
        return dispatch => {
            setTimeout(() => {//调用真实的登陆接口
                
                if ( username === '123' && password === '456' ) {
                    let action = {
                        type: CHANGE_USER_INFO,
                        userInfo: {
                            userId:1,
                            username: '二狗子'
                        }
                    }
                    dispatch( action )
                    success()
                    return false;
                }
                fail()
            }, 1000);

        }
    }
}
export default actionCreator