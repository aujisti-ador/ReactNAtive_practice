import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Album extends Component {
    render() {
        const {viewStyle,textStyle} = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>
                    Album!
                </Text>

            </View>
        );
    }
}

const styles = {

    viewStyle: {
        backgroundColor: '#e8e8e8',
        height: 60,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export default Album;