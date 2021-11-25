import {Component} from 'react'
import {View, Text, Button} from '@tarojs/components'
import {connect} from "react-redux";
import {goNewPage} from "../../utils/utils";

import './index.scss'
import IconFont from "../../components/iconfont";

@connect(({home}) => ({
    title:home.title
}))
class Index extends Component {

    constructor(props) {
        super(props);
        console.log(props.title);
    }

    componentDidMount() {
        this.props.dispatch({
            type:'home/fetchGetData',
            payload:{}
        }).then(res=>{
            if (res && res.status === 0){
                console.log(res.extData);
            }
        })
    }

    render() {
        return (
            <View className='index'>
                <Text>Hello world!</Text>
                <Button onClick={()=>{
                    goNewPage('/pages/show/index') //用绝对路径
                }}
                >点我跳转</Button>
                <IconFont name='staroff' />
            </View>
        )
    }
}

export default Index