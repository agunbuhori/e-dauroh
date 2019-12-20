//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { RNSwift } = NativeModules

export default {
  exampleMethod () {
    return RNSwift.exampleMethod()
  },

  EXAMPLE_CONSTANT: RNSwift.EXAMPLE_CONSTANT
}
