//  Created by react-native-create-bridge

package com.swift.rnswift

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.JavaScriptModule
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

import java.util.Arrays

class RNSwiftPackage : ReactPackage {
    
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        // Register your native module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#register-the-module
        return Arrays.asList<NativeModule>(
            RNSwiftModule(reactContext)
        )
    }

    
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        // https://facebook.github.io/react-native/docs/native-components-android.html#4-register-the-viewmanager
        // Register your native component's view manager
        return Arrays.asList<ViewManager<*, *>>(
            RNSwiftManager()
        )
    }

}
