// pages/goods_detail/goods_detail.js
import getGoodsDetailDate from "../../service/goods_detail"
Page({
    /**
     * 页面的初始数据
     */
    data: {
        goods_id: 0,
        goodsObj:{}
    },
    // 数据请求
    async _getGoodsDetailDate() {
        const { data: res } = await getGoodsDetailDate({
            goods_id: this.data.goods_id
        })
        console.log(res.message.pics);
        this.setData({
            goodsObj:{
                goods_id: this.data.goods_id,
                pics:res.message.pics,
                goods_price:res.message.goods_price,
                goods_name:res.message.goods_name,
                // 部分手机不支持webp格式文件
                // 找后台修改（一般做法）
                // 临时 自己替换 webp => jpg
                goods_introduce:res.message.goods_introduce.replace(/\.webp/g,'.jpg')
            }
        })
    },
    // 轮播图放大预览
    handlePreviewImage(event) { 
        const urls = this.data.goodsObj.pics.map(v => v.pics_mid)
        const current = event.currentTarget.dataset.url
        wx.previewImage({
          urls,
          current
        })
        
    },
    // 加入购物车
    // 判断缓存是否已经存在商品 ，有则数量加1， 无则设置数量为1并添加到缓存
    handleCartAdd() {
        let cart = wx.getStorageSync('cart') || []
        let index = cart.findIndex(v => v.goods_id === this.data.goodsObj.goods_id)
        if(index === -1) {
            this.data.goodsObj.num = 1
            cart.push(this.data.goodsObj)
        }else{
            cart[index].num ++
        }
        wx.setStorageSync('cart', cart)
        wx.showToast({
          title: '加入购物车成功！！',
          icon:'success',
          mask:true
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.goods_id = options.goods_id
        this._getGoodsDetailDate()
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