import React from 'react';
import {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import DriveSearch from "./components/driveSearch";
import DriveRegist from "./components/driveRegist";
import DriveInput from "./components/regist/driveinput";
import Login from "./components/login"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewName : false
    }

    this._controlViewChange = this._controlViewChange.bind(this);
  }

  _controlViewChange = (name) => {
    console.log("name : "+name);
    this.setState({
      viewName: name
    });
  };


  render() {
    const { viewName } = this.state;
    // var movie = [
    //   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
    // ];
    return (
      <View style={styles.container}>
            { viewName ? <DriveSearch /> : <Login />  }
      </View>
      // <View style={styles.container}>
      //   <Text>'Title'</Text>
      //   <Text>'2015'</Text>
      //   <Image source={{uri: 'http://i.imgur.com/UePbdph.jpg'}} 
      //   style={styles.thumbnail}/>
      // </View>

      // <View style={styles.container}>
      //   <Image source={{uri: 'http://i.imgur.com/UePbdph.jpg'}} 
      //   style={styles.thumbnail}/>
      //   <View style={styles.rightContainer}>
      //     <Text style={styles.title}>'Title'</Text>
      //     <Text style={styles.year}>'2015'</Text>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});
