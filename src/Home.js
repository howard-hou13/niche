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
            notiTitle: ""
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

                        {this.getNotiData()}

                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false, "")}}>
                            <Text style = {Style.popupText}>
                                Close
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                        style = {Style.popupButton}
                        onPress = {()=>{this.setNotiPopupVisible(false, "")}}>
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
        let requestedNoti = realm.objects('Noti').filtered('title == $0', this.state.notiTitle);
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

         for (index = 0; index < max; index++){
             notiTiles.push(
             <View style = {Style.tileRow}>
                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>{this.setNotiPopupVisible(true, notiResults[index].title)}}
                 key = {notiResults[index].serial}>
                    <View style={Style.notiTileView}>
                        <Text style = {Style.tileText}>{notiResults[index].title}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('D MMMM')}</Text>
                        <Text style = {Style.tileText}>{Moment(notiResults[index].date).format('h:mm a')}</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableHighlight
                 style = {Style.notiTileTouchableHighlight}
                 onPress = {()=>{this.setNotiPopupVisible(true, notiResults[index].title)}}
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
                     onPress = {()=>{this.setNotiPopupVisible(true, notiResults[index].title)}}
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

     setNotiPopupVisible(visible, notiTitle) {
         this.setState({
             notiPopupVisible: visible,
             notiTitle: notiTitle
         });
    }
 }
