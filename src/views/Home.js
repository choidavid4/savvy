import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../styles/constants';
import { MainContext } from '../contexts/MainContext';

function Home() {
  const {context, setContext} = useContext(MainContext);
  const [month, setMonth] = useState({
    month: 1,
    name: "February",
    year: 2024,
    id: "2024-1"
  });

  let monthValues = {
    income: 0,
    expenses: 0,
    balance: 0
  }

  if (context.monthlyBalances[month.id]) {
    monthValues = {
      income: context.monthlyBalances[month.id].income,
      expenses: context.monthlyBalances[month.id].expenses,
      balance: context.monthlyBalances[month.id].income - context.monthlyBalances[month.id].expenses
    }
  }

  return (
    <View style={globalStyles.mainContainer}>
        <View style={styles.container}>
          <Text style={{...globalStyles.h3, color: COLORS.primary}} >Balance</Text>
          <Text style={[globalStyles.p]} >Main Account</Text>
          <View style={{width: '100%', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={[globalStyles.h1]} >$ {context.balance}</Text>
            <Icon name="eye" size={25} color={COLORS.font} />
          </View>
        </View>
        <View style={{...styles.container, gap: 20}}>
          <Text style={{...globalStyles.h3, textAlign: "center", marginBottom: 10, color: COLORS.primary}}>{month.name + " " + month.year}</Text>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "65%", textAlign: "left" }]}>Income</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ {monthValues.income}</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "65%", textAlign: "left" }]}>Expenses</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ {monthValues.expenses}</Text>
          </View>
          <View style={styles.horizontalContainer}>
            <Text style={[globalStyles.h3, { width: "65%", textAlign: "left" }]}>Monthly Balance</Text>
            <Text style={ {...globalStyles.p, fontSize: SIZES.h3} }>$ { monthValues.balance }</Text>
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