//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const RNSwift = requireNativeComponent('RNSwift', RNSwiftView)

export default class RNSwiftView extends Component {
  render () {
    return <RNSwift {...this.props} />
  }
}

RNSwiftView.propTypes = {
  exampleProp: React.PropTypes.any
}
