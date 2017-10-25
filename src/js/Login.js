/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,ToastAndroid,AsyncStorage
} from 'react-native';
import { StackNavigator,} from 'react-navigation'
import Register from './Register.js'
import arrData from './UserData.js'
class Login extends Component {
  static navigationOptions={
      headerTitle:'用户登录',
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

  login(){
    for(var i=0;i<arrData.length;i++){
        if(this._username._lastNativeText == arrData[i].userName){
            if(this._pwd._lastNativeText ==arrData[i].userPwd){
              ToastAndroid.show('登录成功',ToastAndroid.SHORT);
              const {navigate} = this.props.navigation;
              navigate('Index');
            }else if(this._pwd._lastNativeText == null){
              ToastAndroid.show('请输入密码',ToastAndroid.SHORT);
              break;
            }else{
              ToastAndroid.show('密码错误',ToastAndroid.SHORT);
              break;
            }
        }else{
           if(this._username._lastNativeText == null){
                ToastAndroid.show('请输入用户名',ToastAndroid.SHORT);
                break;
           }else if(this._pwd._lastNativeText == null){
                ToastAndroid.show('请输入密码',ToastAndroid.SHORT);
                break;
           }
        }
    }
    
  }

  register(){
    const {navigate} = this.props.navigation;
    navigate('Register');
  }
  render() {
    return (
      <View style={styles.loginmain}>
          <Image source={require('../images/userHeader/reg1.png')} style={styles.UserImg} />
          <View style={styles.row} >
            <Text style={styles.logintitlename}>账号</Text>
            <TextInput underlineColorAndroid={'transparent'} style={styles.logininput} placeholder='                手机号/用户名/邮箱' placeholderTextColor={'#ccc'} ref={ (_username) => this._username=_username } />
          </View>
          <View style={styles.row} >
            <Text style={styles.logintitlename}>密码</Text>
            <TextInput underlineColorAndroid={'transparent'} style={styles.logininput} placeholder='                      输入你的密码' placeholderTextColor={'#ccc'} secureTextEntry={true} ref={ (_pwd) => this._pwd=_pwd } />
          </View>
          <Text style={styles.forgetpwd} >忘记密码？</Text>
          <View style={styles.loginbtn}>
            <Button title='登陆' color={'#77428d'} onPress={this.login.bind(this)} />
          </View>
          <View style={styles.loginbtn}>
            <Button title='注册' color={'#8f59a6'} onPress={this.register.bind(this)} />
          </View>
          <View style={styles.thirdcoorp}>
          <Text style={styles.thirdtitle}>第三方合作</Text>
          <View style={styles.thirdlist}>
              <Image source={require('../images/weixin.png')} style={styles.thirdimg} />
              <Image source={require('../images/qq.png')} style={styles.thirdimg} />
              <Image source={require('../images/weibo.png')} style={styles.thirdimg} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginmain:{
    flexDirection:'column',
    width:360,
  },
  UserImg:{
    width:130,
    height:130,
    borderRadius:130,
    alignSelf:'center',
    marginTop:20,
    marginBottom:10,
  },
  logintitlename:{
    paddingRight:10,
    fontSize:14.5,
    paddingTop:23,
  },
  row:{
    flexDirection:'row',
    width:340,
    height:48,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderColor:'#ccc',
  },
  logininput:{
    width:320,
    marginTop:10,
    top:8,
  },
  forgetpwd:{
    fontSize:12,
    color:'#77428d',
    alignSelf:'flex-end',
    right:10,
    top:5,
    marginBottom:55,
  },
  loginbtn:{
    width:340,
    marginLeft:10,
    marginRight:10,
    elevation:0,
    marginBottom:10,
  },
  thirdlist:{
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:50,
    top:50,
  },
  thirdtitle:{
    fontSize:11.5,
    color:'#ccc',
    alignSelf:'center',
    top:35,
  },
  thirdimg:{
    width:50,
    height:50,
    marginRight:50,
  },
});

export default Login;