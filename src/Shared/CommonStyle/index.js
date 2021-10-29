import { StyleSheet } from "react-native";
import fontValue from '../FontFamily';

export const commonStyle = (obj) => {
    const { 
        fontSize = '14',
        fontFamily =fontValue.PoppinsBlack,
        color = '#7E7E7E',  
        backgroundColor = '#FF2156'
    } = obj;

    const style = {
        text:{
            fontSize:fontSize,
            fontFamily:fontFamily,
            color:color
        },
        color:{
            color:color
        },
        background:{
            backgroundColor:backgroundColor
        }
    }

    return style;



}



export const commonJustify = StyleSheet.create({
    rowCenter : {
        flexDirection: "row",
        justifyContent: "center"
    },
    rowFlexEnd:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rowFlexStart:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowSpaceEvenly: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    center:{
        justifyContent: 'center'
    },
    textCenter:{
        textAlign: 'center'
    }
  
});