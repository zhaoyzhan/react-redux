import React, {
	PropTypes as P
} from 'react'; // 引入了React和PropTypes
// PropTypes是用于检查props参数类型，可有可无，最好是有

/* 以类的方式创建一个组件 */
class Com extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/* 组件初始化完毕时触发 */
	componentDidMount() {}

	/* 渲染组件 */
	render() {
		return (
			<div>
				<button onClick={() => this.props.onClick(this.props.value)}>-</button>
			</div>
		);
	}
}

/* 下面是对该组件中涉及到的prop数据进行类型检查，如果类型不匹配会发出警告 */
Com.propTypes = {
	value: P.number,
	onClick: P.func,
};

export default Com;