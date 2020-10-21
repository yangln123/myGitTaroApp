import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Child from "../../components/child";
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: "hello 前端骚年"
  }

  goNext() {
    Taro.navigateTo({url:'/pages/next/next?nextTheme=入参'})
  }

  render () {
    const { name } = this.state
    return (
      <View className='index'>
        <Text>{name}</Text>
        <Child childName ="对象{child}"/>
        <Button onClick={this.goNext}>我吃好了</Button>
      </View>
    )
  }
}
