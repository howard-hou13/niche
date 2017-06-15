/**
 * The screen that displays all current notifications.
 * Programmers: Howard Hou, Richard Zeng
 */

 import React, {Component} from 'react';
 import {
     View,
     ScrollView,
     Text,
     Button,
     TouchableHighlight
 } from 'react-native';
 import Style from './HomeStyle';
 import realm from './NotiModel';
 var Dimensions = require('Dimensions');
 var {
     width,
     height
 } = Dimensions.get('window');

 export default class Add extends Component{
     render(){
         return(
             <View>
                <View style = {Style.header}>
                    <Text style = {Style.headerItem}>My Noti</Text>
                </View>

                <ScrollView
                automaticallyAdjustContentInsets={false}
                contentInset={{bottom:130}}>
                    <View style = {[Style.rootContainer, {minHeight: height}]}>
                        <View style = {Style.notiContainer}>
                            {this._renderNotiTiles()}
                        </View>
                    </View>
                </ScrollView>
             </View>
         );
     }
     _renderNotiTiles(){

         let notiResults = realm.objects('Noti');

         let notiTiles = [];

         for (index = 0; index < notiResults.length; index+=2){
             notiTiles.push(
                 <View style = {Style.tileRow}>
                    <TouchableHighlight
                    style = {Style.notiTileTouchableHighlight}
                    onPress = {alert('presssed')}>
                       <View style={Style.notiTileView}>
                           <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                           <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                       </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                    style = {Style.notiTileTouchableHighlight}
                    onPress = {alert('presssed')}>
                        <View style={Style.notiTileView}>
                           <Text style = {Style.tileText}>{notiResults[index+1].title}</Text>
                           <Text style = {Style.tileText}>{notiResults[index+1].title}</Text>
                        </View>
                    </TouchableHighlight>
                  </View>
              )
        }
        return notiTiles;
     }
 }
