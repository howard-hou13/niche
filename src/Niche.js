/**
 * This file contains the main logic for the app.
 * Programmers: Howard Hou, Richard Zeng
 */

import React, {Component} from 'react';
import {
    TabBarIOS
} from 'react-native';
import Style from './NicheStyle';
import Home from './Home';
import Add from './Add';

export default class Niche extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'Home'
        }
    }
    render(){
        return(
            // These the tabs for the application.
            <TabBarIOS selectionTab = {this.state.selectedTab}
            tintColor= '#0abab5'>

                <TabBarIOS.Item
                title = "Home"
                selected = {this.state.selectedTab === 'Home'}
                icon = {require('./assets/home.png')}
                onPress={()=>{
                    this.setState({
                        selectedTab: 'Home'
                    });
                }}
                >
                    <Home/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                title = "Add"
                selected = {this.state.selectedTab === 'Add'}
                icon = {require('./assets/add.png')}
                onPress = {()=>{
                    this.setState({
                        selectedTab: 'Add'
                    });
                }}
                >
                    <Add/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}
