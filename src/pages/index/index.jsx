import {Component} from 'react'
import {View, Text, Button} from '@tarojs/components'
import {connect} from "react-redux";
import './index.scss'
import {goNewPage, goPage} from "../../utils/utils";

@connect(({users}) => ({users}))
class Index extends Component {
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
            </View>
        )
    }
}

export default Index