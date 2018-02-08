export default class ChangeAction {
	// 用户点击按钮时，将触发此方法
	static changeValue(num) {
		return {
			type: 'CHANGE::add',
			num: num + 10,
		};
		// return {
		// 	type: 'TEST::change', // 与reducer中的type对应
		// 	payload: num + 10,
		// };
	}
}