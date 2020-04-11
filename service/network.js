const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
export default function request(option) {
    return new Promise((resoleve, reject) => {
        wx.request({
          url: baseUrl+ option.url,
          method: option.method || "get",
          data: option.data || {},
          success: resoleve,
          fail: reject
        })
    })
}