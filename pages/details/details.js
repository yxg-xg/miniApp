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
    DetailsTabIndex:0
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