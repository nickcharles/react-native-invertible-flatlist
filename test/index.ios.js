/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Switch,
} from 'react-native';
import { InvertibleFlatList } from 'react-native-invertible-flatlist';

export default class test extends Component {
  state = {
    horizontal: false,
  };

  render() {
    const items = [
      'Washington',
      'Adams',
      'Jefferson',
      'Madison',
      'Monroe',
      'Adams',
      'Jackson',
      'Van Buren',
      'Harrison',
      'Tyler',
      'Polk',
      'Taylor',
      'Fillmore',
      'Pierce',
      'Buchanan',
      'Lincoln',
      'Johnson',
      'Grant',
      'Hayes',
      'Garfield',
      'Arthur',
      'Cleveland',
      'Harrison',
      'Cleveland',
      'McKinley',
      'Roosevelt',
      'Taft',
      'Wilson',
      'Harding',
      'Coolidge',
      'Hoover',
      'Roosevelt',
      'Truman',
      'Eisenhower',
      'Kennedy',
      'Johnson',
      'Nixon',
      'Ford',
      'Carter',
      'Readan',
      'Bush',
      'Clinton',
      'Bush',
      'Obama',
      'Trump',
    ];

    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.buttonContainer}>
          <Switch
            onValueChange={(value) => this.setState({horizontal: value})}
            value={this.state.horizontal}
            onTintColor={'#e31c3d'}
            thumbTintColor={'#ffffff'}
            tintColor={'#ffffff'}
            style={{margin: 8}}
          />
          <Text style={styles.buttonText}>Horizontal</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.headerText}>FlatList</Text>
          <FlatList
            horizontal={this.state.horizontal}
            data={items}
            renderItem={({item}) => <Text style={styles.normalText}>{item}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.headerText}>InvertibleFlatList</Text>
          <InvertibleFlatList
            inverted
            horizontal={this.state.horizontal}
            data={items}
            renderItem={({item}) => <Text style={styles.normalText}>{item}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#112e51',
  },
  buttonText: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#0071bc',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  normalText: {
    fontSize: 17,
    paddingHorizontal: 16,
    color: '#212121',
  },
});

AppRegistry.registerComponent('test', () => test);
