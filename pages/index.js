//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:null
  },
  onShow: function (options) {
    this.setData({
      //title: app.globalData.title,
      //content: app.globalData.content,
      list: app.globalData.lists
    })
  }
})
