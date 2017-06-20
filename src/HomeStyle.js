/**
 * This is the style sheet for the home screen.
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
        paddingTop: 10,
        minHeight: height
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

    notiContainer:{
        marginLeft: 50,
        marginRight: 50,
        flexDirection:'column'

    },

    notiTileTouchableHighlight:{
        backgroundColor: 'white',
        alignItems: 'center',
        height: 125,
        width: 125,
        borderRadius: 5
    },

    tileRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:5,
        marginBottom: 5
    },

    tileText:{
        fontSize: 20,
        color:'#0abab5',
        fontWeight: 'bold'
    },

    notiTileView:{
        alignItems:'center',
        flexDirection:'column',
        paddingTop: 20
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

    popupButtonDelete:{
        fontSize:25,
        color:'#EB0F0F',
        paddingTop: 10,
        fontWeight:'bold'
    },

    popupField:{
        paddingTop:10,
        paddingBottom: 10
    }

});


export default Style;
