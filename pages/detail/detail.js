// pages/detail/detail.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
    data: {
        wxhao: "我行我素123",
        id: '',
        name: '',
        businessname: '',
        opentime: '',
        iscan: false
    },
	/**
	 * 一键复制
	 */
    copyBtn: function (e) {
        var that = this;
        wx.setClipboardData({
            data: that.data.wxhao,
            success: function (res) {
                wx.showToast({
                    title: '复制成功',
                });
            }
        });
    },
	/**
	 * 生命周期函数--监听页面加载
	 */
    onLoad: function (options) {
        var that = this;
        that.setData({
            id: options.id
        })
        wx.request({
            url: app.globalData.hosts + '/products/getproductbyid?id=' + that.data.id + '&openid=' + app.globalData.openId,
            success(res) {
                console.log()
                that.setData({
                    iscan: res.data.iscan,
                    id: res.data.Id,
                    name: res.data.Name,
                    businessname: res.data.BusinessName,
                    opentime: res.data.OpenTime
                })
                console.log(that.data.id)
                console.log(that.data.iscan)
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

    },
    tochoujiang: function (e) {
        wx.request({
            url: app.globalData.hosts + '/orders/createorder',
            data: {
                openid: app.globalData.openId,
                id: this.data.id
            },
            success(res) {
                if (res.data.success) {
                    wx.showToast({
                        title: '抽奖成功\r\n等待开奖',
                    });
                    setTimeout(function () {
                        //要延时执行的代码
                        wx.switchTab({
                            url: '/pages/index/index',
                        })
                    }, 2000) //延迟时间 这里是1秒
                    

                } else {
                    wx.showToast({
                        title: '异常错误',
                    });
                }

            }
        })
    }
})
