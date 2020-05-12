import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';


class ApiIndonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.box1}><Text style={{marginBottom:10,fontSize:13}}>{item.provinsi}</Text></View>
      <View style={styles.box2}><Text style={styles.box1text}>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text style={styles.box1text}>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text style={styles.box1text}>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

getDataGlobal = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
            <Text style={styles.indonesia}>Indonesia</Text>
            <View>
                <FlatList 
                    data={this.state.DataIndo.Data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        </View>
        
    )
}
};
export default ApiIndonesia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    borderRadius:25,
    borderWidth:1,
    padding:7,
    backgroundColor: '#fff0f5',
  },

  indonesia:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:36,
    marginTop:5,
    marginBottom:5
  },

  box1:{
    width:160,
    padding:3,
    height:20
  },

  box1text:{
    alignSelf: 'center',
  },

  box2:{
    width:50,
    marginLeft:10,
    height:20,
    backgroundColor:'#ffa500'
  },
  box3:{
    width:50,
    marginLeft:10,
    height:20,
    backgroundColor:'#2e8b57'
  },
  box4:{
    marginLeft:10,
    width:50,
    height:20,
    backgroundColor:'#ff6347'
  },
})

 