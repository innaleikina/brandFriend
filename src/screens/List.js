
import React from 'react';
import {StyleSheet,ScrollView, View, SafeAreaView, Text, TextInput, Button,  } from 'react-native';
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
                <Text key={data} style={styles.listItem}> {data} </Text>
            )
          })
      return (
        <SafeAreaView style={styles.container}>
            <Text>This is the main app with list</Text>
            <View style={styles.view}>
                    <TextInput style={styles.textInput}
                                    placeholder="Brand name"
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}/>   
                    <Button title="search"> </Button>    
            </View>     

             <ScrollView  style={styles.scrollView}>
              {brandsList}
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
    //   borderColor:"red",
    //   borderWidth: 0.5,
    },
    scrollView: {
    //   backgroundColor: 'pink',
    //   marginHorizontal: 20,
    width:"100%",
    display:"flex",
    flexDirection:"column",
    // alignItems:"center"
    },
    text: {
      fontSize: 42,
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width:"60%",
        marginTop:40,
        marginBottom:40
      
    },

     listItem: {
       marginTop:14,
       marginBottom:14,
       color:"purple",
        borderBottomColor: 'gray',
       borderBottomWidth: 1,
       marginLeft:80

     },
     view: {
         display:"flex",
        //  borderRadius: 4,
        //  borderWidth: 0.5,
        //  borderColor: 'red',
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         marginTop:40
     }

  });

  

  export default ListScreen;