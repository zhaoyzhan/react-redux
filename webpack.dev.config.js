var path = require('path'); // 用于获取根路径
var webpack = require('webpack'); // webpack核心

var ROOT_PATH = path.resolve(__dirname); // 项目根路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目的src目录路径
var APP_FILE = path.resolve(APP_PATH, 'app'); // 项目的入口文件（即src/app.js）
var BUILD_PATH = path.resolve(ROOT_PATH, '/build'); //规定打包好的文件存放到此目录下(开发模式中，我们一般配置为最终生成1个bundle.js)

module.exports = {
	/* 需要被打包的文件在此配置 */
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:8888', // 热更新监听此地址（端口号与server.js中配置的要一致，我们稍后来写server.js）
			'webpack/hot/only-dev-server', // 启用热更新
			APP_FILE // 入口文件
		]
	},
	/* 打包后要输出的文件在此配置 */
	output: {
		publicPath: '/test/', // 这是在启动webpack-dev-server时，bundle.js的引用路径应该相对于此路径，即在index.html中： 
		// <script src="/test/bundle.js"></script>
		// 而且所有的url地址，比如css中的背景图片，html中的img的src都会自动变成：/test/*****
		path: BUILD_PATH, // 将打包好的文件放在此路径下，开发模式中只会在内存中存在，不会在此路径生成真正的文件
		filename: 'bundle.js', //最终生成的文件名字
	},
	devtool: 'source-map', // 打包后，代码都被压缩了，如果报错看不出是在哪一行报的错，配置这个就是为了解决这个问题
	/* 下面是配置一些解析器 */
	module: {
		/* 在打包之前运行 */
		preLoaders: [{
			test: /\.js?$/, // 解析.js,.jsx
			loader: 'eslint', // 解析器是eslint,即进行语法检查，不过关的话会报错
			exclude: /node_modules/, // 不检查node_modules目录下的内容
		}, ],
		/* 打包时需要用到的解析器 */
		loaders: [
			// 解析.js,.jsx,用babel解析器，webpack会自动加载我们配置的.babelrc文件
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
			},
			// 解析.css,先执行css-loader,再执行style-loader
			// 注意：连node_modules中的也一并解析
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
			},
			// 解析.less,先执行css-loader,再执行style-loader
			// 注意：连node_modules中的也一并解析(因为蚂蚁金服ui框架的样式文件就存在此目录下)
			// 如果没有用到less，就不用配（如果不配，蚂蚁金服ui框架的样式文件就要使用antd.css,而不要使用antd.less）
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'less'],
			},
			// 其他各类文件处理，打包后会把这些文件挪到打包好的文件夹中
			{
				test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|mp3)(\?|$)/,
				exclude: /node_modules/,
				loader: 'file-loader?name=[name].[ext]',
			},
			// 处理图片，这里配置的是，小于8192字节的图片变成base64编码，其余图片最终会生成一个images文件夹，存放其中
			{
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
			}
		]
	},
	/* 配置一些额外的webpack插件 */
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // 热更新插件
		new webpack.NoErrorsPlugin() // 即使有错误也不中断运行
	],
	/* 配置额外的自定义方案 */
	resolve: {
		extensions: ['', '.js', '.jsx', '.less', '.css'], //在webpack打包时，自动匹配这些后缀名的文件
	}
};