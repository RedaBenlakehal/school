import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { StudentCard } from '../components/StudentCard';

import { Text, View } from '../components/Themed';
import { Student, School } from '../types';
import { Card, ListItem } from 'react-native-elements';
import { useTypedSelector } from '../hooks/store-hooks';
import { FlatList } from 'react-native-gesture-handler';

export function StudentsScreen() {

  const { students } = useTypedSelector((store) => store);

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
              <StudentCard student={item} />
          );
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
