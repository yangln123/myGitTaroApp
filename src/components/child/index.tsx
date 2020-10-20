import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text } from '@tarojs/components'

export default class Child extends Component {
  propTypes = {
    childName: PropTypes.string
  }
  defaultProps = {
    childName: ''
  }
  render () {
    const { childName } = this.props
    return (
      <View>
        <Text>我是创建的类{childName}</Text>
      </View>
    )
  }
}