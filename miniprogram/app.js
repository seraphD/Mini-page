//app.js
const Towxml = require('/towxml/main');
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    this.globalData = {
      id:'',
      url: [["https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/可编程逻辑电路设计-绪论.md?sign=35eef7fc79b6ca9ddf0cee181f91d35a&t=1549776343",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/EDA技术概述.md?sign=d43c8223fcaf72cd65c1ddef060c6585&t=1549776374",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/硬件描述语言.md?sign=5b8f0c8879f7ac31bb8f5858390a1c92&t=1549776404",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/ASIC库单元.md?sign=afe351ef3928cb7007e508d7c535343c&t=1549776423",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/HDL综合.md?sign=af3a9d2e4926c436e942fc08fb4cb9db&t=1549776444",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/Top-Down设计技术.md?sign=6f22d945f44a97fb891127db23d5265f&t=1549776464",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/开发软件.md?sign=21c5bf21608518de7fcc84e773e19086&t=1549776481",
        "https://687a-hznu-moo-86b1c5-1258102052.tcb.qcloud.la/mk/IP核与SOC.md?sign=69e1d8b68e79f942015b563336fdf895&t=1549776510"]]
    }
  },
  towxml: new Towxml(),
})
