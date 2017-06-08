/**
 * This is the style sheet for the add screen.
 * Programmers: Howard Hou, Richard Zeng
 */

import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
    rootContainer:{
        backgroundColor: '#0abab5',
        flex:1,
        paddingBottom: 10,
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
        paddingLeft: 10
    },

    headerItem:{
        fontSize: 20,
        color: 'white',
        alignItems: 'center'
    }

});


export default Style;
