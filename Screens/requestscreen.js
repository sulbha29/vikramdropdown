import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown' 
export default class Requestscreen extends Component{
    constructor(){
        super();
        this.state={
            dropdown:"",
            details:"",
            
         }
    }
    render(){
        let data = [{
            value: 'clothes',
          }, {
            value: 'books',
          }, {
            value: 'stationary',
          }];
        return(
            <View style={{flex:1}}>
               
        <Dropdown
        label='items'
        data={data}
      />

     
     

           
                
                <TextInput placeholder="More details" onChangeText={(text)=>{
                    this.setState({text:this.state.details})
                }}/>
                <TouchableOpacity onPress={()=>{
                  
                }}><Text>Submit</Text></TouchableOpacity>
              </View> 
         
        )
    }
}