import React, { useContext, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/style'
import Button from '../components/Button'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-native-date-picker'
import { COLORS } from '../styles/constants'
import { MainContext } from '../contexts/MainContext'

function New() {

  const {context, setContext} = useContext(MainContext);

  const [date, setDate] = useState(new Date());
  const [isIncome, setIsIncome] = useState(true);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // crear el movimiento
    const transaction = {
      value: data.value,
      description: data.description,
      isIncome: isIncome,
      dateAdded: date.valueOf()
    }

    const monthId = date.getFullYear() + "-" + date.getMonth();

    // Create monthlyBalance object if it does not exist
    if (!context.monthlyBalances[monthId]) {
      const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const newContext = {
        ...context
      }

      newContext.monthlyBalances[monthId] = {
        month: date.getMonth(),
        year: date.getFullYear(),
        id: monthId,
        name: monthArray[date.getMonth()],
        income: 0,
        expenses: 0
      };

      setContext(newContext);
    }

    data.value = Number(data.value);

    // sumarlo a context.incomes o context.expenses
    if (isIncome) {
      const newContext = {
        ...context,
      }

      newContext.incomes.unshift(transaction);
      newContext.balance += data.value;
      newContext.monthlyBalances[monthId].income += data.value;

      setContext(newContext);

    } else {
      const newContext = {...context};

      newContext.expenses.unshift(transaction);
      newContext.balance -= data.value;
      newContext.monthlyBalances[monthId].expenses += data.value;

      setContext(newContext);
    }

    // data.value = "";
    // data.description = "";

  }

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
            onChangeText={field.onChange}
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
            onChangeText={field.onChange}
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
      <Button text={"SAVE"} onPress={handleSubmit(onSubmit)} type={"primary"}/>
    </View>
  )
}

export default New