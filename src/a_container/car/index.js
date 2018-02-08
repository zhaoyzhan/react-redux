import React, {
	PropTypes as P
} from 'react';

import {
	connect
} from 'react-redux';

import changeAction from '../../a_action/change_action';

//链接reducer
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	testvalue: state.change.inputvalue,
});
//链接store
const mapDispatches = (dispatch) => ({
	fn: {
		changeValue: (v) => {
			dispatch(changeAction.changeValue(v));
		}
	},
});


class Car extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			num: 0
		};
		this.showNum = this.showNum.bind(this);
	}

	componentDidMount() {

	}

	componentDidUpdate() {
		console.log(this.props.testvalue, 'up');
		if (this.state.num == this.props.testvalue) {
			console.log('未改变数值');
		} else {
			console.log('数值已改变');
		}
	}

	showNum() {
		// console.log(this.props.fn.changeValue);
		this.props.fn.changeValue(this.props.testvalue);
		this.setState({
			num: this.props.testvalue,
		});
		// console.log('122');
		// console.log(this.props);
	}

	render() {
		return (
			<div className="carCon">
				{this.props.testvalue}
				<button onClick={this.showNum}>点击</button>
			</div>
		);
	}
}

Car.propTypes = {
	dispatch: P.func,
	fn: P.object,
	testvalue: P.number,
	location: P.any, // location对象包含了浏览器url中的各种信息，会自动被引入到当前组件中，如果不需要的话可以去掉
};

export default connect(mapStoreStateToProps, mapDispatches)(Car);