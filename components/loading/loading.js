// components/loading/loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading:{
      type:Boolean,
      value:false
    },
    noMore:{
      type:Boolean,
      value:false
    },
    loadFailed:{
      type:Boolean,
      value:false
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

  }
})
