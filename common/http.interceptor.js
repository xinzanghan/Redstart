// common/http.interceptor.js

const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://redstar.brofirst.cn/api',
		// method: 'POST',
		showLoading: true, // 是否显示请求中的loading
		loadingText: '努力加载中~',
		loadingTime: 800,
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 设置自定义头部content-type
		header: {
			"content-type": "application/json",

		}
		// ......
	});

	// 请求拦截部分，如配置，每次请求前都会执行，见上方说明
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// ......
		const token = uni.getStorageSync('token');
		config.header.token = token;
		return config;
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.statusCode == 200) {

			if (res.data.code == 1 || res.data.code == 0) {
				return res.data
			}

		} else if (res.statusCode == 401) {
			uni.setStorageSync('token', '');
			// vm.$u.route('/pages/index/login');
			// uni.redirectTo({
			// 	url: '/moduleA/logo/logo'
			// })
			this.$u.route({
				type:'redirectTo',
				url: '/pages/login/login',
				
			})

		} else if (res.statusCode == 301) {
			// console.log(res.data.data.code,'我是状态码');
			if (res.data.data.code == 1) {
				uni.redirectTo({
					url: '/moduleA/logo/password'
				})
			}
		} else if (res.statusCode == 500) {
			console.log('服务器端出错')
			uni.showToast({
				title: '服务器端出错',
				icon: 'none'
			})
		} else if (res.statusCode == 400) {
			console.log('服务器端出错')
			uni.showToast({
				title: '错误请求:400',
				icon: 'none'
			})
		} else if (res.statusCode == 404) {
			console.log('请求错误,未找到该资源');
			uni.showToast({
				title: '请求错误,未找到该资源',
				icon: 'none'
			})
		} else if (res.statusCode == 408) {
			console.log('请求超时');
			uni.showToast({
				title: '请求超时',
				icon: 'none'
			})
		} else if (res.statusCode == 501) {
			console.log('网络未实现');
			uni.showToast({
				title: '网络未实现',
				icon: 'none'
			})
		} else if (res.statusCode == 502) {
			console.log('网络错误');
			uni.showToast({
				title: '网络未实现网络错误',
				icon: 'none'
			})
		} else if (res.statusCode == 503) {
			console.log('服务器不可用');
			uni.showToast({
				title: '服务器不可用',
				icon: 'none'
			})
		} else if (res.statusCode == 504) {
			console.log('网络超时');
			uni.showToast({
				title: '网络超时',
				icon: 'none'
			})
		}
	}
}

export default {
	install
}
