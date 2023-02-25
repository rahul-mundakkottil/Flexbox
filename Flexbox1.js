import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight




} from 'react-native'

export default class Flexbox1 extends Component{

render(){
    return(
        <View style={styles.viewdesign}>
            <View style={styles.redbox}></View>
            <Text style={styles.text1}>RED</Text>
            <View style={styles.blackbox}></View>
            <Text style={styles.text2}>BLACK</Text>
        
        <TouchableHighlight style={styles.buttonstyle} 
        onPress={()=> this.props.navigation.navigate('Homepage')}>
         <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableHighlight>
        </View>

    )
}
}
 const styles= StyleSheet.create({
    viewdesign:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'green'

    },
    redbox:{
       //flex:1,
       height:100,
       width:100,
       backgroundColor:'red',
        
    
    },
    blackbox:{
        //flex:10,
        backgroundColor:'black',
        height:100,
        width:100
        
    },
    text1:{
      fontSize:10,
      color:'red',
      fontWeight:'bold'  
    },
    text2:{
        fontSize:10,
        color:'black' ,
        fontWeight:'bold' 
      },
      buttonstyle:{
        height:40,
        width:'30%',
        marginLeft:135,
        marginTop:20,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
       },
  




 }
 )