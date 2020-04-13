import request from "./network"
export default function getGoodsDetailDate(data) {
    return request({
        url:"/goods/detail",
        data
    })
}