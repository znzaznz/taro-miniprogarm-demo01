import {Text, View} from '@tarojs/components'
import {connect} from "react-redux";
import {AtIcon} from "taro-ui";
import {goNewPage, goPage} from "../utils/utils";

const iconImg = {
    '首页':'calendar',
    '展示':'home'
}

const list = [
    {
        pagePath: "/pages/index/index",
        text: '首页'
    },
    {
        pagePath: "/pages/show/index",
        text: '展示'
    }
]

const index = () => {
    return (
        <View>
            {
                list.map((item,number)=>{
                    return <View onClick={()=>goPage(item.pagePath)} key={`tab_key_${number}`}>
                        <AtIcon value={iconImg[item.text]} />
                        <Text>{item.text}</Text>
                    </View>
                })
            }
        </View>
    )
}

export default connect()(index) 