//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    advImgs:["https://ke-image.ljcdn.com/materials/appindexconf/d749b7e6758b505f02bfa930d16c4965.png","https://s1.ljcdn.com/pegasus/redskull/images/home/images/home/bg_header@1x.jpg"],
    menus:[
      {name: "二手房", icon: "https://ke-image.ljcdn.com/materials/appindexconf/d5592269bafbe134453afb01c5612658.png", url: "/pages/est/est"},
      {name: "新房", icon: "https://ke-image.ljcdn.com/materials/appindexconf/44b50fa3627b67a9102c82f96ebd9189.png", url: "/"},
      {name: "租房", icon: "https://ke-image.ljcdn.com/materials/appindexconf/94250adc5e77f9b816f77032e27a8412.png", url: ""},
      {name: "商铺办公", icon: "https://ke-image.ljcdn.com/materials/appindexconf/404dfdc61f6295aab8300b71d627f571.png", url: ""},
      {name: "海外", icon: "https://ke-image.ljcdn.com/materials/appindexconf/d10df2594bba41993ad72a7618c5727d.png", url: ""},
      {name: "找小区", icon: "https://ke-image.ljcdn.com/materials/appindexconf/a256a8f09470ed9ff77af5bbc50575cb.png", url: ""},
      {name: "卖房", icon: "https://ke-image.ljcdn.com/materials/appindexconf/27a471a22d806eb260639eca4548df8c.png", url: ""},
      {name: "查成交", icon: "https://ke-image.ljcdn.com/materials/appindexconf/da1b0d0441597bd3d4fbd7c1899fa375.png", url: ""},
      {name: "找经纪人", icon: "https://ke-image.ljcdn.com/materials/appindexconf/d95c1eaa728a7ed1cfed4bfaad233588.png", url: ""},
      {name: "去估价", icon: "https://ke-image.ljcdn.com/materials/appindexconf/1db775dad6b0200211426c1737f74e7c.png", url: ""}
    ],
    newPlots:[
      {img:"https://image1.ljcdn.com/newhouse-user-image/64be4374b55741ef22b166fc1f6f6405.png!m_fill,w_280,h_210,l_fbk",title:"祥源漫城",info:"86-105㎡",price:"66000元/㎡",tag:"嘉定"},
      {img:"https://image1.ljcdn.com/newhouse-user-image/c6246a4e99118dfba7a395755cd01cec.jpg!m_fill,w_280,h_210,l_fbk",title:"虹桥金茂悦",info:"99-144㎡",price:"46000元/㎡",tag:"徐汇"},
      {img:"https://image1.ljcdn.com/newhouse-user-image/c361f66548df4815bd02c2d16a7f312a.png!m_fill,w_280,h_210,l_fbk",title:"海玥金茂悦",info:"2486-105㎡",price:"76000元/㎡",tag:"上海周边"},
      {img:"https://image1.ljcdn.com/newhouse-user-image/c6246a4e99118dfba7a395755cd01cec.jpg!m_fill,w_280,h_210,l_fbk",title:"虹桥金茂悦",info:"99-144㎡",price:"88000元/㎡",tag:"青浦"},
      {img:"https://image1.ljcdn.com/newhouse-user-image/64be4374b55741ef22b166fc1f6f6405.png!m_fill,w_280,h_210,l_fbk",title:"祥源漫城",info:"86-105㎡",price:"46000元/㎡",tag:"青浦"},
    ],
    sellEsts:[
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_fGmpgd3zu_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"2室1厅/46㎡",info:"39人关注此房",price:"240万",tag:"长宁"},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_FNb8n0oGf_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"2室1厅/81㎡",info:"161人关注此房",price:"359万",tag:"徐汇"},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_sPcFVscHY_2.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"2室1厅/112㎡",info:"241人关注此房",price:"420万",tag:"虹口"},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_FNb8n0oGf_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"2室1厅/78㎡",info:"91人关注此房",price:"340万",tag:"长宁"},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_fGmpgd3zu_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"2室1厅/92㎡",info:"72人关注此房",price:"418万",tag:"闵行"},
    ],
    favorSellEsts:[
      {img:"https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"苏州河畔精品2房，近环球港中山公园2.3.4.13",info:"2室1厅/56.53m²/南/中山北路3924弄",price:"315万",avgPrice:"55723元/㎡",tags:["VR看房","近地铁"],hasVR:true},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_FNb8n0oGf_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"星河世纪城二期不靠马路南北通的复式房，有钥匙",info:"4室3厅/101m²/南 北/星河世纪城",price:"600万",avgPrice:"48965元/㎡",tags:["随时可看","近地铁"],hasVR:false},
      {img:"https://ke-image.ljcdn.com/110000-inspection/pc1_8xKL7AuBd_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"大虹桥  万达城市公寓，小三房，精装修，业主自住",info:"3室2厅/88.94m²/南 北/万达城市公寓",price:"467万",avgPrice:"53223元/㎡",tags:["新上","满五年"],hasVR:true},
      {img:"https://ke-image.ljcdn.com/110000-inspection/e64dcd15-7916-401f-85f2-005ee03fc247_1000.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"双轨交 公园景观房 西边户全明户型 精装 满二年",info:"3室2厅/104.68m²/南 北/保利叶之林",price:"215万",avgPrice:"87723元/㎡",tags:["VR看房","随时可看"],hasVR:true},
      {img:"https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",title:"苏州河畔精品2房，近环球港中山公园2.3.4.13",info:"3室1厅/88m²/南/万寿新村(金山)",price:"531万",avgPrice:"34512元/㎡",tags:["满二","近地铁"],hasVR:true}
    ],

  },
  
  onLoad: function () {
    
  },

  toPage: function (e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url,
    })
    // if (this.selectComponent("#loginId").checkUserInfo()) { //手机号已经认证过
    //   wx.navigateTo({
    //     url: url,
    //   })
    // }
  },


  
})
