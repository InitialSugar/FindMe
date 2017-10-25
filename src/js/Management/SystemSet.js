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
class SystemSet extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      headerTitle:'系统设置',
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
                    <Text style={styles.managementTitle}>关于我们</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Text style={styles.managementTitle}>用户帮助</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Text style={styles.managementTitle}>意见反馈</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
                </View>
                <View style={styles.manageList_li}>
                    <Text style={styles.managementTitle}>给予评价</Text>
                    <Text style={styles.managementGo}>{'>'}</Text>
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
    height:53,
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
});

export default SystemSet;