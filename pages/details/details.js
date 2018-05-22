Page({

  /**
   * 页面的初始数据
   */
  data: {
    DetailsTab:[
      { textTitle:"实时动态"},
      { textTitle: "楼盘详情" },
      { textTitle: "楼盘相册" },
      { textTitle: "在售相册" },
    ],
    DetailsTabIndex:0,
    DetailsBuildParameter:[
      { icon: "/img/icon/kaifashang.png",name: "开发商",text:"海南程艳房地产公司"},
      { icon: "/img/icon/kaifang.png", name: "开盘时间", text: "海南程艳房地产公司" },
      { icon: "/img/icon/shijian.png", name: "交盘时间", text: "海南程艳房地产公司" },
      { icon: "/img/icon/loupan.png", name: "项目地址", text: "海南程艳房地产公司" },
      { icon: "/img/icon/huxing.png", name: "主力户型", text: "海南程艳房地产公司" },
      { icon: "/img/icon/nianxian.png", name: "产权年限", text: "海南程艳房地产公司" },
      
    ]
  },
  DetailsTabTitleClick(event){
    let idx = event.currentTarget.dataset.index;
    this.setData({
      DetailsTabIndex: idx,
      // toggle: false
    })
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
    console.log("hide")
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