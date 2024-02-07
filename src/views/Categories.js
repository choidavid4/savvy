import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/style'

function Categories() {
  return (
    <View style={globalStyles.mainContainer}>
        <Text style={ globalStyles.h1 }>Categories</Text>
    </View>
  )
}

export default Categories