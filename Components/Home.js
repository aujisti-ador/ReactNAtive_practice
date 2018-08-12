import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Home extends Component {

    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n' +
            '         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '         Ut enim ad   minim veniam, quis nostrud  exercitation ullamco laboris \n' +
            '         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
            '         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
            '         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n' +
            '         officia deserunt mollit anim id est laborum.dfjldkjf jkhjh'
    }

    updateState = () => this.setState({myState: 'The state is updated'})

    render() {
        return (
            <View>
                <Text onPress={this.updateState}>
                    {this.state.myState}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: 'red',
        margin: 10,
    },
    instructions: {
        textAlign: 'left',
        color: '#a81b1b',
        marginBottom: 5,
    }
});

export default Home;