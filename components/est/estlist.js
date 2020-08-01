var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    info: {
      type: String,
      value: ""
    },
    hasVR: {
      type: Boolean,
      value: false
    },
    price: {
      type: String,
      value: ""
    },
    avgPrice: {
      type: String,
      value: ""
    },
    tags: {
      type: Array,
      value: []
    }
  },

  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    toDetail: function (e) {
      let pages = getCurrentPages();    //获取加载的页面
      let currentPage = pages[pages.length-1];    //获取当前页面的对象
      let loginComponent = currentPage.selectComponent("#loginId");
      if (loginComponent.checkUserInfo() || loginComponent == null) { //手机号已经认证过 或者 不需要判定认证信息
        let charId = e.currentTarget.dataset.charid;
        let rentSellType = e.currentTarget.dataset.rentselltype;
        wx.navigateTo({
          url: `/pages/est/detail/detail?charId=${charId}&rentSellType=${rentSellType}`,
        });
      }
    },

    imgLoadError: function () {
      console.log("imgLoadError");
      this.setData({
        coverImgUrl: app.globalData.defaultEstImg,
        imgLoadSucc: false
      })
    },


  }
})
