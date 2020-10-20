import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './next.scss'

export default class Next extends Component {

  state = {
    nextTheme: ''
  }

  componentWillMount () {
    console.log(this.$router.params)
    const { nextTheme } = this.$router.params
    this.setState({
      nextTheme
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: 'next页面标题'
  }

  render () {
    const { nextTheme } = this.state
    return (
      <View className='next'>
        <Text>获得上个页面的参数为：{nextTheme}</Text>
      </View>
    )
  }
}
