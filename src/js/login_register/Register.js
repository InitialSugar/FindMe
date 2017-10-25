/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput
} from 'react-native';
import { StackNavigator,} from 'react-navigation'

class Register extends Component {
  static navigationOptions={
      headerTitle:'用户注册',
      headerLeft:null,
      headerStyle:{
        width:384,
        height:43,
        backgroundColor:'#77428d',
        elevation:0,
      },
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
        marginLeft:-10,
      }
  }
  RegisterNext(){
      if(this._userInputName._lastNativeText != null){
        const {navigate} =this.props.navigation;
        navigate('RegUserInfo')
      }else{
        alert('请输入你的昵称')
      }
  }
  render() {
    return (
      <View>
          <View>
              <Text style={styles.replaceImg}>+</Text>
              <Image source={require('../images/userHeader/reg1.png')} style={styles.RegisterUserImg} />
          </View>
          <View style={styles.RegisterUserName}>
              <TextInput placeholder='请输入你的昵称' placeholderTextColor={'#ccc'} underlineColorAndroid={'transparent'} style={{top:10,textAlign:'center'}} ref={ (_userInputName)=> this._userInputName=_userInputName} />
          </View>
          <Text style={styles.choiceface}>选择封面</Text>
          <View style={styles.RegisterNext} >
              <Button title='下一步' onPress={this.RegisterNext.bind(this)}  color={'#77428d'} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginmain:{
    width:360,
  },
  RegisterUserImg:{
    width:130,
    height:130,
    borderRadius:130,
    alignSelf:'center',
    marginTop:105,
  },
  replaceImg:{
    fontSize:30,
    height:40,
    width:40,
    textAlign:'center',
    borderRadius:50,
    borderWidth:2,
    marginTop:105,
    color:'#77428d',
    position:'absolute',
    zIndex:20,
    marginLeft:210,
    borderColor:'#77428d',
  },
  RegisterUserName:{
    width:340,
    marginLeft:10,
    borderBottomWidth:1,
    borderColor:'#77428d',
  },
  choiceface:{
    fontSize:15,
    color:'#aaa',
    paddingTop:202,
    textAlign:'center',
  },
  RegisterNext:{
    backgroundColor:'#77428d',
    elevation:0,
    marginTop:35,
  },
});

export default Register;