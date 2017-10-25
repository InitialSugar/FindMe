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
import arrFriend from './../data/shopShoesImgData.js'

export default class BuyShoes extends Component {
  constructor(){
    super();
  }
  static navigationOptions={
      header:null,
  };

  render() {
    const {params} =this.props.navigation.state;
    return (
      <View>
          <View style={{flexDirection:'row',backgroundColor:'#77428d',height:50,width:360,alignItems:'center'}}>
          <Text style={{color:'white',fontSize:18,paddingLeft:10,}} onPress={() => {this.props.navigation.goBack()}}>&lt;返回</Text>
          <Text style={{color:'white',fontSize:18,paddingLeft:110}}>鞋柜</Text>
        </View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'高跟鞋'})}}>   
            <View>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                    <Text style={styles.fashiontitle}>高跟鞋</Text>
                    <Text style={styles.more}>more...</Text>
              </View>
              <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0001.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0002.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0003.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0004.png')} style={styles.shoppingImg} />
              </View>
            </View>
        </TouchableOpacity>        
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'松糕鞋'})}}>   
            <View>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                    <Text style={styles.fashiontitle}>松糕鞋</Text>
                    <Text style={styles.more}>more...</Text>
              </View>
              <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0005.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0006.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0007.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0008.png')} style={styles.shoppingImg} />
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'单鞋'})}}>   
            <View>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                    <Text style={styles.fashiontitle}>单鞋</Text>
                    <Text style={styles.more}>more...</Text>
              </View>
              <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                  <Image source={require('./../../images/fashionImg/shopShoesImg_0009.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00010.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00011.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00012.png')} style={styles.shoppingImg} />
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'厚底鞋'})}}>           
            <View>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                    <Text style={styles.fashiontitle}>厚底鞋</Text>
                    <Text style={styles.more}>more...</Text>
              </View>
              <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00013.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00014.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00015.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopShoesImg_00016.png')} style={styles.shoppingImg} />
              </View>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fashionList:{
    flexDirection:'row',
    width:360,
    paddingLeft:10,
    paddingRight:10,
  },
  fashionTitle:{
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#ddd',
  },
  fashiontitle:{
    fontSize:15,
    width:300,
  },
  more:{
    fontSize:13,
    color:'#8f59a6',
  },
  shoppingImg:{
    width:77.5,
    height:92,
    marginRight:10,
  }
});
