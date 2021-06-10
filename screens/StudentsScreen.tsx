import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { StudentCard } from '../components/StudentCard';

import { Text, View } from '../components/Themed';
import { Student } from '../types';
import { Card, ListItem } from 'react-native-elements';

export function StudentsScreen() {

  const { students } = useSelector((store) => store);

  return (
    <View style={styles.container}>
      {students.map((student: Student) => <StudentCard student={student} />)}
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
