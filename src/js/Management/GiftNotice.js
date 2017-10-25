/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,ToastAndroid
} from 'react-native';
import { StackNavigator,} from 'react-navigation'
let b=null;
class GiftNotice extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      headerTitle:'礼物通知',
      headerLeft:<Text style={{color:'white',fontSize:18,alignSelf:'center',marginLeft:10,}} onPress={()=>{b()}}>&lt;返回</Text>,
      headerStyle:{
        width:384,
        height:43,
        backgroundColor:'#77428d',
        elevation:0,
      },
      headerLeftTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
        marginLeft:-10,
      },
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
        marginLeft:-10,
      }
  }

componentDidMount(){
  b=this.props.navigation.goBack;
}
  render() {
    return <Text style={styles.message}>你还没收到任何礼物哦，快去增加自己的魅力值吧！</Text>
  }
}

const styles = StyleSheet.create({
  message:{
    color:'#bbb',
    alignSelf:'center',
    top:20,
  }
});

export default GiftNotice;