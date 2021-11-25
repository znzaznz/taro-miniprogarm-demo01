import { useGlobalIconFont } from './components/iconfont/helper'

export default {
    pages: [
        "pages/main/index",
        "pages/show/index",
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usingComponents: Object.assign(useGlobalIconFont()),
    tabBar:{
        custom:false,
        position:"bottom",
        color:'#e5082e',
        selectedColor:"#9d0d29",
        backgroundColor:"#FFC0CB",
        list:[
            {
                "iconPath":"assets/home.png",
                pagePath:"pages/main/index",
                text:'首页'
            },
            {
                "iconPath":"assets/show.png",
                pagePath: "pages/show/index",
                text:'展示'
            }
        ]
    }
}
