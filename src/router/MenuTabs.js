import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../views/Home';
import Categories from '../views/Categories';
import New from '../views/New';
import Savings from '../views/Savings';
import Profile from '../views/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { COLORS } from '../styles/constants'

const Tab = createBottomTabNavigator();

function MenuTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name="home" size={25} color={focused ? COLORS.accent : "grey"} />,
          tabBarShowLabel: false
        }}/>
        <Tab.Screen name="Categories" component={Categories} 
          options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name="format-list-bulleted" size={25} color={focused ? COLORS.accent : "grey"} />,
          tabBarShowLabel: false
        }}
        />
        <Tab.Screen name="New" component={New} 
          options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name="plus" size={30} color={focused ? COLORS.accent : "grey"} />,
          tabBarShowLabel: false
        }}
        />
        <Tab.Screen name="Savings" component={Savings} 
          options={{
          tabBarIcon: ({ focused, color, size }) => <IconFontisto name="dollar" size={22} color={focused ? COLORS.accent : "grey"} />,
          tabBarShowLabel: false
        }}
        />
        <Tab.Screen name="Profile" component={Profile} 
          options={{
          tabBarIcon: ({ focused, color, size }) => <Icon name="account" size={25} color={focused ? COLORS.accent : "grey"} />,
          tabBarShowLabel: false
        }}
        />
      </Tab.Navigator>
    );
  }

export default MenuTabs