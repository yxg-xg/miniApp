const cityList = require("../../citiseJson.js")
Page({
  data:{
    filtrate:[
      { filtrateName: "区域", },
      { filtrateName: "价格" },
      { filtrateName: "户型" },
      { filtrateName: "更多" }
    ],
    filtrateIndex:""
  },
  filtrateClick(event){
    let idx = event.currentTarget.dataset.index;
    this.data.filtrateIndex= idx
    console.log(event)
  
  },
  onLoad: function(){
    console.log(cityList);
    
  }
})