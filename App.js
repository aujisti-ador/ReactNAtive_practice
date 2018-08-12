/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './Components/Home';

export default class App extends Component{

    render() {
        return (
            <View>
                <Home />
            </View>
        );
    }
}
