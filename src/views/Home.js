import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../styles/constants';

function Home() {
  const [balance, setBalance] = useState(0);

  setTimeout(() => {
    setBalance(balance + 10);
  }, 1000)

  return (
    <View style={globalStyles.mainContainer}>
        <View style={styles.container}>
          <Text style={{...globalStyles.h3, color: COLORS.primary}} >Balance</Text>
          <Text style={[globalStyles.p]} >Main Account</Text>
          <View style={{width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={[globalStyles.h1]} >$ {balance}</Text>
            <Icon name="eye" size={25} color={COLORS.font} />
          </View>
        </View>
        <View style={{...styles.container, gap: 20}}>
          <Text style={{...globalStyles.h3, textAlign: "center", marginBottom: 10, color: COLORS.primary}}>January</Text>
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
    gap: 20,
    backgroundColor: COLORS.background
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: "100%",
    backgroundColor: COLORS.containerBackground
  },
  horizontalContainer: {
    flexDirection: 'row', 
    gap: 10,
    width: "100%",
  }
 
});

export default Home