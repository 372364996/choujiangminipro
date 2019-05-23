// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        wxhao: "我行我素123"
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