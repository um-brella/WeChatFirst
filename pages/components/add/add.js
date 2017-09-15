// pages/components/add/add.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    input:"",
    textarea:""
  },

  formSubmit: function (e) {
    app.globalData.lists.unshift({
      id:Date.now(),
      title:e.detail.value.input,
      content: e.detail.value.textarea
    });
    console.log(app.globalData.lists);
    wx.switchTab({
      url:'../../index',
      success: this.setData({
        input: "",
        textarea: ""
      }),
      fail:function(){
        console.log('失败');
      }()
    })
  }
})