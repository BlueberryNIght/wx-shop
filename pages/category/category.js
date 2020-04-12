// pages/category/category.js
import getCategoriesDate from "../../service/category"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    catesMuneList: [],
    catesContent: [],
    currentIndex: 0,
    scrollTop: 0
  },
  async _getCategoriesDate() {
    const {data:res} = await getCategoriesDate()
      const catesMuneList = res.message.map(item => item.cat_name)
      const catesContent = res.message[0].children
      // 数据请求成功后存入本地缓存中
      wx.setStorageSync('categories', {
        time: Date.now(),
        data: res.message
      });
      this.setData({
        categories: res.message,
        catesMuneList,
        catesContent
      })
  },
  // 左侧菜单栏点击事件
  tabClick(event) {
    const { index } = event.currentTarget.dataset
    this.setData({
      currentIndex: index,
      catesContent: this.data.categories[index].children,
      scrollTop: 0   //每次点击后让右侧内容区域返回顶部
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断本地缓存有没有旧的categories数据
    // 没有则执行数据请求
    // 有则判断旧数据是否过期，没有过期则使用缓存的数据
    const Cates = wx.getStorageSync('categories');
    if (!Cates) {
      // 重新发送请求
      this._getCategoriesDate()
    } else {
      // 时间过期则重新发送请求
      if (Date.now() - Cates.time > 1000*10) {
        this._getCategoriesDate()
        
      }else {
        console.log("旧数据");
        // 使用旧数据
        const catesMuneList = Cates.data.map(item => item.cat_name)
        const catesContent = Cates.data[0].children
        this.setData({
          catesMuneList,
          catesContent,
          categories:Cates.data
        })      
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})