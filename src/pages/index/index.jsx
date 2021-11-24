import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {connect} from "react-redux";
import './index.scss'

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
            </View>
        )
    }
}

export default Index