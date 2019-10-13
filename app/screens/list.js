
import React from 'react';
import {StyleSheet,ScrollView, View, SafeAreaView, Text, TextInput } from 'react-native';
const dataBrands = require('../data/preSetBrands.json');
import Constants from 'expo-constants';



class ListScreen extends React.Component {

    state= {
     brandsArr:dataBrands.preSetBrands,
     text:""
    }
    render() {
        const brandsList = this.state.brandsArr.map((data) => {
            return (
                <Text>{data}</Text>
            )
          })
      return (
        <SafeAreaView style={styles.container}>
                      <Text>This is the main app with list</Text>
                      <TextInput style={styles.textInput}
                                 placeholder="Brand name"
                                 onChangeText={(text) => this.setState({text})}
                                 value={this.state.text}/>   

             <ScrollView style={styles.scrollView}>
               <Text> {brandsList} </Text>
             </ScrollView>
        </SafeAreaView>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      display: "flex",
    //   marginTop: Constants.statusBarHeight,
     flexDirection:"column",
      alignContent:"center",
      alignItems:"center",
      justifyContent:"center",
      borderColor:"red",
      borderWidth: 0.5,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width:"50%",
        marginTop:40,
        marginBottom:40
      
    }

  });

  export default ListScreen;