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
import arrData from './../UserData.js'
import _ from'lodash'
var arrRank=_.cloneDeep(arrData);
class Ranking extends Component {
  constructor(){
    super();
    this.state={
      data:arrRank.sort(this.sortArr('charmNumber')).reverse().slice(0,6),
    }
  }
  static navigationOptions={
     header:null,
     tabBarLabel:({focused})=>focused?'':'觅排行',
     tabBarIcon:({ tintColor, focused}) => (
        <Image
          source={focused?require('../../images/rank.png'):null}
          style={[{width:25,height:25}, {tintColor: tintColor}]}
        />
      ),
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
      }
  }
  sortArr(pro){
    return function(obj1,obj2){
      var val1=obj1.charmNumber;
      var val2=obj2.charmNumber;
      return val1-val2;
    }
  }

  arrSort(){
    const arrObj=arrData.sort(this.sortArr('charmNumber')).reverse();
    const arrRank=arrObj;
    return arrRank;
  }

  ranking(){
    ToastAndroid.show('当前功能尚未开放',ToastAndroid.SHORT);
  }
  render() {  
    return (
      <View>
          <View style={styles.rankHeader}>
            <View style={styles.rankHeader_type}>
                <Text style={[styles.rankHeader_typeCenter,styles.rankHeader_typeCenter1]}>魅力男女</Text>
                <Text style={[styles.rankHeader_typeCenter,styles.rankHeader_typeCenter2]} onPress={this.ranking.bind(this)}>消费排行</Text>
                <Text style={[styles.rankHeader_typeCenter,styles.rankHeader_typeCenter3]} onPress={this.ranking.bind(this)}>时尚排行</Text>
            </View>
            <View style={styles.rankHeader_time}>
                <Text style={[styles.rankHeader_timeCenter,styles.rankHeader_timeCenter1]}>每日排行</Text>
                <Text style={[styles.rankHeader_timeCenter,styles.rankHeader_timeCenter2]} onPress={this.ranking.bind(this)}>每周排行</Text>
                <Text style={[styles.rankHeader_timeCenter,styles.rankHeader_timeCenter2]} onPress={this.ranking.bind(this)}>每月排行</Text>
                <Text style={[styles.rankHeader_timeCenter,styles.rankHeader_timeCenter2]} onPress={this.ranking.bind(this)}>总排行</Text>
            </View>
          </View>
          <View style={styles.ranking}>
                <FlatList
                    style={styles.friendList}
                    keyExtractor={(item,index) => index}
                    data={this.state.data}
                    renderItem={
                      ({item}) => (<TouchableOpacity onPress={()=>{this.props.navigation.navigate('FriendIndex',{mid:item.userId})}}>
                      <View style={styles.friendList_one}>
                          <Image source={item.userImgSrc} style={styles.friendImg} />
                          <Text>{item.index}</Text>
                          <View style={styles.friendInfo}>
                              <Text style={{fontSize:18,fontWeight:'bold'}} onPress={()=>{console.log(item)}}>{item.name}</Text>
                              <View style={{flexDirection:'row',marginTop:5}}>
                                  <Text style={{fontSize:12,paddingRight:11}}>{item.userAge}岁</Text>
                                  <Text style={{fontSize:12,paddingLeft:11,borderLeftWidth:1,paddingRight:11,}}>四川</Text>
                                  <Text style={{fontSize:12,borderRightWidth:1,paddingRight:11,}}>{item.city}</Text>
                                  <Text style={{fontSize:12,paddingLeft:90}}>{item.charmNumber}</Text>
                                  <Image source={require('../../images/hot.png')} style={styles.hot} />
                              </View>
                              <Text style={{fontSize:12,width:260}} numberOfLines={1}>{item.autograph}</Text>
                          </View>
                      </View>
                      </TouchableOpacity>)
                    }
                    ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc',marginLeft:10,marginRight:10,marginBottom:8,}} ></View> }
                    getItemLayout={(data,index) =>({length:88,offset:(88+1)*index,index})}
                  />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rankHeader:{
    width:360,
    height:75,
    backgroundColor:'#77428d',
    paddingTop:5,
  },
  rankHeader_type:{
    flexDirection:'row',
    alignSelf:'center',
    width:276,
    height:30,
    borderWidth:1,
    borderColor:'white',
    borderRadius:5,
  },
  rankHeader_typeCenter:{
    fontSize:12,
    height:28,
    paddingTop:5,
    paddingBottom:4,
    textAlign:'center',
    color:'white',
  },
  rankHeader_typeCenter1:{
    color:'#77428d',
    width:92,
    backgroundColor:'white',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  rankHeader_typeCenter2:{
    width:90,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'white',
  },
  rankHeader_typeCenter3:{
    width:92,
  },
  rankHeader_time:{
    flexDirection:'row',
    marginTop:10,
    height:30,
    width:360,
  },
  rankHeader_timeCenter:{
    width:90,
    height:30,
    color:'white',
    textAlign:'center',
    paddingTop:5,
  },
  rankHeader_timeCenter1:{
    borderTopWidth:2,
    borderColor:'white',
    backgroundColor:'#8f59a6',
  },
  ranking:{
    width:360,
    height:550,
  },
  friendList_one:{
    flexDirection:'row',
    paddingBottom:8,
    marginLeft:10,
    marginRight:10,
  },
  friendList:{
    height:550,
    marginBottom:54,
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
  hot:{
    width:20,
    height:20,
  }
});

export default Ranking;