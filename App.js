import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiGlobal from './component/apiGlobal';
import ApiIndonesia from './component/apiIndonesia';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Text style={{alignSelf:'center', fontWeight:'bold' , fontSize:36}}>Data Covid-19</Text>
      <View style={{flex:2, borderTopWidth:1}}>
        <ApiGlobal/>
      </View>
      <View style={{flex:6.5}}>
        <ApiIndonesia/>
      </View>
    </View>
  );
}
