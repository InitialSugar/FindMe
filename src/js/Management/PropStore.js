/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,ToastAndroid
} from 'react-native';
import { StackNavigator,} from 'react-navigation'
let b=null;
class PropStore extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      headerTitle:'道具商城',
      headerLeft:<Text style={{color:'white',fontSize:18,alignSelf:'center',marginLeft:10,}} onPress={()=>{b()}}>&lt;返回</Text>,
      headerStyle:{
        width:384,
        height:43,
        backgroundColor:'#77428d',
        elevation:0,
      },
      headerLeftTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
        marginLeft:-10,
      },
      headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf:'center',
        marginLeft:-10,
      }
  }

componentDidMount(){
  b=this.props.navigation.goBack;
}
  render() {
    return (
          <View style={styles.manageList_one}>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/rose.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>名字：粉玫瑰</Text>
                        <Text style={styles.propInfo}>价格：10银豆</Text>
                        <Text style={styles.propInfo}>说明：花开四季香，人美愁断肠，心动+10，魅力+10.</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('当前账户余额不足',ToastAndroid.SHORT);}}>赠送</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/ring.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>名字：戒指</Text>
                        <Text style={styles.propInfo}>价格：10银豆</Text>
                        <Text style={styles.propInfo}>说明：倾心，仰慕，心动+10，魅力+10.</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('当前账户余额不足',ToastAndroid.SHORT);}}>赠送</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/shoes.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>名字：水晶鞋</Text>
                        <Text style={styles.propInfo}>价格：10银豆</Text>
                        <Text style={styles.propInfo}>说明：这是你遗落在那场华丽舞会中的礼品，心动+10，魅力+10.</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('当前账户余额不足',ToastAndroid.SHORT);}}>赠送</Text>
                </View>
              
            </View>
    );
  }
}

const styles = StyleSheet.create({
  manageList_one:{
    backgroundColor:'white',
    borderColor:'#ccc',
    borderTopWidth:1,
    marginTop:10,
  },
  manageList_li:{
    flexDirection:'row',
    width:360,
    height:100,
    alignItems:'center',
    paddingLeft:10,
    borderColor:'#ccc',
    borderBottomWidth:1,
  },
  managementTitle:{
    fontSize:18,
    width:325,
  },
  managementGo:{
    fontSize:18,
  },
  propImg:{
    width:75,
    height:75,
    marginTop:12.5,
    marginRight:10,
  },
  propInfo:{
    fontSize:12,
    width:180,
  },
  propSend:{
    width:50,
    height:30,
    fontSize:12,
    borderColor:'#77428d',
    borderWidth:1,
    borderRadius:5,
    color:'#77428d',
    textAlign:'center',
    paddingTop:6,
    left:25,
  }
});

export default PropStore;