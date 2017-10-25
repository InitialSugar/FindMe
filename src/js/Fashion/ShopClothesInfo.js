/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,BackHandler,ToastAndroid,ScrollView
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
import shopClothesImgData from './../data/shopClothesImgData.js'

export default class ShopClothesInfo extends Component {
  constructor(){
    super();
    this.state={
      shopInfo:'',
      i:0,
    }
  }
  static navigationOptions={
      header:null,
  };

  componentWillMount(){
    const {params} =this.props.navigation.state;
    for(var i=0;i<shopClothesImgData.length;i++){
      if(shopClothesImgData[i].shopId==params.shopId){
        this.setState({
          shopInfo:shopClothesImgData[i],
        })
      }
    }
  }
  
  like(){
    ToastAndroid.show('喜欢+1',ToastAndroid.SHORT);
    this.setState({
      i:this.state.i+1,
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{width:360,marginBottom:49}} >
          <View>
            <Image source={this.state.shopInfo.shopImgSrc} style={styles.ShopHeaderImg} />
            <Text style={styles.back} onPress={() => {this.props.navigation.goBack()}}>&lt;返回</Text>
            <Text style={styles.shopInfos}>商品详情</Text>
            <Text style={styles.price}> ￥{this.state.shopInfo.shopPrice}</Text>
          </View>
          <Text style={styles.shopName}>{this.state.shopInfo.shopImgName}</Text>
          <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
              <Image source={require('../../images/like.png')} />
              <Text style={{paddingLeft:10,paddingRight:10}}>喜欢{this.state.i}</Text>
              <Image source={require('../../images/shopping.png')} />
              <Text style={{paddingLeft:10,paddingRight:10}}>想买120</Text>
          </View>
          <Text style={styles.shopExplain}>{this.state.shopInfo.shopExplain}</Text>
          <Text style={{backgroundColor:'#ccc',width:360,paddingLeft:10,top:10,bottom:10,paddingTop:5,paddingBottom:10}}>商品详情</Text>
          <Image source={require('../../images/fashionImg/shopInfo1.png')} style={{marginTop:5,width:360,height:376}} />
          <Image source={require('../../images/fashionImg/shopInfo2.png')} style={{width:360,height:269}} />
        </ScrollView>

        <View style={{flexDirection:'row',position:'absolute',bottom:0,}}>
            <Text style={styles.buyMenu} onPress={this.like.bind(this)}>喜欢</Text>
            <Text style={styles.buyMenu} onPress={()=>{ToastAndroid.show('收藏成功',ToastAndroid.SHORT)}}>收藏</Text>
            <Text style={styles.buyMenu} onPress={()=>{ToastAndroid.show('抱歉，该商品暂时无货',ToastAndroid.SHORT)}}>购买</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  ShopHeaderImg:{
    width:360,
    height:360,
  },
  shopInfos:{
    fontSize:15,
    alignSelf:'center',
    top:15,
    position:'absolute',
    zIndex:20,
    color:'white',
    textShadowOffset:{width:1, height:1},
    textShadowColor:'#aaa',
  },
  price:{
    fontSize:15,
    alignSelf:'flex-end',
    padding:5,
    height:30,
    width:80,
    textAlign:'center',
    backgroundColor:'white',
    opacity:0.8,
    top:330,
    position:'absolute',
    zIndex:20,
    color:'#8f59a6',
  },
  shopName:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:10,
    paddingTop:10,
  },
  shopExplain:{
    width:350,
    paddingLeft:10,
    paddingTop:10,
  },
  buyMenu:{
    flex:1,
    height:49,
    backgroundColor:'#77428d',
    fontSize:20,
    color:'white',
    paddingTop:10,
    textAlign:'center',
  }
});
