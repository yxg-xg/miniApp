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
      {
        src: '/img/aa.jpg', 
        title: '海南绿地城', 
        small: '金江', 
        price: '10000', 
        discountsMsg: '优惠政策',
        tally: [
          { text: "住宅" },
          { text: "酒店式公寓" },
          { text: "商铺" },
        ], 
      },
      {
        src: '/img/aa.jpg',
        title: '海南绿地城',
        small: '金江',
        price: '10000',
        discountsMsg: '优惠政策',
        tally: [
          { text: "住宅" },
          { text: "酒店式公寓" },
          { text: "商铺" },
        ],
      },
      {
        src: '/img/aa.jpg',
        title: '海南绿地城',
        small: '金江',
        price: '10000',
        discountsMsg: '优惠政策',
        tally: [
          { text: "住宅" },
          { text: "酒店式公寓" },
          { text: "商铺" },
        ],
      },
      {
        src: '/img/aa.jpg',
        title: '海南绿地城',
        small: '金江',
        price: '10000',
        discountsMsg: '优惠政策',
        tally: [
          { text: "住宅" },
          { text: "酒店式公寓" },
          { text: "商铺" },
        ],
      },
    ],
    informationMain:[
      { informationMainText: "房产资讯房产资讯房产资讯房产资讯房产资讯", textSmall:"房产资讯房产产资讯房产资产资讯房产资产资讯房产资"}
    ]
  },
  
  onLoad: function () {
    
    console.log("index")
    
  }
 
})
