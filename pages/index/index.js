//index.js
import {
	tabbar
} from 'tabbar-tpl.js';
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		encryptedData: "",
		iv: "",
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		current: 'homepage',
		//判断小程序的API，回调，参数，组件等是否在当前版本可用。
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		products: []
	},
	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	handleChange({
		detail
	}) {
		this.setData({
			current: detail.key,

		});
		if (detail.key == "mine") {

			wx.navigateTo({
				url: "/pages/mine/mine"
			})
		}
	},
	onLoad: function() {
		var that = this;
		wx.hideTabBar();
		tabbar.apply(this, []);
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true,
					iv: res.iv,
					encryptedData: res.encryptedData
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true,
						iv: res.iv,
						encryptedData: res.encryptedData
					})
				}
			})
		}
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: function(userres) {
							wx.login({
								success(loginres) {
									
									wx.request({
										url: app.globalData.hosts + '/home/login',
										data: {
											code: loginres.code,
											encryptedData: userres.encryptedData,
											iv: userres.iv
										},
										success(res) {
											console.log(res.data);
											app.globalData.openId = res.data.openid;
											console.log(app.globalData.openId);
											wx.request({
												url: app.globalData.hosts + '/products/list',
												success(listres) {

													that.setData({
														products: listres.data.product
													});
													console.log(that.data.products);
												}
											})
										}
									})

								}
							})

						}
					})
				} else {
					wx.redirectTo({
						url: '/pages/login/login',
					})
				}
			}
		})

	},
	onShow: function(e) {



	},
	getUserInfo: function(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
	todetail: function(e) {
		var id = e.currentTarget.dataset.id;


		wx.navigateTo({

			url: "/pages/detail/detail?id=" + id

		})

		// wx.navigateTo({
		// 	url: "/pages/detail/detail"
		// })
		// console.log(123);
	}
})
