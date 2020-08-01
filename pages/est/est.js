Page({
  data: {
    //nav展开关闭状态控制
    quyuOpen: false,
    jiageOpen: false,
    fangxingOpen: false,
    moreOpen: false,
    paixuOpen: false,
    //查询条件数据
    quyu: [
      {
        index: 0, name: "不限", shangquan: [
          { index: 0, name: "不限" }]
      },
      {
        index: 1, name: "浦东", shangquan: [
          { index: 0, name: "不限" },
          { index: 1, name: "北蔡" },
          { index: 2, name: "碧云" },
          { index: 3, name: "川沙" },
          { index: 4, name: "高东" },
        ]
      },
      {
        index: 2, name: "徐汇", shangquan: [
          { index: 0, name: "不限" },
          { index: 1, name: "漕河泾" },
          { index: 2, name: "龙华" },
          { index: 3, name: "上海南站" },
          { index: 4, name: "田林" },
        ]
      },
    ],//区域
    shangquan: [
      { index: 0, name: "不限" }
    ],//商圈
    //价格
    jiage: [
      { index: 0, name: "200万以下" },
      { index: 1, name: "200-300万" },
      { index: 2, name: "300-400万" },
      { index: 3, name: "400-500万" },
      { index: 4, name: "500-800万" },
      { index: 5, name: "800-1000万" },
      { index: 6, name: "1000万以上" },
    ],
    //房型
    fangxing: [
      { index: 0, name: "一室" },
      { index: 1, name: "二室" },
      { index: 2, name: "三室" },
      { index: 3, name: "四室" },
      { index: 4, name: "五室" },
      { index: 5, name: "五室以上" },
    ],
    more: {//更多
      mianji: [
        { index: 0, name: "50㎡以下" },
        { index: 1, name: "50-70㎡" },
        { index: 2, name: "70-90㎡" },
        { index: 3, name: "90-110㎡" },
        { index: 4, name: "110-130㎡" },
        { index: 5, name: "130-150㎡" },
        { index: 6, name: "150㎡以上" }
      ],
      tese: [
        { index: 0, name: "必看好房" },
        { index: 1, name: "满五年" },
        { index: 2, name: "满两年" },
        { index: 3, name: "近地铁" },
        { index: 4, name: "VR房源" },
        { index: 5, name: "7日上新" },
        { index: 6, name: "随时看房" }
      ],
      chaoxiang: [
        { index: 0, name: "南北" },
        { index: 1, name: "朝南" },
        { index: 2, name: "朝东" },
        { index: 3, name: "朝北" },
        { index: 4, name: "朝西" },
      ],
      louceng: [
        { index: 0, name: "低楼层" },
        { index: 1, name: "中楼层" },
        { index: 2, name: "高楼层" },
      ]
    },
    paixu: [
      { index: 0, name: "默认排序" },
      { index: 1, name: "最新发布" },
      { index: 2, name: "总价从低到高" },
      { index: 3, name: "总价从高到低" },
      { index: 4, name: "单价从低到高" },
      { index: 5, name: "单价从高到低" }
    ],
    //条件选择
    quyuSelected: 0,
    shangquanSelected: 0,
    jiageSelected: [],
    fangxingSelected: [],
    loucengSelected: -1,
    chaoxiangSelected: -1,
    mianjiSelected: -1,
    teseSelected: -1,
    paixuSelected: 0,
    searchValue: "",
    //分页
    pageIndex: 1,
    loading: false,
    noMore: false,
    loadFailed: false,
    //条件面板固定
    top: 0,
    //房源信息
    ests: [],
  },

  onLoad: function (options) {
    this.setData({
      searchValue: options.searchValue == null ? "" : options.searchValue
    });
    this.getEsts(true);
  },

  /**
   * 条件导航菜单点击
   */
  tabNav: function (e) {
    var quyu_open = false;
    var jiage_open = false;
    var fangxing_open = false;
    var more_open = false;
    var paixu_open = false;
    var type = e.currentTarget.dataset.type;
    if (type === "quyu" && !this.data.quyuOpen) {
      quyu_open = true;
    }
    else if (type === "jiage" && !this.data.jiageOpen) {
      jiage_open = true;
    }
    else if (type === "fangxing" && !this.data.fangxingOpen) {
      fangxing_open = true;
    }
    else if (type === "paixu" && !this.data.paixuOpen) {
      paixu_open = true;
    }
    else if (type === "more" && !this.data.moreOpen) {
      more_open = true;
    };
    this.setData({
      quyuOpen: quyu_open,
      jiageOpen: jiage_open,
      fangxingOpen: fangxing_open,
      moreOpen: more_open,
      paixuOpen: paixu_open
    });
  },

  /**
   * 条件单选
   */
  singleSelect: function (e) {
    var type = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    if (type == "mianji") {
      this.setData({
        mianjiSelected: index
      });
    }
    else if (type == "tese") {
      this.setData({
        teseSelected: index
      });
    }
    else if (type == "chaoxiang") {
      this.setData({
        chaoxiangSelected: index
      });
    }
    else if (type == "louceng") {
      this.setData({
        loucengSelected: index
      });
    }
    else if (type == "quyu") {
      var shangquan = e.target.dataset.shangquan;
      this.setData({
        shangquan: shangquan,
        quyuSelected: index,
        shangquanSelected: 0
      })
    }
    else if (type == "shangquan") {
      this.setData({
        shangquanSelected: index
      });
    }
  },

  /**
   * 条件多选
   */
  multiSelect: function (e) {
    var index = e.currentTarget.dataset.index;
    var type = e.currentTarget.dataset.type;
    let selected;
    if (type == "jiage") {
      selected = this.data.jiageSelected;
    }
    else if (type == "fangxing") {
      selected = this.data.fangxingSelected;
    }

    var itemIndex = -1;
    for (var i = 0; i < selected.length; i++) {
      if (selected[i] == index) {
        itemIndex = i;
      }
    }
    if (itemIndex > -1) {
      selected.splice(itemIndex, 1);
    }
    else {
      selected.push(index);
    }

    if (type == "jiage") {
      this.setData({ jiageSelected: selected });
    }
    else if (type == "fangxing") {
      this.setData({ fangxingSelected: selected });
    }

  },

  /**
   * 选择排序
   */
  paixuSelect: function (e) {
    this.setData({
      paixuSelected: e.currentTarget.dataset.index
    });
    this.getEsts(true);
    this.tabNavHidden();
  },

  /**
   * 获取房源
   */
  getEsts: function (isInit) {
    var that = this;
    that.setData({
      loading: true,
      noMore: false,
      loadFailed: false
    });
    var data = [
      { img: "https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "苏州河畔精品2房，近环球港中山公园2.3.4.13", info: "2室1厅/56.53m²/南/中山北路3924弄", price: "315万", avgPrice: "55723元/㎡", tags: ["VR看房", "近地铁"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/110000-inspection/pc1_FNb8n0oGf_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "星河世纪城二期不靠马路南北通的复式房，有钥匙", info: "4室3厅/101m²/南 北/星河世纪城", price: "600万", avgPrice: "48965元/㎡", tags: ["随时可看", "近地铁"], hasVR: false },
      { img: "https://ke-image.ljcdn.com/110000-inspection/pc1_8xKL7AuBd_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "大虹桥  万达城市公寓，小三房，精装修，业主自住", info: "3室2厅/88.94m²/南 北/万达城市公寓", price: "467万", avgPrice: "53223元/㎡", tags: ["新上", "满五年"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/110000-inspection/e64dcd15-7916-401f-85f2-005ee03fc247_1000.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "双轨交 公园景观房 西边户全明户型 精装 满二年", info: "3室2厅/104.68m²/南 北/保利叶之林", price: "215万", avgPrice: "87723元/㎡", tags: ["VR看房", "随时可看"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "苏州河畔精品2房，近环球港中山公园2.3.4.13", info: "3室1厅/88m²/南/万寿新村(金山)", price: "531万", avgPrice: "34512元/㎡", tags: ["满二", "近地铁"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "苏州河畔精品2房，近环球港中山公园2.3.4.13", info: "2室1厅/56.53m²/南/中山北路3924弄", price: "315万", avgPrice: "55723元/㎡", tags: ["VR看房", "近地铁"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/110000-inspection/pc1_FNb8n0oGf_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "星河世纪城二期不靠马路南北通的复式房，有钥匙", info: "4室3厅/101m²/南 北/星河世纪城", price: "600万", avgPrice: "48965元/㎡", tags: ["随时可看", "近地铁"], hasVR: false },
      { img: "https://ke-image.ljcdn.com/110000-inspection/pc1_8xKL7AuBd_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "大虹桥  万达城市公寓，小三房，精装修，业主自住", info: "3室2厅/88.94m²/南 北/万达城市公寓", price: "467万", avgPrice: "53223元/㎡", tags: ["新上", "满五年"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/110000-inspection/e64dcd15-7916-401f-85f2-005ee03fc247_1000.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "双轨交 公园景观房 西边户全明户型 精装 满二年", info: "3室2厅/104.68m²/南 北/保利叶之林", price: "215万", avgPrice: "87723元/㎡", tags: ["VR看房", "随时可看"], hasVR: true },
      { img: "https://ke-image.ljcdn.com/310000-inspection/prod-2ca47998-57f2-4ff9-8ddd-4ab6155ba4c4.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com", title: "苏州河畔精品2房，近环球港中山公园2.3.4.13", info: "3室1厅/88m²/南/万寿新村(金山)", price: "531万", avgPrice: "34512元/㎡", tags: ["满二", "近地铁"], hasVR: true }
    ];
    that.setData({
      ests: isInit ? data : that.data.ests.concat(data),
      pageIndex: that.data.pageIndex + 1,
      loading: false,
      loadFailed: false,
      noMore: false
    })
  },

  searchEst: function (e) {
    var searchValue = e.detail.value;
    this.setData({
      searchValue: searchValue
    });
    this.getEsts(true);
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 重置房型
   */
  reset: function (e) {
    var type = e.currentTarget.dataset.type;
    if (type == "jiage") {
      this.setData({
        jiageSelected: []
      });
    }
    else if (type == "fangxing") {
      this.setData({
        fangxingSelected: []
      });
    }
    else if (type == "more") {
      this.setData({
        mianjiSelected: -1,
        teseSelected: -1,
        chaoxiangSelected: -1,
        loucengSelected: -1
      });
    }
  },

  /**
   * 确定选择
   */
  confirm: function () {
    this.getEsts(true);
    this.tabNavHidden();
  },

  /**
   * 收起查询条件面板
   */
  tabNavHidden: function () {
    this.setData({
      quyuOpen: false,
      jiageOpen: false,
      fangxingOpen: false,
      moreOpen: false,
      paixuOpen: false,
    })
  },

  /** 
   * 上拉加载更多房源
   */
  scrollToLower: function () {
    var that = this;
    var loading = that.data.loading;
    if (!that.data.noMore && !loading) {
      that.getEsts(false);
    }
  },

  /** 
   * 跳转到房源明细
   */
  toEstDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

})