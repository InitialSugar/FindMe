/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,TouchableOpacity
} from 'react-native';
import { StackNavigator,} from 'react-navigation'
import arrData from './../UserData.js'

class Chat extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      headerTitle:'觅会话',
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
      tabBarLabel:({focused})=>focused?'':'觅会话',
      tabBarIcon:({ tintColor, focused}) => (
        <Image
          source={focused?require('../../images/conversation.png'):null}
          style={[{width:25,height:25}, {tintColor: tintColor}]}
        />
      ),
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
      }
  }
  render() {
    return (
      <View>
        <View>
          <FlatList
              style={styles.friendList}
              keyExtractor={(item,index) => index}
              data={arrData}
              renderItem={
                ({item}) => (
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ChatWithFriend',{mid:item.userId})}}>
                    <View style={styles.friendList_one}>
                        <Image source={item.userImgSrc} style={styles.friendImg} />
                        <View style={styles.friendInfo}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={{fontSize:12,paddingRight:11}}>{item.userAge}岁</Text>
                                <Text style={{fontSize:12,paddingLeft:11,borderLeftWidth:1,paddingRight:11,}}>四川</Text>
                                <Text style={{fontSize:12,borderRightWidth:1,paddingRight:11,}}>{item.city}</Text>
                                <Text style={{fontSize:12,paddingLeft:11,}}>相距{item.userDistance}km</Text>
                            </View>
                            <Text style={{fontSize:12,width:270}} numberOfLines={1}>{item.autograph}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                )
              }
              ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc',marginLeft:10,marginRight:10,marginBottom:5,}} ></View> }
              getItemLayout={(data,index) =>({length:88,offset:(88+1)*index,index})}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendList_one:{
    flexDirection:'row',
    marginBottom:5,
    marginLeft:10,
    marginRight:10,
  },
  friendList:{
    height:528,
    marginBottom:59,
    paddingTop:5,
  },
  friendImg:{
    width:66,
    height:66,
    borderRadius:66,
  },
  friendInfo:{
    marginLeft:10,
  },
});

export default Chat;