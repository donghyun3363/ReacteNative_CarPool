import React from 'react';
import debug from 'debug'
import {  View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Platform, AsyncStorage, StatusBar   } from 'react-native';
import {  Button  } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


  const {height, width } = Dimensions.get("window");
  const log = debug('app:component:Header');

  export default class Login extends React.Component {

    constructor(props) {
        super(props);
    
      }

    
    render() {
        return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"  />
            <View style={styles.default}>
                <Text style={styles.title}>카풀정보조회</Text>
            </View>
        </View>
        );
    
    }
  }

  const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: "#0067FF",
        alignItems: "center"
      },
      title: {
        color: "white",
        fontSize: 30,
        margin: 50,
        fontWeight: "200",
        marginBottom: 30
      },
      default: {
        backgroundColor: '#000000',
      },
    // upperBar: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#000000',
    // }
});