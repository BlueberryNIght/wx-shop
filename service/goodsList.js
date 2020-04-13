import request from "./network"
export default function getGoodsListDate(data) {
    return request({
        url:'/goods/search',
        data: data
    })
}