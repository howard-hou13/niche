/**
 * This is the style sheet for the home screen.
 * Programmers: Howard Hou, Richard Zeng
 */

import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
    rootContainer:{
        backgroundColor: '#0abab5',
        flex:1,
        paddingBottom: 20,
        paddingTop: 10
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
        color:'black'
    },

    notiTileView:{
        alignItems:'center',
        flexDirection:'column',
        paddingTop: 20
    }

});


export default Style;
