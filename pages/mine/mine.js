// pages/mine/mine.js
import {
    tabbar
} from 'tabbar-tpl.js';
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
    data: {
        current: 'mine',
        id:"",
        name:"",
        headimg:""
    },

	/**
	 * 生命周期函数--监听页面加载
	 */
    onLoad: function (options) {
        wx.hideTabBar();
        tabbar.apply(this, []);
        var that = this;
        wx.request({
            url: app.globalData.hosts + '/users/getuserbyid?openid=' + app.globalData.openId ,
            success(res) {
                that.setData({
                    id: res.data.Id,
                    name: res.data.Name,
                    headimg: res.data.HeadImg
                })
            }
        })
    },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
    onReady: function () {

    },

	/**
	 * 生命周期函数--监听页面显示
	 */
    onShow: function () {

    },

	/**
	 * 生命周期函数--监听页面隐藏
	 */
    onHide: function () {

    },

	/**
	 * 生命周期函数--监听页面卸载
	 */
    onUnload: function () {

    },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
    onPullDownRefresh: function () {

    },

	/**
	 * 页面上拉触底事件的处理函数
	 */
    onReachBottom: function () {

    },

	/**
	 * 用户点击右上角分享
	 */
    onShareAppMessage: function () {

    }
})
