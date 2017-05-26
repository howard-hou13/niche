/**
 * The screen that adds new notifications.
 * Programmers: Howard Hou, Richard Zeng
 */

 import React, {Component} from 'react';
 import {
     View,
     Text,
     TextInput,
     DatePickerIOS
 } from 'react-native';
 import Style from './AddStyle';

 export default class Add extends Component{
     constructor(props){
         super(props);
         this.state = {
             name: "",
             date: new Date(),
             timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
         };
     }
     render(){
         return(
             <View style = {Style.rootContainer}>
                <View style = {Style.inputContainer}>
                    <Text>Name of notification</Text>
                    <TextInput
                    style={{height: 40, borderColor: 'black', borderWidth: 1,
                    padding: 10}}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    />

                    <Text> Date and Time </Text>
                    <DatePickerIOS
                      date={this.state.date}
                      mode="datetime"
                      timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                      onDateChange={this.onDateChange}
                    />
                </View>
             </View>
         );
     }

     onDateChange = (date) => {
         this.setState({
             date: date
         });
     }
 }
