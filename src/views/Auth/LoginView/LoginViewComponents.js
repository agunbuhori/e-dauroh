import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Spinner, Text } from '@ui-kitten/components';
import Modal from "react-native-modal";
import { layout, dimensions } from '../../../global/theme';

export class LoginSuccessModal extends React.Component {

    state = {
        visible: false
    }

    static getDerivedStateFromProps(props, state) {
        return {
            visible: props.visible
        };
    }

    render() {
        return (
            <Layout>
                <Modal isVisible={this.state.visible} onBackdropPress={this.props.callback}>
                    <Layout style={styles.modal}>
                        <Spinner size="giant"/>
                        <Text style={{...layout.mt1}}>Memuat</Text>
                    </Layout>
                </Modal>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        ...layout.p2,
        ...layout.centered,
        borderRadius: dimensions.gap
    }
});