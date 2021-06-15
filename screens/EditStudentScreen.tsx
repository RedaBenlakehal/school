import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { EditStudentScreenRouteProp } from '../types';
import { Button, Icon } from 'react-native-elements';

interface Props {
    route: EditStudentScreenRouteProp
}

export function EditStudentScreen({route }: Props) {

  const { student } = route.params;
  const { absence, attendance, name } = student;
  
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student: {name} </Text>
      <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>Total absences : {absence} </Text>
        <Button
            onPress={() => {}}
            icon={<Icon name='add' color='#ffffff' />}
            buttonStyle={{margin: 5, marginLeft: 20}}
        />
        <Button
            onPress={() => {}}
            icon={<Icon name='remove' color='#ffffff' />}
            buttonStyle={{margin: 5, backgroundColor: 'red'}}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>Total attendance : {attendance} </Text>
        <Button
            onPress={() => {}}
            icon={<Icon name='add' color='#ffffff' />}
            buttonStyle={{margin: 5}}
        />
        <Button
            onPress={() => {}}
            icon={<Icon name='remove' color='#ffffff' />}
            buttonStyle={{margin: 5, backgroundColor: 'red'}}
        />
      </View>
      
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
    marginTop: 10,
    marginRight: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
