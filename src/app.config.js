export default {
    pages: [
        "pages/index/index",
        "pages/show/index",
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    requiredBackgroundModes: ["audio"],
    tabBar:{
        custom:false,
        position:"bottom",
        list:[
            {
                pagePath:"pages/index/index",
                text:'首页'
            },
            {
                pagePath: "pages/show/index",
                text:'展示'
            }
        ]
    }
}
