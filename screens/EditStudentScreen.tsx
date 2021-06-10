import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { EditStudentScreenRouteProp } from '../types';

interface Props {
    route: EditStudentScreenRouteProp
}

export function EditStudentScreen({route }: Props) {

  const { student } = route.params;
  const { absence, attendance } = student
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total absences : {absence} </Text>
      <Text style={styles.title}>Total attendance : {attendance} </Text>
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
