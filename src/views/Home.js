import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../styles/constants';

function Home() {
  return (
    <View style={styles.homeContainer}>
        <View style={styles.container}>
          <Text style={globalStyles.h3} >Balance</Text>
          <Text style={globalStyles.p} >Main Account</Text>
          <View style={{width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={globalStyles.h1} >$ 123,456.00</Text>
            <Icon name="eye" size={25} color={COLORS.font} />
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1, 
    padding: 16, 
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: "100%",
  },
 
});

export default Home