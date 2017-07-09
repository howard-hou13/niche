/**
 * The screen that adds new notifications.
 * Programmers: Howard Hou, Richard Zeng
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    DatePickerIOS,
    Button,
    ScrollView
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'
import Style from './AddStyle';
import realm from './NotiModel';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
            note: ""
        };
    }
    render() {
        return (
            // The first view contains the header and the scroll View
            // The first inner view contains the header and is orange
            // the second inner view contains the scroll view and is
            // tiffany blue
            <View>
                <View style={Style.header}>
                    <Text style={Style.headerItem}>New Notification</Text>
                </View>

                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    contentInset={{ bottom: 130 }}>
                    <View style={Style.rootContainer}>
                        <View style={Style.inputContainer}>

                            <View style={Style.field}>
                                <Text style={Style.inputPrompt}>
                                    Name of Notification
                                </Text>
                                <TextInput
                                    style={{
                                        height: 40, borderColor: 'white', borderWidth: 1,
                                        padding: 10
                                    }}
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                />
                            </View>

                            <View style={Style.field}>
                                <Text style={Style.inputPrompt}>
                                    Date and Time
                                </Text>
                                <DatePickerIOS
                                    date={this.state.date}
                                    mode="datetime"
                                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                                    onDateChange={this.onDateChange}
                                />
                            </View>

                            <View style={Style.field}>
                                <Text style={Style.inputPrompt}>
                                    Notes
                                </Text>
                                <TextInput
                                    style={{
                                        height: 120, borderColor: 'white', borderWidth: 1,
                                        padding: 10
                                    }}
                                    onChangeText={(note) => this.setState({ note })}
                                    value={this.state.note}
                                    multiline={true}
                                    keyboardType='default'
                                    returnKeyType='done'
                                />
                            </View>

                            <View style={Style.field}>
                                <Button
                                    onPress={this.onAddPress}
                                    title="Add Notification"
                                    color='#0abab5'
                                    accessibilityLabel="Add Event To notifications" />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onDateChange = (date) => {
        this.setState({
            date: date
        });
    }

    onAddPress = () => {
        if (this.state.name === "") {
            alert("Please enter a name for the notification");
        }
        else {
            const getMaxId = (collection) => {
                const maxId = Math.max.apply(null, collection.map((item) => item.id));
                return maxId ? maxId : 1;
            };
            let notiResults = realm.objects('Noti');
            alert(notiResults.length);

            let currentKey = (notiResults.length < 1) ? 1 : getMaxId(notiResults) + 1;
            alert(currentKey);

            realm.write(() => {
                realm.create('Noti', {
                    id: currentKey,
                    title: this.state.name,
                    message: this.state.note,
                    date: this.state.date
                });
            })

            this.setState({
                name: "",
                date: new Date(),
                timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
                note: ""
            });
        }
    }
}
