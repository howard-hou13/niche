/**
 * The screen that adds new notifications.
 * Programmers: Howard Hou, Richard Zeng
 */

 import React, {Component} from 'react';
 import {
     View,
     Text,
     TextInput,
     DatePickerIOS,
     Button
 } from 'react-native';
 import { RadioButtons } from 'react-native-radio-buttons'
 import Style from './AddStyle';

 export default class Add extends Component{
     constructor(props){
         super(props);
         this.state = {
             name: "",
             date: new Date(),
             timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
             note: "",
             setSelectedOption: "High"
         };
     }
     render(){
         const priorityLevels = [
             "High",
             "Medium",
             "Low"
         ];
         return(
             <View style = {Style.rootContainer}>
                <View style = {Style.inputContainer}>

                    <View style = {Style.field}>
                        <Text>
                            Name of Notification
                        </Text>
                        <TextInput
                        style={{height: 40, borderColor: 'black', borderWidth: 1,
                        padding: 10}}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                    </View>

                    <View style = {Style.field}>
                        <Text style = {Style.inputPrompt}>
                            Date and Time
                        </Text>
                        <DatePickerIOS
                          date={this.state.date}
                          mode="datetime"
                          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                          onDateChange={this.onDateChange}
                        />
                    </View>

                    <View style = {Style.field}>
                        <Text>
                            Notes
                        </Text>
                        <TextInput
                        style = {{height: 120, borderColor: 'black', borderWidth: 1,
                        padding: 10}}
                        onChangeText = {(note) => this.setState({note})}
                        value = {this.state.note}
                        multiline = {true}
                        keyboardType = 'default'
                        returnKeyType = 'done'
                        />
                    </View>

                    <View style = { Style.field}>
                        <Button
                        onPress = {this.onAddPress}
                        title = "Add Notification"
                        color = '#4682b4'
                        accessibilityLabel="Add Event To notifications"/>
                    </View>
                </View>
             </View>
         );
     }

     onDateChange = (date) => {
         this.setState({
             date: date
         });
     }

     onPriorityPress = (priorityLevel) =>{
         this.setState({
             priorityLevel: priorityLevel
         });
     }

     onAddPress = () =>{
         if (this.state.name === ""){
             alert("Please enter a name for the notification");
         }
     }
 }
