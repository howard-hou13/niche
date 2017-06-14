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
 import NotiTile from './NotiTile';
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
         /**
         let notiTiles = [];

         let notiResults = realm.objects('Noti');

         let rowCount = 0;
         let rowList = []
         for (noti in notiResults){
             rowList.push(
                 <Button
                 onPress={alert("pressed")}
                 title = "noti.properties.title"
                 color = 'white'
                 />
             )

             if (rowCount<=1){
                 rowCount++;
             }else{
                 rowCount = 0;
                 notiTiles.push(
                     <View style = {Style.tileRow}>rowList</View>
                 )
                 rowList =[];
             }
         }

         return notiTiles;
         */

         let notiTiles = [];
         notiTiles.push(
             <View style = {Style.tileRow}>
                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {alert('presssed')}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>Add</Text>
                        <Text style = {Style.tileText}>+</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                style = {Style.notiTileTouchableHighlight}
                onPress = {alert('presssed')}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>Add</Text>
                        <Text style = {Style.tileText}>+</Text>
                    </View>
               </TouchableHighlight>
            </View>
        )

        return notiTiles;


     }
 }
