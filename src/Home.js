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
     TouchableHighlight,
     Modal
 } from 'react-native';
 import Style from './HomeStyle';
 import realm from './NotiModel';
 import Moment from 'moment';

 export default class Add extends Component{
     constructor(props){
         super(props);
         this.state = {
            notiPopupVisible: false
         };
     }
     render(){
         return(
             <View>
                 <Modal
                 animationType={"slide"}
                 transparent={true}
                 visible={this.state.notiPopupVisible}
                 onRequestClose={() => {setNotiPopupVisible(false)}}
                 >
                    <View style = {Style.notiPopup}>
                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false)}}>
                            <Text style = {Style.popupText}>
                                Close
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false)}}>
                            <Text style = {Style.popupTextDelete}>
                                Delete
                            </Text>
                        </TouchableHighlight>
                    </View>
                 </Modal>

                <View style = {Style.header}>
                    <Text style = {Style.headerItem}>My Noti</Text>
                </View>

                <ScrollView
                automaticallyAdjustContentInsets={false}
                contentInset={{bottom:130}}>
                    <View style = {Style.rootContainer}>
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
                 onPress = {()=>{this.setNotiPopupVisible(true)}}
                 key = {notiResults[index].serial}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>{this.setNotiPopupVisible(true)}}
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
                     onPress = {()=>{this.setNotiPopupVisible(true)}}
                     key = {notiResults[notiResults.length-1].serial}>
                        <View style={Style.notiTileView}>
                            <Text style = {Style.tileText}>{notiResults[notiResults.length-1].title}</Text>
                            <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('D MMMM')}</Text>
                            <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('h:mm a')}</Text>
                        </View>
                     </TouchableHighlight>
                 </View>
             )
         }
         return notiTiles;
     }

     setNotiPopupVisible(visible) {
         this.setState({notiPopupVisible: visible});
    }
 }
