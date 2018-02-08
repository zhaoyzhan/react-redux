const initState = {
	inputvalue: 0, // 初始值
};

/* action 对应的处理方法，用于更新state中的数据 */
const actDefault = (state) => state;

const testAdd = (state, action) => {
	const {
		payload
	} = action;
	// 原本初始的时候，inputvalue,这里将最新的payload覆盖原来的值
	return Object.assign({}, state, {
		inputvalue: payload,
	});
};

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		// 匹配type来执行对应的方法，action中返回对应的type，这里就会执行对应的方法
		case 'TEST::add':
			return testAdd(state, action);
		case 'TEST::cut':
			console.log(action, 'aa');
			return testAdd(state, action);
		default:
			console.log(action);
			return actDefault(state, action);
	}
};

export default reducerFn;