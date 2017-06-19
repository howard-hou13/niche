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
 import Moment from 'moment';

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
         Moment.locale('en');

         let notiResults = realm.objects('Noti');

         let notiTiles = [];
         let max=0;
         if (notiResults.length%2===0){
             max = notiResults.length
         }else{
             max = notiResults.length-1
         }
         for (index = 0; index < max; index++){
             notiTiles.push(
             <View style = {Style.tileRow}>
                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>alert('a')}
                 key = {notiResults[index].serial}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>alert('a')}
                 key = {notiResults[++index].serial}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>
             </View>
             )
         }

         if (max!=notiResults.length){
             notiTiles.push(
                 <View style = {Style.tileRow}>
                     <TouchableHighlight
                     style = {Style.notiTileTouchableHighlight}
                     onPress = {()=>alert('a')}
                     key = {notiResults[notiResults.length-1].serial}>
                        <View style={Style.notiTileView}>
                            <Text style = {Style.tileText}>{notiResults[notiResults.length-1].title}</Text>

                        </View>
                     </TouchableHighlight>
                 </View>
             )
         }
         return notiTiles;
     }
 }
