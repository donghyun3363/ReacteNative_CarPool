import React from 'react';
import debug from 'debug'
import {  Platform,  View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Platform, AsyncStorage, StatusBar   } from 'react-native';
import {  Button  } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


  const {height, width } = Dimensions.get("window");
  const log = debug('app:component:Header');

  type Props = {};
  export default class Login extends React.Component {

    constructor(props) {
        super(props);
    
      }

    
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.default}>
                <Text style={styles.title}>카풀정보조회</Text>
                <Text style={styles.title}>카풀정보조회</Text>
                <Text style={styles.title}>카풀정보조회</Text>
            </View>
        </View>
        );
    
    }
  }

  const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: "red",
      },
      title: {
        padding: 20,
        margin: 0,
        marginHorizontal: 10,
        backgroundColor:"#ef4c",
        width: 125,
        height: 125,
        borderWidth: 1,
        borderColor:"red",
        textAlign:"center",
      },
      default: {
        backgroundColor: '#000000',
      },
});

const instructions = Platform.select({
  ios: "ios",
  android: "android",
});