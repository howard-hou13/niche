/**
 * This is the style sheet for the add screen.
 * Programmers: Howard Hou, Richard Zeng
 */

import {StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
var {
   width,
   height
} = Dimensions.get('window');

var Style = StyleSheet.create({
    rootContainer:{
        backgroundColor: '#0abab5',
        flex:1,
        paddingBottom: 20,
        paddingTop: 10
    },

    inputContainer:{
        marginLeft: 50,
        marginRight: 50,
    },

    inputPrompt:{
        fontSize: 20,
        color: '#0abab5'
    },

    field:{
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },

    header:{
        backgroundColor: '#EBD038',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30
    },

    headerItem:{
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        fontWeight: 'bold'
    },

    notiPopup:{
        backgroundColor: '#EBD038',
        alignItems: 'center',
        padding: 50,
        minHeight: height
    },

    popupButton:{
        backgroundColor: 'white',
        alignItems: 'center',
        height: 50,
        width: width -100,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },

    popupText:{
        fontSize:25,
        color:'#0abab5',
        paddingTop: 10,
        fontWeight: 'bold'
    },

});


export default Style;
