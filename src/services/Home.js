import Request from '../utils/taro-request'

export async function optionAllow(data){
    return Request({
        url:'common/getSearchConditions',
        method:'GET',
        data
    })
}