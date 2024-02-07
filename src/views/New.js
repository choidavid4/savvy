import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Button from '../components/Button'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-native-date-picker'
import { COLORS } from '../styles/constants'

function New() {
  const [date, setDate] = useState(new Date());
  const [isIncome, setIsIncome] = useState(true);
  const { control, handleSubmit } = useForm();

  return (
    <View style={globalStyles.mainContainer}>
      <View style={{ ...globalStyles.horizontalContainer, justifyContent: 'space-around' }}>
        <Button text={"Income"} onPress={() => { setIsIncome(true) }} type={isIncome ? "primary" : "secondary"}/>
        <Button text={"Expense"} onPress={() => { setIsIncome(false) }} type={!isIncome ? "primary" : "secondary"}/>
      </View>
      <View style={ globalStyles.card }>
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
          <TextInput
            {...field}
            style={ {...globalStyles.h1, width: "100%", textAlign: 'center', color: COLORS.font} }
            placeholder="Amount"
            placeholderTextColor= { COLORS.font }
          />
        )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
          <TextInput
            {...field}
            style={{width: "100%", textAlign: 'center', color: COLORS.font}}
            placeholder="Description"
            placeholderTextColor= { COLORS.font }
          />
        )}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Date:</Text>
        <View style={{ alignItems: "center" }}>
          <DatePicker mode="date" fadeToColor={COLORS.background} textColor={COLORS.font} date={date} onDateChange={setDate} />
        </View>
      </View>
      {/* <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Category:</Text>
        <Text>SELECT</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Account:</Text>
        <Text>SELECT</Text>
      </View> */}
      <Button text={"SAVE"} onPress={() => {}} type={"primary"}/>
    </View>
  )
}

export default New