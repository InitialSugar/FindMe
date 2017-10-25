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
class RechargeBean extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      headerTitle:'充值银豆',
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
                    <Image source={require('../../images/d1.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>银豆1个</Text>
                        <Text style={styles.propInfo1}>价格：1元</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('购买失败',ToastAndroid.SHORT);}}>购买</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/d2.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>银豆2个</Text>
                        <Text style={styles.propInfo1}>价格：2元</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('购买失败',ToastAndroid.SHORT);}}>购买</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/d3.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>银豆3个</Text>
                        <Text style={styles.propInfo1}>价格：3元</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('购买失败',ToastAndroid.SHORT);}}>购买</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Image source={require('../../images/d4.png')} style={styles.propImg} />
                    <View>
                        <Text style={styles.propInfo}>银豆4个</Text>
                        <Text style={styles.propInfo1}>价格：4元</Text>
                    </View>
                    <Text style={styles.propSend} onPress={()=>{ToastAndroid.show('购买失败',ToastAndroid.SHORT);}}>购买</Text>
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
    marginTop:5,
    marginRight:10,
  },
  propInfo:{
    fontSize:18,
    width:180,
    fontWeight:'bold',
  },
  propInfo1:{
    fontSize:15,
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

export default RechargeBean;