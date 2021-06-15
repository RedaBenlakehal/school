import * as React from 'react';
import { StyleSheet } from 'react-native';
import { StudentCard } from '../components/StudentCard';

import { View } from '../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import { useTypedSelector } from '../hooks/store-hooks';

import { StudentsScreensNavigationProp } from '../types';
import { getStudents } from '../selectors';

type Props = {
  navigation: StudentsScreensNavigationProp;
};

export function StudentsScreen({ navigation }: Props) {

  const students = useTypedSelector((store) => getStudents(store));

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(students)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
              <StudentCard student={item} navigation={navigation} />
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
