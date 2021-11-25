import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtAvatar, AtButton} from "taro-ui";
import './index.scss'

class Index extends Component {
    render() {
        return (
            <View className='index'>
                <Text>show</Text>
                <AtButton>按钮文案</AtButton>
            </View>
        )
    }
}

export default Index