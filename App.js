/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './src/Components/Home';
import Bananas from "./src/Components/Bananas";
import Album from "./src/Components/Album";

export default class App extends Component{

    render() {
        return (
            <View>
                {/*<Home/>*/}
                {/*<Bananas/>*/}
                <Album/>
            </View>
        );
    }
}
