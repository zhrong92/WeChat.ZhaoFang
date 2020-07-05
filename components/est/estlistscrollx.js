// components/est/estlistscrollx.js
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
    price: {
      type: String,
      value: ""
    },
    tag: {
      type: String,
      value: ""
    }
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
    toDetail : function(e) {
      let charId = e.currentTarget.dataset.charid;
      let type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: `/pages/est/shangye/detail?charId=${charId}&type=${type}`,
      });
    },

  }
})
