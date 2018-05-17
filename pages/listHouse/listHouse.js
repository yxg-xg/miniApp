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
    toggle:true
  },
  filtrateClick(event){
    let idx = event.currentTarget.dataset.index;
    let toggle = event.currentTarget.dataset.toggle;
    let that = this;
    that.setData({
      filtrateIndex: idx, 
      toggle: false
    })
    //that.setData(that.data.toggle = !that.data.toggle)
    
    
    console.log(toggle);
  
  },
  onLoad: function(){
    console.log();
    
  }
})