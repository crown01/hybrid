import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'swiper/dist/css/swiper.min.css';

//rem
import './modules/rem'

import store from './store'
import { Provider } from 'react-redux'

//router

import {
    BrowserRouter as Router
} from 'react-router-dom'


ReactDOM.render(
    <Provider store = { store } >
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();




//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG


