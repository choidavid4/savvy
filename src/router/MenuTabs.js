import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../views/Home';
import Categories from '../views/Categories';
import New from '../views/New';
import Savings from '../views/Savings';
import Profile from '../views/Profile';

const Tab = createBottomTabNavigator();

function MenuTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Savings" component={Savings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }

export default MenuTabs