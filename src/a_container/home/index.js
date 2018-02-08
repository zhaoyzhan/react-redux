// 所需的各种插件
import React, {
	PropTypes as P
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Link
} from 'react-router';

// 所需的所有组件
import Test from '../../a_component/test'; // 引入第4步创建的组件
import Cut from '../../a_component/cut';

// 本页面所需action
// import appAction from '../../a_action/app_action'; // 稍后创建
// import cutAction from '../../a_action/cut_action'; // 稍后创建
import '../../style/style.css';

// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	testvalue: state.app.inputvalue,
});


// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
	fn: {
		onTestAdd: (v) => {
			dispatch(appAction.onTestAdd(v));
		},
		onTestCUT: (v) => {
			dispatch(cutAction.onTestCUT(v));
		},
	},
});

// 创建组件
class HomePageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
		this.addNum = this.addNum.bind(this);
	}

	componentWillMount() {
		console.log(this.props);
	}

	componentDidUpdate() {
		console.log(this.props.testvalue, 'upd');
	}

	addNum() {
		console.log('1234');
	}

	onTestAdd() {
		console.log('1111');
		console.log(state.app.inputvalue);
	}

	onTestCUT() {

	}

	render() {
		let num = this.props.testvalue;
		return (
			<div>
		        <Test
		          value={this.props.testvalue}
		          onClick={this.props.fn.onTestAdd}
		        />
		        <Cut
				  value={this.props.testvalue}
				  onClick={this.props.fn.onTestCUT}
		        />
		        <div className="fu">福</div>
		        <div>
		        	<h1>{this.state.num}</h1>
					<button onClick={()=>this.onTestAdd}>点击</button>
		        </div>
		    </div>
		);
	}
}

// ==================
// PropTypes
// ==================

HomePageContainer.propTypes = {
	dispatch: P.func,
	fn: P.object,
	testvalue: P.number,
	location: P.any, // location对象包含了浏览器url中的各种信息，会自动被引入到当前组件中，如果不需要的话可以去掉
};

export default connect(mapStoreStateToProps, mapDispatches)(HomePageContainer);