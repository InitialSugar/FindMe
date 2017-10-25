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

class RegUserInfo extends Component {
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
    const {navigate} =this.props.navigation;
    navigate('Index')
  }
  render() {
    return (
      <View>
          <View>
              <Image source={require('../images/userHeader/reg1.png')} style={styles.RegisterUserImg} />
              <View style={styles.RegInfoCenter} >
                <Text style={styles.regtitle}>电子邮件</Text>
                <TextInput style={styles.reginput} underlineColorAndroid={'transparent'} placeholder='             Zunker@126.com' placeholderTextColor={'#ccc'}  ref={ (_email) => this._email=_email } />
              </View>
              <View style={styles.RegInfoCenter} >
                <Text style={styles.regtitle}>密码</Text>
                <TextInput style={styles.reginput} underlineColorAndroid={'transparent'} placeholder='            密码不能小于8位数' placeholderTextColor={'#ccc'}  ref={ (_pwd) => this._pwd=_pwd } />
              </View>
              <View style={styles.RegInfoCenter} >
                <Text style={styles.regtitle}>所在地</Text>
                <TextInput style={styles.reginput} underlineColorAndroid={'transparent'} placeholder='                  请选择所在地' placeholderTextColor={'#ccc'}  ref={ (_address) => this._address=_address } />
              </View>
              <View style={styles.RegInfoCenter} >
                <Text style={styles.regtitle}>生日</Text>
                <TextInput style={styles.reginput} underlineColorAndroid={'transparent'} placeholder='                    请选择生日' placeholderTextColor={'#ccc'}  ref={ (_birthday) => this._birthday=_birthday } />
              </View>
              <View style={styles.RegInfoCenter} >
                <Text style={styles.regtitle}>性别</Text>
                <TextInput style={styles.reginput} underlineColorAndroid={'transparent'} placeholder='             ' placeholderTextColor={'#ccc'}  ref={ (_sex) => this._sex=_sex } />
              </View>
              <View style={styles.RegisterNext} >
                  <Button title='下一步' onPress={this.RegisterNext.bind(this)}  color={'#77428d'} />
              </View>
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
    marginTop:33,
  },
  RegInfoCenter:{
    flexDirection:'row',
    borderBottomWidth:1,
    marginLeft:10,
    marginRight:10,
    height:58,
    borderColor:'#ccc',
  },
  regtitle:{
    paddingRight:10,
    fontSize:14.5,
    paddingTop:33,
    width:70,
  },
  reginput:{
    width:320,
    marginTop:10,
    top:8,
  },
  RegisterNext:{
    backgroundColor:'#77428d',
    elevation:0,
    marginTop:90,
  },
});

export default RegUserInfo;