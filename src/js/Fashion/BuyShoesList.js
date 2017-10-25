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
import shopShoesImgData from './../data/shopShoesImgData.js'

export default class BuyShoesList extends Component {
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
          <Text style={{color:'white',fontSize:18,paddingLeft:110}}>{params.title}</Text>
        </View>
        <View>
            <FlatList
              style={styles.shopList}
              keyExtractor={(item,index) => index}
              data={shopShoesImgData}
              renderItem={
                ({item}) => (
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ShopShoesInfo',{shopId:item.shopId})}}>
                    <View style={{flexDirection:'row',width:360,paddingLeft:10,paddingTop:10,paddingBottom:10,}}>
                        <Image source={item.shopImgSrc} style={styles.shoppingImg} />
                        <View> 
                            <Text style={{fontSize:18,width:230,}}>商品名：</Text> 
                            <Text style={{fontSize:16,width:230,textAlign:'center',fontWeight:'bold'}} numberOfLines={1}>{item.shopImgName}</Text> 
                            <Text style={{fontSize:14,paddingTop:5,}}>价格：{item.shopPrice}元</Text>
                            <Text style={{fontSize:12,width:230,}} numberOfLines={2}>说明：{item.shopExplain}</Text> 
                        </View>
                        
                    </View>
                </TouchableOpacity>
                )
              }
              ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'#ccc',marginLeft:10,marginRight:10,marginBottom:5,}} ></View> }
              getItemLayout={(data,index) =>({length:100,offset:(100+1)*index,index})}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shoppingImg:{
    width:100,
    height:100,
    marginRight:10,
    borderWidth:3,
    borderColor:'#8f59a6',
    borderRadius:10,
  },
  shopList:{
    height:560
  }
});
