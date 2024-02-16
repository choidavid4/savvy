import React from 'react'
import { globalStyles } from '../styles/style'
import { Text, View } from 'react-native'
import { COLORS } from '../styles/constants';

function Transaction({transaction}) {

    const parseDate = (millis) => {
        // return DD-MM-YYYY
        const date = new Date(millis);
        return "" + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }

  return (
    <View style={[globalStyles.card, styles.container ]}>
        <View style={[globalStyles.horizontalContainer, {justifyContent: 'space-between'}]}>
            <Text style={globalStyles.p}>{parseDate(transaction.dateAdded)}</Text>
        </View>
        <View style={[globalStyles.horizontalContainer, {justifyContent: 'space-between'}]}>
            <Text style={globalStyles.h3}>{transaction.description}</Text>
            <Text style={[globalStyles.h3, {color: transaction.isIncome ? COLORS.primaryDark : COLORS.primary}]}>{transaction.isIncome ? "+" : "-"} $ {transaction.value}</Text>
        </View>
    </View>
  )
}

const styles = {
    container: {
        marginVertical: 10
    }
}

export default Transaction