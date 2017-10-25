/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,Picker,Slider,Switch,TextInput,
} from 'react-native';
import { StackNavigator,TabNavigator,NavigationActions} from 'react-navigation'

import FlowingPage from './src/js/FlowingPage.js'

import Login from './src/js/Login.js'
import Register from './src/js/Register.js'
import Index from './src/js/Index.js'
import City from './src/js/City.js'
import RegUserInfo from './src/js/RegUserInfo.js'

import Chat from './src/js/BottomMenu/Chat.js'
import Fashion from './src/js/BottomMenu/Fashion.js'
import Ranking from './src/js/BottomMenu/Ranking.js'
import Management from './src/js/BottomMenu/Management.js'

import SystemSet from './src/js/Management/SystemSet.js'
import MyIndex from './src/js/Management/MyIndex.js'
import PropStore from './src/js/Management/PropStore.js'
import GiftNotice from './src/js/Management/GiftNotice.js'
import RechargeBean from './src/js/Management/RechargeBean.js'

import BuyClothes from './src/js/Fashion/BuyClothes.js'
import BuyShoes from './src/js/Fashion/BuyShoes.js'
import BuyClothesList from './src/js/Fashion/BuyClothesList.js'
import BuyShoesList from './src/js/Fashion/BuyShoesList.js'
import ShopClothesInfo from './src/js/Fashion/ShopClothesInfo.js'
import ShopShoesInfo from './src/js/Fashion/ShopShoesInfo.js'

import FriendIndex from './src/js/FriendIndex.js'
import ChatWithFriend from './src/js/Chat/ChatWithFriend.js'


const FindMeBottom=TabNavigator({
  Index:{screen:Index},
  Chat:{screen:Chat},
  Fashion:{screen:Fashion},
  Ranking:{screen:Ranking},
  Management:{screen:Management},
},
{
  tabBarPosition:'bottom',
  swipeEnabled:false,
  animationEnabled:false,
  tabBarOptions:{
    showIcon:true,
    indicatorStyle:{
      backgroundColor:'white',
      height:2,
    },
    tabStyle:{
      backgroundColor:'#8f59a6',
      height:45,
    },
    labelStyle:{
      position:'absolute',
      color:'white',
    },
    iconStyle:{
      position:'absolute',
    },
    style:{
      backgroundColor:'#77428d',
      height:48,
    }
  },
}
)

const FindMe=StackNavigator({ 

  FlowingPage:{screen:FlowingPage},

  Index:{screen:FindMeBottom},
  MyIndex:{screen:MyIndex},
  FriendIndex:{screen:FriendIndex},

  BuyShoes:{screen:BuyShoes},
  BuyClothes:{screen:BuyClothes},
  BuyShoesList:{screen:BuyShoesList},
  BuyClothesList:{screen:BuyClothesList},
  ShopClothesInfo:{screen:ShopClothesInfo},
  ShopShoesInfo:{screen:ShopShoesInfo},

  City:{screen:City},

  Login:{screen:Login},
  Register:{screen:Register},
  RegUserInfo:{screen:RegUserInfo},

  SystemSet:{screen:SystemSet},
  ChatWithFriend:{screen:ChatWithFriend},
  PropStore:{screen:PropStore},
  GiftNotice:{screen:GiftNotice},
  RechargeBean:{screen:RechargeBean},

  
})

const defaultGetStateForAction=FindMe.router.getStateForAction;
FindMe.router.getStateForAction= (action,state) => {
  if(state && action.type=== NavigationActions.BACK){
      if(action.key){
          return defaultGetStateForAction(action,state);
      }
      return null;
  }
  return defaultGetStateForAction(action,state);
}

AppRegistry.registerComponent('FindMe', () => FindMe);
