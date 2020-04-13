// pages/goods_list/goods_list.js
import getGoodsListDate from "../../service/goodsList"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabTitles: ['综合', '销量', '价格'],
        // 搜索参数
        queryParams: {
            query: '',
            cid: '',
            pagenum: 1,
            pagesize: 10
        },
        goodsList: [],
        total: 0
    },
    // tabs 选项卡点击事件
    handleItemClick() {
        console.log('ddd');

    },
    // 数据请求
    async _getGoodsListDate() {
        wx.showLoading({
            title: '数据加载中...',
        })
        const data = this.data.queryParams
        const { data: res } = await getGoodsListDate(data)
        wx.hideLoading({
            // 数据加载完成关闭提示框
        })
        //数据重置后关闭上拉刷新动作
        wx.stopPullDownRefresh()
        this.setData({
            goodsList: [...this.data.goodsList, ...res.message.goods],
            total: res.message.total
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.queryParams.cid = options.cid
        this._getGoodsListDate()
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
        this.data.queryParams.pagenum = 1
        this.data.goodsList = []
        this._getGoodsListDate()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // 判断下一页是否还有数据  1.获取总页数 2.获取当前页码  
        // 当前页码大于等于总页数 表示没有数据了  弹出提示框 

        if (this.data.goodsList.length >= this.data.total) {
            wx.showLoading({
                title: '没有更多数据了...',
            })
            setTimeout(() => {
                wx.hideLoading({

                })
            }, 300)

        } else {
            console.log('加载一次');
            this.data.queryParams.pagenum++
            this._getGoodsListDate()
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})