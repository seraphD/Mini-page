// pages/mooc/dynamic/detail.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cl = app.globalData.id;
    let id = cl.split('-')[0];
    let mk = cl.split('-')[1];
    var url;
    const db = wx.cloud.database();

    db.collection('url').where({chap:id}).get().then(res => {
      url = res.data[0].mk[mk-1];
    }).then(res => {
      wx.request({
        url: url,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          let md = res.data;
          let art = app.towxml.toJson(md, 'markdown', this);
          this.setData({
            article: art
          })
        }
      })
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