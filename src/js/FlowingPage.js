/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Image,Picker,ToastAndroid,setTimeOut
} from 'react-native';
import { StackNavigator,} from 'react-navigation'

export default class FlowingPage extends Component {
  static navigationOptions={
      header:null
  }
  componentDidMount(){
    ToastAndroid.show('3秒后跳转到登录页面',ToastAndroid.SHORT)
    setTimeout(()=>{this.props.navigation.navigate('Login')},3000)
  }
  render() {
    return (
      <View>
          <Image source={require('./../images/flowingPage.png')} style={styles.img} />
          <Text style={styles.load} onPress={()=>{this.props.navigation.navigate('Login')}}>跳过</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img:{
    width:360,
    height:620,
    position:'absolute',
  },
  load:{
    width:70,
    backgroundColor:'#77428d',
    height:30,
    fontSize:14,
    color:'white',
    textAlign:'center',
    alignSelf:'flex-end',
    paddingTop:4,
    right:10,
    borderRadius:10,
    top:585,
    opacity:0.9,
  }
});