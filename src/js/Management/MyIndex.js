/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,ScrollView,Slider,Switch,TextInput,BackHandler,ToastAndroid
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
import arrFriend from './../UserData.js'

export default class MyIndex extends Component {
  constructor(){
    super();
    this.state={
      userInfo:''
    }
  }
  static navigationOptions={
      header:null,
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
  };

  render() {
    return (
      <View>
        <View>
          <Image source={arrFriend[4].userBg} style={styles.IndexHeaderImg} />
          <Text style={styles.back} onPress={() => {this.props.navigation.goBack()}}>&lt;返回</Text>
          <Text style={styles.MyIndex}>我的主页</Text>
        </View>
        <View style={{flexDirection:'row',marginBottom:0,}}> 
            <Image source={arrFriend[4].userImgSrc} style={styles.FriendImg}/>
            <View>
                <Text style={styles.friendName}>{arrFriend[4].name}</Text>
                <View style={{flexDirection:'row',marginTop:5,marginLeft:30,}}>
                    <Text style={{fontSize:12,paddingRight:11}}>{arrFriend[4].userAge}岁</Text>
                    <Text style={{fontSize:12,paddingLeft:11,borderLeftWidth:1,paddingRight:11,}}>四川  {arrFriend[4].city}</Text>
                </View>
            </View>
        </View>
        <View style={{height:370,marginTop:-15}}>
             <View style={styles.manageList_one}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/album.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle}>我的相册</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mypackage.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >我的背包</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
            </View>
            <View style={styles.manageList_one}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mylike.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle}>我喜欢的商品</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mywant.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >我想买的商品</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mywantbuy.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >我想买的礼物</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mybuy.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >购买赠送礼物</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
            </View>
            <View style={styles.manageList_one}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/myset.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >我的设置</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/mytaobao.png')} style={styles.managementImg} />
                    <Text style={styles.managementTitle} >绑定淘宝账号</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MyIndex:{
    fontSize:15,
    alignSelf:'center',
    top:15,
    position:'absolute',
    zIndex:20,
    color:'white',
    textShadowOffset:{width:1, height:1},
    textShadowColor:'#aaa',
  },
  back:{
    fontSize:15,
    alignSelf:'flex-start',
    top:15,
    position:'absolute',
    zIndex:20,
    color:'white',
    left:10,
    textShadowOffset:{width:1, height:1},
    textShadowColor:'#aaa',
  },
  IndexHeaderImg:{
    width:360,
    height:200,
  },
  FriendImg:{
    width:77,
    height:77,
    borderRadius:77,
    top:-39,
    left:20,
  },
  friendName:{
    fontSize:21,
    color:'white',
    paddingLeft:10,
    position:'absolute',
    top:-30,
    left:20,
    textShadowOffset:{width:1, height:1},
    textShadowColor:'#aaa',
  },
  autograph:{
    left:20,
    top:-35,
    width:320,
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
    height:40,
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
});
