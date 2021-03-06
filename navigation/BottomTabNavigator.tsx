/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, HomeParamList, StudentsPramList, LessonsParmList } from '../types';
import { HomeScreen } from '../screens/HomeScreen';
import { StudentsScreen } from '../screens/StudentsScreen';
import { EditStudentScreen } from '../screens/EditStudentScreen';
import { LessonsScreen } from '../screens/LessonsScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='Home'
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Students'
        component={TabStudentsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Lessons'
        component={TabLessonsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='book' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabHomeStack = createStackNavigator<HomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabStudentsStack = createStackNavigator<StudentsPramList>();

function TabStudentsNavigator() {
  return (
    <TabStudentsStack.Navigator>
      <TabStudentsStack.Screen
        name='StudentsScreen'
        component={StudentsScreen}
        options={{ headerTitle: 'Students' }}
      />
      <TabStudentsStack.Screen
        name='EditStudentScreen'
        component={EditStudentScreen}
        options={{ headerTitle: 'Edit student' }}
      />
    </TabStudentsStack.Navigator>
  );
}

const TabLessonsStack = createStackNavigator<LessonsParmList>();

function TabLessonsNavigator() {
  return (
    <TabLessonsStack.Navigator>
      <TabLessonsStack.Screen
        name='LessonsScreen'
        component={LessonsScreen}
        options={{ headerTitle: 'Lessons' }}
      />
    </TabLessonsStack.Navigator>
  );
}
