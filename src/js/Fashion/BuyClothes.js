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
import arrFriend from './../data/shopClothesImgData.js'

export default class BuyClothes extends Component {
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
          <Text style={{color:'white',fontSize:18,paddingLeft:110}}>衣橱</Text>
        </View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'夏季流行'})}}>
          <View>
            <View style={[styles.fashionList,styles.fashionTitle]}>
                  <Text style={styles.fashiontitle}>夏季流行</Text>
                  <Text style={styles.more}>more...</Text>
            </View>
            <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                <Image source={require('./../../images/fashionImg/shopClothesImg_0001.png')} style={styles.shoppingImg} />
                <Image source={require('./../../images/fashionImg/shopClothesImg_0002.png')} style={styles.shoppingImg} />
                <Image source={require('./../../images/fashionImg/shopClothesImg_0003.png')} style={styles.shoppingImg} />
                <Image source={require('./../../images/fashionImg/shopClothesImg_0004.png')} style={styles.shoppingImg} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'时尚潮流'})}}>
            <View>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                    <Text style={styles.fashiontitle}>时尚潮流</Text>
                    <Text style={styles.more}>more...</Text>
              </View>
              <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                  <Image source={require('./../../images/fashionImg/shopClothesImg_0005.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopClothesImg_0006.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopClothesImg_0007.png')} style={styles.shoppingImg} />
                  <Image source={require('./../../images/fashionImg/shopClothesImg_0008.png')} style={styles.shoppingImg} />
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'返璞归真'})}}>
            <View>
                <View style={[styles.fashionList,styles.fashionTitle]}>
                      <Text style={styles.fashiontitle}>返璞归真</Text>
                      <Text style={styles.more}>more...</Text>
                </View>
                <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                    <Image source={require('./../../images/fashionImg/shopClothesImg_0009.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00010.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00011.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00012.png')} style={styles.shoppingImg} />
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'轻衣薄衫'})}}>
            <View>
                <View style={[styles.fashionList,styles.fashionTitle]}>
                      <Text style={styles.fashiontitle}>轻衣薄衫</Text>
                      <Text style={styles.more}>more...</Text>
                </View>
                <View style={{flexDirection:'row',width:310,paddingLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10}}>
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00013.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00014.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00015.png')} style={styles.shoppingImg} />
                    <Image source={require('./../../images/fashionImg/shopClothesImg_00016.png')} style={styles.shoppingImg} />
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
