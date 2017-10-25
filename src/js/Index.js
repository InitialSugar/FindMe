/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,BackHandler,ToastAndroid,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
import arrData from './UserData.js'
class Index extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      header:null,
      tabBarLabel:({focused})=>focused?'':'觅觅寻',
      tabBarIcon:({ tintColor, focused}) => (
        <Image
          source={focused?require('../images/index.png'):null}
          style={[{width:25,height:25}, {tintColor: tintColor}]}
        />
      ),
  };

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress',()=>this._back());
  }

  _back(){
    let timer=(new Date()).getTime();
    if(timer-this.lastBackPressed < 2000){
      return false;
    }
    this.lastBackPressed=timer;
    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
    return true;
  }
  choiceCity(){
    const {navigate} = this.props.navigation;
    navigate('City');
  }
  render() {
    return (
      <View>
        <View>
          <Image source={require('../images/background1.png')} style={styles.IndexHeaderImg} />
          <Text style={styles.message} onPress={this.choiceCity.bind(this)}>选择城市</Text>
        </View>
        <View>
          <FlatList
              style={styles.friendList}
              keyExtractor={(item,index) => index}
              data={arrData}
              renderItem={
                ({item}) => (
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('FriendIndex',{mid:item.userId})}}>
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
                            <Text style={{fontSize:12,width:260,}} numberOfLines={1}>{item.autograph}</Text>
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
  icon:{
    width:20,
    height:20,
  },
  IndexHeaderImg:{
    width:360,
    height:200,
  },
  message:{
    fontSize:15,
    alignSelf:'flex-end',
    right:15,
    top:15,
    position:'absolute',
    zIndex:20,
    color:'white',
  },
  faceGirl:{
    fontSize:35,
    position:'absolute',
    zIndex:20,
    color:'white',
    top:150,
    left:10,
  },
  friendList_one:{
    flexDirection:'row',
    paddingBottom:5,
    marginLeft:10,
    marginRight:10,
  },
  friendList:{
    height:372,
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
});

export default Index;