import * as React from 'react';
import {FlatList } from 'react-native';

import { View } from '../components/Themed';
import { useTypedSelector } from '../hooks/store-hooks';
import { LessonCard } from '../components/LessonCard';

export function LessonsScreen() {

  const { lessons } = useTypedSelector(store => store);
  return (
    
    <View>
      <FlatList
        data={lessons}
        renderItem={({ item }) => {
          return (
            <LessonCard lesson={item}  />
          );
        }} 
      />
    </View>
  );
}
