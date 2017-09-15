// pages/components/put/put.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    _id:"",
    text:{}
  },
  onLoad: function (option) {
    let _this = this;
    this.setData({
      _id: option.id
    })
  },
  onShow:function(){
    let _this = this;
    this.setData({
      text: app.globalData.lists.filter(item => {
        console.log(_this.data._id);
        return item.id == _this.data._id;
      })[0]
    })
  },
  formSubmit: function (e) {
    let _this = this;
    app.globalData.lists.forEach(item=>{
      if(item.id == _this.data._id) {
        item.title=e.detail.value.input;
        item.content=e.detail.value.textarea;
      }
    });
    app.globalData.collectLists.forEach(item => {
      if (item.id == _this.data._id) {
        item.title = e.detail.value.input;
        item.content = e.detail.value.textarea;
      }
    });
    console.log(app.globalData.lists);
    console.log(app.globalData.collectLists);
    wx.switchTab({
      url: '../../index'
    })
  }
})