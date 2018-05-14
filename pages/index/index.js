//index.js
//获取应用实例


Page({
  data: {
    imgUrls:[
      "/img/bnner/bnner.jpg",
      "/img/bnner/bnner.jpg",
      "/img/bnner/bnner.jpg"
      
    ],
    interval:3000,
    duration:800,
    recommendImg:[
      { src: '/img/aa.jpg', title: '海南绿地城', small: '金江', price: '10000', discountsMsg:'优惠政策' },
      { src: '/img/aa.jpg', title: '海南绿地城', small: '金江', price: '10000', discountsMsg: '优惠政策'},
      { src: '/img/aa.jpg', title: '海南绿地城', small: '金江', price: '10000', discountsMsg: '优惠政策'},
      { src: '/img/aa.jpg', title: '海南绿地城', small: '金江', price: '10000', discountsMsg: '优惠政策'}
    ]
  },
  
  onLoad: function () {
    
    console.log("index")
    
  }
 
})
