/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,ToastAndroid,TouchableOpacity
} from 'react-native';
import { StackNavigator,} from 'react-navigation'

class Management extends Component {
  static navigationOptions={
      headerTitle:'觅管理',
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
        marginLeft:-20,
      },
      tabBarLabel:({focused})=>focused?'':'觅管理',
      tabBarIcon:({ tintColor, focused}) => (
        <Image
          source={focused?require('../../images/user.png'):null}
          style={[{width:25,height:25}, {tintColor: tintColor}]}
        />
      ),
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
      }
  }
  quit(){
    ToastAndroid.show('退出成功，返回登录页面',ToastAndroid.SHORT);
    const {navigate} =this.props.navigation;
    navigate('Login');
  }
  systemSet(){
    const {navigate} = this.props.navigation;
    navigate('SystemSet');
  }

  

  render() {
    return (
      <View>
            <TextInput placeholder='                                     输入搜索关键字' style={styles.search} placeholderTextColor='#ccc' underlineColorAndroid={'transparent'} />
            <View style={styles.manageList_one}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyIndex')}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/myhome.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle}>我的首页</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ToastAndroid.show('谁看过你我不告诉你',ToastAndroid.SHORT)}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/view.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >谁看过我</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.manageList_one}>
                <TouchableOpacity onPress={()=>{ToastAndroid.show('目前没有任何活动哦',ToastAndroid.SHORT)}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/activity.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >官方活动</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RechargeBean')}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/recharge.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >充值银豆</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PropStore')}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/propstore.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >道具商城</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('GiftNotice')}}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/gift.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >礼物通知</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.manageList_one}>
                <TouchableOpacity onPress={this.systemSet.bind(this)}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/set.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >系统设置</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.quit} onPress={this.quit.bind(this)}>退出登录</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search:{
    width:340,
    marginLeft:10,
    backgroundColor:'white',
    height:40,
    borderRadius:5,
    marginTop:10,
    marginBottom:10,
  },
  manageList_one:{
    backgroundColor:'white',
    borderColor:'#ccc',
    borderTopWidth:1,
    marginBottom:10,
  },
  manageList_li:{
    flexDirection:'row',
    width:360,
    height:45,
    alignItems:'center',
    paddingLeft:10,
    borderColor:'#ccc',
    borderBottomWidth:1,
  },
  managementImg:{
    width:25,
    height:25,
  },
  managementTitle:{
    fontSize:18,
    width:290,
    marginLeft:10,
  },
  managementGo:{
    fontSize:18,
  },
  quit:{
    fontSize:18,
    color:'#aaa',
    alignSelf:'center',
    top:85,
  },
});

export default Management;