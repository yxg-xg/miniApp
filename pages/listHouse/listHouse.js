const cityList = require("../../citiseJson.js")
Page({
  data:{
    filtrate:[
      { filtrateName: "区域", },
      { filtrateName: "价格" },
      { filtrateName: "户型" },
      { filtrateName: "更多" }
    ],
    filtrateIndex:"-1",
    toggle:true,
    choicenessOne:[
      { choicenessPrice:"100万以下"},
      { choicenessPrice: "100-300万" },
      { choicenessPrice: "300-600万" },
      { choicenessPrice: "600万" },
    ],
    choicenessTwo:[
      { choicenessAdr:"海景地产"},
      { choicenessAdr: "养生地产" },
      { choicenessAdr: "品牌地产" },
      { choicenessAdr: "精品别墅" },

    ],
    recommendImg: [
      { 
        src: '/img/aa.jpg', 
        title: '海南绿地城', 
        small: '金江', 
        price: '10000', 
        discountsMsg: '优惠政策', 
        tally:[
          { text: "住宅" },
          { text: "酒店式公寓" }, 
          { text: "商铺" },
        ],
        recommendDiscounts:"保利崖州湾2期新品莱西 瞰海三至四房均价约17500元/平"
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
        recommendDiscounts: "保利崖州湾2期新品莱西 瞰海三至四房均价约17500元/平"
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
        recommendDiscounts: "保利崖州湾2期新品莱西 瞰海三至四房均价约17500元/平"
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
        recommendDiscounts: "保利崖州湾2期新品莱西 瞰海三至四房均价约17500元/平"
      }
    ],
    informationMain: [
      { informationMainText: "房产资讯房产资讯房产资讯房产资讯房产资讯", textSmall: "房产资讯房产产资讯房产资产资讯房产资产资讯房产资" }
    ]

  },
  filtrateClick(event){
    let idx = event.currentTarget.dataset.index;
    let toggle = event.currentTarget.dataset.toggle;
    let that = this;
    that.setData({
      filtrateIndex: idx, 
     // toggle: false
    })
    //that.setData(that.data.toggle = !that.data.toggle)
    
    
    console.log(toggle);
  
  },
  onLoad: function(){
    console.log();
    
  }
})