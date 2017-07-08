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
            notiPopupVisible: false,
            notiSerial: -1
         };
     }
     render(){
         return(
             <View>
                 <Modal
                 animationType={"slide"}
                 transparent={true}
                 visible={this.state.notiPopupVisible}
                 onRequestClose={() => {setNotiPopupVisible(false, -1)}}
                 >
                    <View style = {Style.notiPopup}>
                        {this.getNotiData()}

                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false, -1)}}>
                            <Text style = {Style.popupText}>
                                Close
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false, -1)}}>
                            <Text style = {Style.popupButtonDelete}>
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
    getNotiData(){
        let requestedNoti = realm.objects('Noti').filtered('id == $0', this.state.notiSerial);
        let notiData = [];
        if (requestedNoti.length>0){
            notiData.push(
                <View style = {Style.popupField}>
                    <Text style = {Style.popupText}>{requestedNoti[0].title}</Text>
                </View>
            );

            notiData.push(
                <View style = {Style.popupField}>
                    <Text style = {Style.popupText}>{Moment(requestedNoti.date).format('D MMMM')}</Text>
                    <Text style = {Style.popupText}>{Moment(requestedNoti.date).format('h:mm a')}</Text>
                </View>
            );

            notiData.push(
                <View style = {Style.popupField}>
                    <Text style = {Style.popupText}>{requestedNoti[0].message}</Text>
                </View>
            );
        }

        return notiData;

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

         var currIndex = -1;
         var index =0;

         //Change to while loop?

         while (index<max){
             let firstNoti = notiResults[index++];
             let secondNoti = notiResults[index++];

             notiTiles.push(
             <View style = {Style.tileRow}
             key = {firstNoti.id + "-" + secondNoti.id}>
                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>{this.setNotiPopupVisible(true, firstNoti.id)}}
                 key = {firstNoti.id}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{firstNoti.title}</Text>
                        <Text style = {Style.tileText}>{firstNoti.id}</Text>
                        <Text style = {Style.tileText}>{Moment(firstNoti.date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(firstNoti.date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>{this.setNotiPopupVisible(true, secondNoti.id)}}
                 key = {secondNoti.id}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{secondNoti.title}</Text>
                        <Text style = {Style.tileText}>{secondNoti.id}</Text>
                        <Text style = {Style.tileText}>{Moment(secondNoti.date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(secondNoti.date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>
             </View>
             )
         }

         if (max!=notiResults.length){
             notiTiles.push(
                 <View style = {Style.tileRow}
                 key = {notiResults[notiResults.length-1].id + "-"}>
                     <TouchableHighlight
                     style = {Style.notiTileTouchableHighlight}
                     onPress = {()=>{this.setNotiPopupVisible(true, notiResults[notiResults.length-1].serial)}}
                     key = {notiResults[notiResults.length-1].id}>
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

     setNotiPopupVisible(visible, notiSerial) {
         this.setState({
             notiPopupVisible: visible,
             notiSerial: notiSerial
         });
    }
 }
