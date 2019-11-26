import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import FastImage from 'react-native-fast-image';

class NavButton extends React.Component {
    render() {
        let { icon, onPress, style } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                style={style}
            >
                <FastImage
                    source={icon}
                    style={styles.icon}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </TouchableOpacity>
        );
    }
}

export default NavButton;
