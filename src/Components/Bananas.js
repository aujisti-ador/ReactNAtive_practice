import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 370, height: 200}}/>
        );
    }
}

export default Bananas;