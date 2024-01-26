import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Button from '../components/Button'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-native-date-picker'

function New() {
  const [date, setDate] = useState(new Date());
  const { control, handleSubmit } = useForm();

  return (
    <View style={globalStyles.mainContainer}>
      <View style={{ ...globalStyles.horizontalContainer, justifyContent: 'space-around' }}>
        <Button text={"Income"} onPress={() => {}} type={"primary"}/>
        <Button text={"Expense"} onPress={() => {}} type={"secondary"}/>
      </View>
      <View style={ globalStyles.card }>
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
          <TextInput
            {...field}
            style={ {...globalStyles.h1, width: "100%", textAlign: 'center'} }
            placeholder="Value"
          />
        )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
          <TextInput
            {...field}
            style={{width: "100%", textAlign: 'center'}}
            placeholder="Description"
          />
        )}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Date:</Text>
        <DatePicker date={date} onDateChange={setDate} />
      </View>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Category:</Text>
        <Text>SELECT</Text>
      </View>
      <View style={{ width: "100%" }}>
        <Text style={globalStyles.bold}>Account:</Text>
        <Text>SELECT</Text>
      </View>
      <Button text={"SAVE"} onPress={() => {}} type={"primary"}/>
    </View>
  )
}

export default New