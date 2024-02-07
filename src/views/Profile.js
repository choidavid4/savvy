import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/style'

function Profile() {
  return (
    <View style={globalStyles.mainContainer}>
        <Text style={ globalStyles.h1 }>Profile</Text>
    </View>
  )
}

export default Profile