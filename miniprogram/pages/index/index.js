const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    const db = wx.cloud.database();
    db.collection('lists').get().then(res => {
      this.setData({
        "lists": res.data
      })
    })
  },
  openFile1: function () {
    wx.cloud.downloadFile({
      fileID: "cloud://hznu-moo-86b1c5.687a-hznu-moo-86b1c5/中美青年创客大赛报名方法说明.pdf",
      success: function (res) {
        const filepath = res.tempFilePath;
        wx.openDocument({
          filePath: filepath,
        })
      }
    })
  },
  detail: function (e) {
    var id = e.currentTarget.id;
    app.globalData.id = id;
    wx.navigateTo({
      url: 'dynamic/detail',
    })
  }
})