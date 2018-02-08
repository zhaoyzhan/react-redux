import React from 'react'; // react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom'; // 渲染组件时需要
import {
	Provider
} from 'react-redux'; // react和redux连接的桥梁，就是这个Provider
import {
	Router,
	browserHistory
} from 'react-router'; // 路由组件

// babel本身只能转换ES6语法，但ES6新增的Map、Set、Generator等新功能不会转换，所以需要此插件
import 'babel-polyfill';

// 引入sotre,我们稍后配置
import store from './store';

// 所有的CSS全部引入到入口文件即可
// import 'antd/dist/antd.less'; // 这是蚂蚁金服ui框架的样式文件
// import './css/css.css'; // 这是我们自定义的css文件

import AppRoutes from './route'; // 所有定义好的路由

// 下面是创建根组件
// 其中引入了store,route,browserHistory
// 这里用的是browserHistory,即路由是依靠url地址的变化跳转的（比如www.test.com/home）
// 也可以使用hashHistory,即路由是依靠锚点的变化跳转的(比如www.test.com/#/home)
ReactDOM.render(
	<Provider store={store}>
    	<Router routes={AppRoutes} history={browserHistory} queryKey={false} />
  	</Provider>,
	document.getElementById('app-root') //  这个app-root是在index.html中写的div,其id为app-root
);