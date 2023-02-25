import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight

} from 'react-native'
//import { TextInput } from 'react-native-gesture-handler';
class Fluxcontent extends Component{
    render(){
        return (
            <View>

            <Text style={{color:'white',fontSize:20}}> hi madhu bascar{this.props.name}</Text>
            </View>
        )
    }
}
export default class Flexbox2 extends Component{
    constructor(){
        super();
        this.state={
            main_text:'hello',
            sub_text:'wow',
            inter_text:'hai'
        }
    }
    updatetext(){
        this.setState({
            main_text:'endadaa',
            sub_text:'adine',
            inter_text:'hooi'


        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>{this.state.main_text}</Text>
                <Text style={styles.text2}>{this.state.sub_text}</Text>
                <Text style={styles.text3}>{this.state.inter_text}</Text>
                <Text style={styles.text3}>{this.state.inter_text}</Text>
                <TextInput style={styles.textinput} placeholder='update'
                placeholderTextColor='red' maxLength={10} secureTextEntry={true} 
                onChangeText={(username)=>this.setState({name:username})}></TextInput>
            <TouchableHighlight style={styles.TH}
            underlayColor='green' onPress={()=> this.updatetext()}>
                <Text style={styles.text4}>UPDATE</Text>

            </TouchableHighlight>
            <Fluxcontent name = 'akshay'></Fluxcontent>

            </View>
        )

    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
       // flexDirection:'row'
    },
    text1:{
        fontSize:20,
        color:'#f0f',
        fontWeight:'bold'
    },
    text2:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    },
    text3:{
        fontSize:30,
        fontWeight:'bold',
        color:'yellow'
    },
    TH:{
        width:'40%',
        height:30,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        borderWidth:3,
        marginTop:2
    },
    text4:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'

    },
    textinput:{
        height:40,
        backgroundColor:'blue',
        width:'70%',
        borderColor:'white',
        borderWidth:3,
        paddingLeft:40
        

    }


})