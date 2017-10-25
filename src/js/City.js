import arrCity from './data/cityData'
import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,SectionList
} from 'react-native';
import { StackNavigator,TabNavigation} from 'react-navigation'
export default class City extends Component{
	static navigationOptions={
		header:null
	}
	render(){
		return (
			<View>
				<View style={{flexDirection:'row',backgroundColor:'#77428d',height:50,width:360,alignItems:'center'}}>
					<Text style={{color:'white',fontSize:18,paddingLeft:10,}} onPress={() => {this.props.navigation.goBack()}}>&lt;返回</Text>
					<Text style={{color:'white',fontSize:18,paddingLeft:90}}>城市选择</Text>
				</View>
				<View>
					<SectionList 
						keyExtractor={(item,index) => index}
						sections={arrCity}
						renderItem={(info) => <Text style={{color:'#77428d',fontSize:12,paddingLeft:10,width:360,height:30,backgroundColor:'#eee',paddingTop:8,borderBottomWidth:1,borderColor:'#ccc'}}>{info.item.title}</Text>}
						renderSectionHeader={(info) => <Text style={{color:'#77428d',fontSize:18,paddingLeft:10,width:360,height:40,backgroundColor:'#ddd',paddingTop:10}}>{info.section.key}</Text>}
						/>
				</View>
			</View>
		)
	}
}