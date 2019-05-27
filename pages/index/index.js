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
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		current: 'homepage',
		//判断小程序的API，回调，参数，组件等是否在当前版本可用。
		canIUse: wx.canIUse('button.open-type.getUserInfo')
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
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}


	},
	// 查看是否授权

	bindGetUserInfo: function(e) {
		
		if (e.detail.userInfo) {
			//用户按了允许授权按钮
			console.log(e.detail.userInfo)
		} else {
			//用户按了拒绝按钮
		}
	},
	onShow: function(e) {
		this.setData({
			msgList: [{
					url: "url",
					title: "158****8549抽取纸巾一包"
				},
				{
					url: "url",
					title: "166****5269抽取电视机一台"
				},
				{
					url: "url",
					title: "130****6384抽取手机一部"
				}
			]
		});
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
		wx.navigateTo({
			url: "/pages/detail/detail"
		})
		console.log(123);
	}
})
