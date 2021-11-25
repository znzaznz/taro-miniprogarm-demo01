import Taro from "@tarojs/taro";

const goNewPage = (url)=>{
    Taro.navigateTo({
        url
    })
}

const goPage = (url)=>{
    Taro.redirectTo({
        url
    })
}

export {goPage,goNewPage}