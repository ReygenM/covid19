import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ApiGlobal extends React.Component{
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  async componentDidMount () {
    const response = await fetch('https://covid19.mathdro.id/api')
    const data = await response.json()
    const { confirmed , recovered , deaths, lastUpdate} = await data
    this.setState({
        data: {
            confirmed: await confirmed,
            recovered: await recovered,
            death: await deaths,
            lastUpdate: await lastUpdate,
        }
    })
  }
render(){
    if (!this.state.data.confirmed) {
      return <Text>Loading..</Text>
    }
    if (!this.state.data.recovered){
      return <Text>Loading..</Text>
    }
    if (!this.state.data.death){
      return <Text>Loading..</Text>
    }
    if (!this.state.data.lastUpdate){
      return <Text>Loading..</Text>
    }
     return (
         <View style={styles.container}>
            <View style={{marginTop:10}}>
                <Text style={styles.Global}>GLOBAL</Text>
            </View>
            <View style={styles.containerValue}>
                <View style={styles.confirmedContainer}>
                    <Text style={styles.confirmed}>Confirmed</Text>
                    <Text style={styles.confirmedValue}>{this.state.data.confirmed.value}</Text>
                </View>
                <View style={styles.recoveredContainer}>
                    <Text style={styles.recovered}>Recovered</Text>
                    <Text style={styles.recoveredValue}>{this.state.data.recovered.value}</Text>
                </View>
                <View style={styles.deathContainer}>
                    <Text style={styles.death}>Deaths</Text>
                    <Text style={styles.deathValue}>{this.state.data.death.value}</Text>
                </View>
            </View>
            <View>
                <Text style={{marginLeft:75,marginTop:5,fontSize:12}}>Last Update: {this.state.data.lastUpdate}</Text>
            </View>
         </View>
    );
  }
}
export default ApiGlobal;


const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    confirmedContainer:{
        marginLeft:25,
        backgroundColor:'#ffa500',
        borderWidth:1
    },
    recoveredContainer:{
        marginLeft:30,
        backgroundColor:'#2e8b57',
        borderWidth:1
    },
    deathContainer:{
        marginLeft:35,
        backgroundColor:'#ff6347',
        borderWidth:1
    },
    deathValue:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:10,
      marginBottom:10
    },
  
    recoveredValue:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:10,
      marginBottom:10
    },
  
    confirmedValue:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:10,
      marginBottom:10
    },
  
    Global:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:36
    },
  
    confirmed:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:5,
      marginBottom:5
    },
  
    recovered:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:5,
      marginBottom:5
    },
  
    death:{
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:18,
      marginTop:5,
      marginBottom:5
    },
  
    containerValue: {
      flexDirection:'row',
      marginTop:15
    },
  
    name:{
      fontSize:20,
      fontWeight: 'bold',
      color: "#000000",
      alignSelf: 'center',
      margin:25
  },
  })