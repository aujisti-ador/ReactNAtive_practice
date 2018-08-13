/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './Components/Home';
import Bananas from "./Components/Bananas";

export default class App extends Component{

    render() {
        return (
            <View>
                {/*<Home/>*/}
                <Bananas/>
            </View>
        );
    }
}
