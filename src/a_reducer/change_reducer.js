const initState = {
	inputvalue: 0, // 初始值
};

const actDefault = (state) => state;
const changeAdd = (state, action) => {
	const {
		num
	} = action;
	return Object.assign({}, state, {
		inputvalue: num,
	});
};

const reducerFn = (state = initState, action) => {
	// console.log(state);
	switch (action.type) {
		// 匹配type来执行对应的方法，action中返回对应的type，这里就会执行对应的方法
		case 'CHANGE::add':
		// console.log(action, 'av');
			return changeAdd(state, action);
		default:
			// console.log(action, 'mmmm,,');
			return actDefault(state, action);
	}
};

export default reducerFn;