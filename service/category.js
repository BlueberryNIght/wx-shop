import request from "./network"
export default function getCategoriesDate() {
    return request({
        url:'/categories'
    })
}