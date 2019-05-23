function tabbar() {
  var that = this;
  that.tabbarArr = [{
    key: 'homepage',
    url: '/pages/index/index',
    openType: 'switch'
  },
  {
    key: 'group',
    url: '/pages/luckdraw/luckdraw',
    openType: 'navigator'
  },
  {
    key: 'mine',
    url: '/pages/mine/mine',
    openType: 'switch'
  }
  ];

  //导航栏点击事件
  that.tabbarChange = function ({ detail }) {
    var key = detail.key;
    if (key == that.data.current_page) {
      return false;
    }
    var pageObj = that.getCurrentTabbar(key, '');
    if (pageObj) {
      switch (pageObj['openType']) {
        case 'switch':
          wx.switchTab({
            url: pageObj['url'],
          });
          break;
        case 'navigator':
          wx.navigateTo({
            url: '/pages/luckdraw/luckdraw',
          });
          break;
        case 'redirect':
          wx.redirectTo({
            url: pageObj['url'],
          })
          break;
        default:
          wx.reLaunch({
            url: pageObj['url'],
          });
          break;
      }
    }
  };

  that.getCurrentTabbar = function (key, url) {
    if (typeof key == 'undefined') {
      key = '';
    }
    if (typeof url == 'undefined') {
      url = '';
    }
    for (let i in that.tabbarArr) {
      if (that.tabbarArr[i]['key'] == key || that.tabbarArr[i]['url'] == url)
        return that.tabbarArr[i];
    }
    return false;
  };

  //一开始就应该决定显示哪个是current_page
  var pageObj = that.getCurrentTabbar('', '/' + that["__route__"]);
  if (pageObj) {
    this.setData({
      current_page: pageObj['key']
    });
  }
}

export { tabbar };