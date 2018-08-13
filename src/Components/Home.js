import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class Home extends Component {

    constructor() {
        super();
        this.state = {
            "customStyle": {
                'color': 'red',
            }
        }

        setInterval(() => {
            if (this.state.customStyle.color === 'red') {
                this.setState({
                    customStyle: {
                        color: 'green'
                    }
                })
            } else {
                this.setState({
                    customStyle: {
                        color: 'red'
                    }
                })
            }
        }, 1000)
    }

    render() {
        return (
            <View>
                <Text style={[{
                    color: this.state.customStyle.color,
                }, styles.customStyle]}>Welcome to Bits React Native!</Text>
                <Text style={styles.welcome}>Trial By XAdor</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12ff6b',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    customStyle: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'left',
        color: '#a81b1b',
        marginBottom: 5,
    },
});

export default Home;