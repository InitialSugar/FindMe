/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,BackHandler,ToastAndroid
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
import arrFriend from './UserData.js'

export default class FriendIndex extends Component {
  constructor(){
    super();
    this.state={
      userInfo:''
    }
  }
  static navigationOptions={
      header:null,
  };

  componentWillMount(){
    const {params} =this.props.navigation.state;
    for(var i=0;i<arrFriend.length;i++){
      if(arrFriend[i].userId==params.mid){
        this.setState({
          userInfo:arrFriend[i],
        })
      }
    }
    
  }


  render() {
    return (
      <View>
        <View>
          <Image source={this.state.userInfo.userBg} style={styles.IndexHeaderImg} />
          <Text style={styles.back} onPress={() => {this.props.navigation.goBack()}}>&lt;返回</Text>
          <Text style={styles.MyIndex}>我的主页</Text>
        </View>
        <View style={{flexDirection:'row'}}> 
            <Image source={this.state.userInfo.userImgSrc} style={styles.FriendImg}/>
            <View>
                <Text style={styles.friendName}>{this.state.userInfo.name}</Text>
                <View style={{flexDirection:'row',marginTop:5,marginLeft:30,}}>
                    <Text style={{fontSize:12,paddingRight:11}}>{this.state.userInfo.userAge}岁</Text>
                    <Text style={{fontSize:12,paddingLeft:11,borderLeftWidth:1,paddingRight:11,}}>四川  {this.state.userInfo.city}</Text>
                </View>
            </View>
        </View>
        <Text style={styles.autograph} >{this.state.userInfo.autograph}</Text>
        <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:10}}>
              <Image source={this.state.userInfo.userImgSrc} style={styles.FriendAlbum} />
              <Text style={styles.FriendAlbumCount}>相册 {'( '}{this.state.userInfo.album.length}{'张 )'}</Text>
            </View>
            <View style={{marginLeft:10}}>
              <Image source={require('../images/p.png')} style={styles.FriendAlbum} />
              <Text style={styles.FriendAlbumCount}>喜欢 {'( '}{this.state.userInfo.likeShop.length}{'张 )'}</Text>
            </View>
            <View style={{marginLeft:10}}>
              <Image source={require('../images/shoe5.png')} style={styles.FriendAlbum} />
              <Text style={styles.FriendAlbumCount}>想买 {'( '}{this.state.userInfo.CartShop.length}{'张 )'}</Text>
            </View>
            <View style={{marginLeft:10}}>
              <Image source={require('../images/hergift.png')} style={styles.FriendAlbum} />
              <Text style={styles.FriendAlbumCount}>礼物 {'( '}{this.state.userInfo.album.length}{'张 )'}</Text>
            </View>
        </View>
        <View style={[styles.FriendList,styles.FriendTitle]}>
            <Text style={styles.Friendtitle}>她的资料</Text>
            <Text style={styles.more}>more...</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,}}>
            <Text style={styles.friendLabel}>{this.state.userInfo.label[0]}</Text>
            <Text style={styles.friendLabel}>{this.state.userInfo.label[1]}</Text>
            <Text style={styles.friendLabel}>{this.state.userInfo.label[2]}</Text>
        </View>
        <View style={styles.friendMenuList}>
            <Text style={styles.friendMenu} onPress={()=>{this.props.navigation.navigate('ChatWithFriend',{mid:this.state.userInfo.userId})}}>跟TA聊天</Text>
            <Text style={styles.friendMenu} onPress={()=>{ToastAndroid.show('你们已经是好友啦',ToastAndroid.SHORT);}}>加为好友</Text>
            <Text style={styles.friendMenu} onPress={()=>{this.props.navigation.navigate('PropStore')}}>赠送礼物</Text>
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
  icon:{
    width:20,
    height:20,
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
  FriendAlbum:{
    width:77.5,
    height:77.5,
  },
  FriendAlbumCount:{
    color:'white',
    backgroundColor:'#77428d',
    width:77.5,
    height:20,
    fontSize:12,
    textAlign:'center',
    justifyContent:'center',
  },
  FriendList:{
    flexDirection:'row',
    width:360,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  FriendTitle:{
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#ddd',
  },
  Friendtitle:{
    fontSize:15,
  },
  more:{
    fontSize:13,
    color:'#8f59a6',
    paddingLeft:240,
  },
  friendLabel:{
    borderWidth:1,
    borderRadius:100,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderColor:'#77428d',
    marginRight:30,
  },
  friendMenuList:{
    flexDirection:'row',
    position:'absolute',
    top:570,
    width:360,
    height:50,
    backgroundColor:'#77428d',
  },
  friendMenu:{
    fontSize:18,
    textAlign:'center',
    paddingTop:12,
    borderTopWidth:1,
    borderBottomWidth:1,
    color:'white',
    width:121,
    borderRightWidth:1,
    borderColor:'white',
  },
});
