import React, { useState } from 'react';
import { Animated } from 'react-native';

const FadeUp = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))
    const [upAnim] = useState(new Animated.Value(40))
    
    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500
            }
        ).start();

        Animated.timing(
            upAnim,
            {
                toValue: 0,
                duration: 500
            }
        ).start();
    }, [])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
                marginTop: upAnim 
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export { FadeUp };