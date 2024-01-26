import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../styles/constants';

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
        <View style={{...styles.container, gap: 20}}>
          <Text style={{...globalStyles.h3, textAlign: "center", marginBottom: 10}}>January</Text>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "30%", textAlign: "left" }]}>Income</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ 200,000</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "30%", textAlign: "left" }]}>Expenses</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ 76,544</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "30%", textAlign: "left" }]}>Remaining</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ 123,456</Text>
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
    gap: 20
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: "100%"
  },
  horizontalContainer: {
    flexDirection: 'row', 
    gap: 10,
    width: "100%",
  }
 
});

export default Home