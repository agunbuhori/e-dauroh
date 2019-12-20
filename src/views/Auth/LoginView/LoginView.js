import React, { Component } from 'react';
import { 
    TouchableOpacity, 
    ImageBackground, 
    View, 
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { Text } from '@ui-kitten/components';
import { FadeUp } from './LoginViewAnimations';
import { login } from '../../../redux/actions/AuthAction';

import LoginViewStyles from './LoginViewStyles';
import { LoginSuccessModal } from './LoginViewComponents';

const IMAGE_BACKGROUND = require("../../../assets/images/login-background.png");

class LoginView extends Component {
    state = {
        loginSuccess: false
    }

    constructor(proos) {
        super(proos);
        StatusBar.setBarStyle("light-content");
    }
    
    authenticate() {
        // this.setState({loginSuccess: true});
        this.setState({loginSuccess: true});
    }

    render() {
        return (
            <ImageBackground source={IMAGE_BACKGROUND} style={LoginViewStyles.login}>
                <LoginSuccessModal visible={this.state.loginSuccess} callback={() => this.setState({loginSuccess: false})}/>

                <FadeUp style={LoginViewStyles.formWrapper}>
                    <Text category="h1" appearance="alternative">Dauroh Dimanapun</Text>
                    <Text category="s1" appearance="alternative">Cukup satu akun bagi antum untuk mengikuti dauroh para asatidz.</Text>

                    <View style={LoginViewStyles.buttonWrapper}>
                        <TouchableOpacity style={LoginViewStyles.whatsappButton} activeOpacity={0.8} onPress={this.authenticate.bind(this)}>
                            <Text style={LoginViewStyles.whatsappText}>MASUK</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={LoginViewStyles.registerButton} activeOpacity={0.8}>
                            <Text style={LoginViewStyles.registerText}>MENDAFTAR</Text>
                        </TouchableOpacity>
                    </View>
                </FadeUp>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authentication
});

const mapDispatchToProps = dispatch => ({ 
    authenticate: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);