//index.js
//获取应用实例
const app = getApp()
import {
  getSwiperDate,
  getCategoryNavDate,
  getFloorDate
} from "../../service/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    categroyNav: [],
    floors: []
  },
  // methods
  //获取轮播图数据
  async _getSwiperDate() {
    const { data: res } = await getSwiperDate()
    this.setData({
      banners: res.message
    })
  },
  // 获取分类导航数据
  async _getCategoryNavDate() {
    const {data: res} = await getCategoryNavDate()
      this.setData({
        categroyNav: res.message
      })
  },
  async _getFloorDate() {
    const {data: res} = await getFloorDate()
      this.setData({
        floors: res.message
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getSwiperDate()
    this._getCategoryNavDate()
    this._getFloorDate()
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