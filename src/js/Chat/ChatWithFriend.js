/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,BackHandler,ToastAndroid,KeyboardAvoidingView,AsyncStorage
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
import arrFriend from './../UserData.js'

export default class ChatWithFriend extends Component {
  constructor(){
    super();
    this.state={
      userInfo:'',
      sendMsgTxt:[],
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

  sendMessage(){
    this.myMsgList.scrollToEnd();
    this.myMsg.clear();
    this.setState((state)=>({
      sendMsgTxt:state.sendMsgTxt.concat([{myImg:arrFriend[1],txt:this.myMsg._lastNativeText}])
    }));
  }
  render() {
    return (
      <View style={{position:'relative',flex:1}}>
          <View style={{backgroundColor:'#77428d',height:75,width:360,position:'relative',}} >
              <View style={{flexDirection:'row',marginTop:10}}>
                  <Text style={{fontSize:18,color:'white',paddingLeft:10,}} onPress={()=>{this.props.navigation.goBack()}}>&lt;返回</Text>
                  <Text style={{fontSize:18,color:'white',paddingLeft:10,textAlign:'center',width:270}}>{this.state.userInfo.name}({this.state.userInfo.userName})</Text>
                  <Image source={require('../../images/friendlist.png')} style={{width:28,height:28,}} />
              </View>
              <View style={{flexDirection:'row',width:360}}>
                  <Text style={styles.friendmenu} onPress={()=>{this.props.navigation.navigate('PropStore')}}>赠送礼物</Text>
                  <Text style={styles.friendmenu} onPress={()=>{ToastAndroid.show('加了好友就不准删除我',ToastAndroid.SHORT);}}>删除好友</Text>
                  <Text style={styles.friendmenu} onPress={()=>{ToastAndroid.show('呀！你们还没开始聊天呢！',ToastAndroid.SHORT);}}>聊天记录</Text>
                  <Text style={styles.friendmenu} onPress={()=>{this.props.navigation.navigate('FriendIndex',{mid:this.state.userInfo.userId})}}>TA的主页</Text>
              </View>
          </View>
          <KeyboardAvoidingView behavior='padding' style={{flex:1}} >
            <View style={{position:'relative'}}>
                <FlatList style={styles.myMsgList}
                    keyExtractor={(key,index)=>index}
                    data={this.state.sendMsgTxt}
                    renderItem={({item})=>
                    <View>
                      <Image source={this.state.userInfo.userImgSrc} style={styles.myImg} />
                      <Text style={styles.myTxt}>{item.txt}</Text>
                    </View>
                  }
                  ref={ (myMsgList) => this.myMsgList=myMsgList }
                />
            </View>
            <View style={{backgroundColor:'#ddd',height:49,width:360,position:'absolute',bottom:0,flexDirection:'row'}}>
                <TextInput style={styles.inputContent} underlineColorAndroid={'transparent'} ref={ (myMsg) => this.myMsg =myMsg } />
                <Image source={require('../../images/emotion.png')} style={[styles.sendimg,styles.emotion]} />
                <Image source={require('../../images/sendimg.png')} style={[styles.sendimg,styles.choiceimg]} />
                <Text style={styles.send} onPress={this.sendMessage.bind(this)}>发送</Text>
            </View>
          </KeyboardAvoidingView>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  friendmenu:{
    flex:1,
    fontSize:15,
    color:'white',
    textAlign:'center',
    paddingTop:12,
  },
  userImg:{
    width:60,
    height:60,
    borderRadius:60,
    marginRight:15,
    marginLeft:10,
  },
  userContent:{
    paddingLeft:10,
    paddingTop:10,
    paddingRight:10,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'#ccc',
    top:20,
  },
  inputContent:{
    width:230,
    height:39,
    marginTop:6,
    marginLeft:10,
    borderColor:'#77428d',
    borderRadius:5,
    borderWidth:1,
    paddingRight:40,
  },
  sendimg:{
    height:29,
    top:11,
  },
  emotion:{
    width:29,
    marginLeft:-35,
  },
  choiceimg:{
    width:34,
    marginLeft:15,
    marginRight:10,
  },
  send:{
    width:60,
    height:29,
    top:11,
    backgroundColor:'#77428d',
    paddingTop:5,
    color:'white',
    borderRadius:5,
    textAlign:'center',
  },
  myMsgList:{
    marginTop:10,
    height:480,
    marginBottom:50,
  },
  myImg:{
    width:60,
    height:60,
    borderRadius:60,
    marginRight:10,
    alignSelf:'flex-end',
  },
  myTxt:{
    alignSelf:'flex-end',
    maxWidth:200,
    paddingLeft:10,
    paddingTop:10,
    paddingRight:10,
    paddingBottom:10,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#ccc',
    top:-30,
    right:85,
    marginLeft:10,
  }
});
