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


class Fashion extends Component {
  static navigationOptions={
      header:null,
      tabBarLabel:({focused})=>focused?'':'觅时尚',
      tabBarIcon:({ tintColor, focused}) => (
        <Image
          source={focused?require('../../images/buy.png'):null}
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
            <Image source={require('../../images/p1.png')} style={styles.FashionHeaderImg} />
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothes')}}>
                <View style={[styles.fashionList,styles.fashionTitle]}>
                  <Text style={styles.fashiontitle}>衣橱</Text>
                  <Text style={styles.more}>more...</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.fashionList,styles.goodsList]}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'夏季流行'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/clothes1.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>夏季流行</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'时尚潮流'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/clothes2.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>时尚潮流</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'返璞归真'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/clothes3.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>返璞归真</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyClothesList',{title:'轻衣薄衫'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/clothes4.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>轻衣薄衫</Text>
              </View>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoes')}}>
              <View style={[styles.fashionList,styles.fashionTitle]}>
                <Text style={styles.fashiontitle}>鞋柜</Text>
                <Text style={styles.more}>more...</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.fashionList,styles.goodsList]}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'高跟鞋'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/shoe1.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>高跟鞋</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'松糕鞋'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/shoe2.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>松糕鞋</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'单鞋'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/shoe3.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>单鞋</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BuyShoesList',{title:'厚底鞋'})}}>
              <View style={styles.goodsInfo}>
                  <Image source={require('../../images/shoe4.png')} style={styles.goodsImg} />
                  <Text style={styles.goodsName}>厚底鞋</Text>
              </View>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FashionHeaderImg:{
    width:360,
    height:265,
  },
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
  },
  more:{
    fontSize:13,
    color:'#8f59a6',
    paddingLeft:270,
  },
  goodsList:{
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:21,
  },
  goodsInfo:{
    marginRight:10,
  },
  goodsImg:{
    width:77.5,
    height:77.5,
  },
  goodsName:{
    fontSize:11,
    paddingTop:5,
    textAlign:'center',
  },
});

export default Fashion;