import request from "./network"

//轮播图请求
export function getSwiperDate() {
    return request({
        url: '/home/swiperdata'
    })
}

// 分类导航请求
export function getCategoryNavDate() {
    return request({
        url: '/home/catitems'
    })
}
// 楼层数据请求
export function getFloorDate() {
    return request({
        url: '/home/floordata'
    })
}