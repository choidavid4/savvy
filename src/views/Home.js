import React, { useContext, useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES, STRINGS } from '../styles/constants';
import { MainContext } from '../contexts/MainContext';
import Transaction from '../components/Transaction';
import Button from '../components/Button';

function Home() {
  const {context, setContext} = useContext(MainContext);
  const [month, setMonth] = useState({
    month: 1,
    name: "February",
    year: 2024,
    id: "2024-1"
  });
  const [monthValues, setMonthValues] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
    transactions: []
  })

  const handleNext = () => {
    const newMonth = {};
    if (month.month < 11) {
      newMonth.month = month.month + 1;
      newMonth.name = STRINGS.monthArray[month.month + 1];
      newMonth.year = month.year;
      newMonth.id = month.year + "-" + (month.month + 1);
    } else {
      newMonth.month = 0;
      newMonth.name = STRINGS.monthArray[0];
      newMonth.year = month.year + 1;
      newMonth.id = (month.year + 1) + "-" + 0;
    }
    setMonth(newMonth);
  }

  const handlePrev = () => {
    const newMonth = {};
    if (month.month > 0) {
      newMonth.month = month.month - 1;
      newMonth.name = STRINGS.monthArray[month.month - 1];
      newMonth.year = month.year;
      newMonth.id = month.year + "-" + (month.month - 1);
    } else {
      newMonth.month = 11;
      newMonth.name = STRINGS.monthArray[11];
      newMonth.year = month.year - 1;
      newMonth.id = (month.year - 1) + "-" + 11;
    }
    setMonth(newMonth);
  }

  useEffect(() => {
    if (context.monthlyBalances[month.id]) {
      setMonthValues(
        {
          income: context.monthlyBalances[month.id].income,
          expenses: context.monthlyBalances[month.id].expenses,
          balance: context.monthlyBalances[month.id].income - context.monthlyBalances[month.id].expenses,
          transactions: context.monthlyBalances[month.id].transactions
        }
      );
    } else {
      setMonthValues(
        {
          income: 0,
          expenses: 0,
          balance: 0,
          transactions: []
        }
      );
    }
  }, [month])
  
  // if (context.monthlyBalances[month.id]) {
  //   setMonthValues(
  //     {
  //       income: context.monthlyBalances[month.id].income,
  //       expenses: context.monthlyBalances[month.id].expenses,
  //       balance: context.monthlyBalances[month.id].income - context.monthlyBalances[month.id].expenses,
  //       transactions: context.monthlyBalances[month.id].transactions
  //     }
  //   );
  // }

  return (
    <ScrollView style={{backgroundColor: COLORS.background}}>
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
          <View style={[globalStyles.horizontalContainer, {justifyContent: "space-around"}]}>
            <Button onPress={handlePrev} text={"<"} type={"secondary"} styles={{paddingHorizontal: 10, paddingVertical: 5}}/>
            <Text style={{...globalStyles.h3, textAlign: "center", marginBottom: 10, color: COLORS.primary}}>{month.name + " " + month.year}</Text>
            <Button onPress={handleNext} text={">"} type={"secondary"} styles={{paddingHorizontal: 10, paddingVertical: 5}}/>
          </View>
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
        <View style={{ width: '100%'}}>
          <Text style={[globalStyles.h2, {textAlign: 'center', marginBottom: 10}]} >Transactions</Text>
          <FlatList
            data={monthValues.transactions}
            renderItem={ ({index, item}) => {
              return (<Transaction transaction={item}/>);
              }
            }
          />
        </View>
      </View>
    </ScrollView>
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