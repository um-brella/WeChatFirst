// pages/components/show/show.js
const app = getApp()

Page({
  data: {
    _id:0,
    title: "",
    content:"",
    chooseState:{}
  },
  //删除文章
  delList:function(){
    let _this = this;
    wx.showModal({
      title: '确定删除',
      content: '主上，您真的要删除我么？',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {
          let otherLists = app.globalData.lists.filter(item => {
            return item.id != _this.data._id;
          });
          let otherCollectLists = app.globalData.collectLists.filter(item => {
            return item.id != _this.data._id;
          });
          app.globalData.lists = otherLists;
          app.globalData.collectLists = otherCollectLists;
          wx.navigateBack();
        } else {
          console.log('取消删除');
        }
      }
    });
  },
  //收藏文章
  collectList:function(e){
    let _this = this;
    if (e.detail.value){
      app.globalData.collectLists.unshift({
        id: _this.data._id,
        title: _this.data.title,
        content: _this.data.content
      });
      app.globalData.switchState.unshift({
        id: _this.data._id,
        state:true
      });
      this.setData({
        chooseState: app.globalData.switchState.filter(item => {
          return item.id == _this.data._id;
        })[0]
      });
    }else{
      app.globalData.switchState.forEach(item => {
        console.log(item.id == _this.data._id);
        if (item.id == _this.data._id){
          item.state=false;
        }
      });
      let otherLists = app.globalData.collectLists.filter(item => {
        return item.id != _this.data._id;
      });
      app.globalData.collectLists = otherLists;
    }
  },
  //修改文章
  putList:function(){
    wx.redirectTo({
      url: "../put/put?id=" + this.data._id
    })
  },
  onLoad: function (options) {
    this.setData({
      _id:options.id
    })
    let chooseItem=app.globalData.lists.filter(item=>{
      return item.id == options.id;
    });
    this.setData({
      title: chooseItem[0].title,
      content: chooseItem[0].content,
    })
  },
  onShow:function(){
    this.setData({
      chooseState: app.globalData.switchState.filter(item => {
        return item.id == this.data._id;
      })[0]
    });
  }
})