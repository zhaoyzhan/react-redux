export default class AdviserActions {
	// 用户点击按钮时，将触发此方法
	static onTestCUT(num) {
		return {
			type: 'TEST::cut', // 与reducer中的type对应
			payload: num - 1,
		};
	}
}