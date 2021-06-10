import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { EditStudentScreenRouteProp } from '../types';
import { Button, Icon } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { useTypedDispatch, useTypedSelector } from '../hooks/store-hooks';
import { getStudent } from '../selectors';
import { decrementStudentAbsence, decrementStudentAttendence, incrementStudentAbsence, incrementStudentAttendence } from '../components/actions';

interface Props {
    route: EditStudentScreenRouteProp
}

export function EditStudentScreen({route}: Props) {

  const dispatch = useTypedDispatch(); 

  const { studentId } = route.params;
  const student = useTypedSelector((state) => getStudent(state, studentId));
  const state = useTypedSelector((state) => state); 

  console.log(state)
  
  if(student === undefined) {
    return null; 
  }


  const {absence, attendance, name, id} = student; 
  console.log({student})

  const handleAbsenceValueChange = (value: 1 | -1) => {
      return () => {
        if(value === 1)  {
          dispatch(incrementStudentAbsence(id))
        } else {
          dispatch(decrementStudentAbsence(id))
        }
      }
  }

  const handleAttendenceChange = (value: 1 | -1) => {
    return () => {
      if(value === 1)  {
        dispatch(incrementStudentAttendence(id))
      } else {
        dispatch(decrementStudentAttendence(id))
      }
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student: {name}</Text>
      <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>Total absences : {absence} </Text>
        <Button
            onPress={handleAbsenceValueChange(1)}
            icon={<Icon name='add' color='#ffffff' />}
            buttonStyle={{margin: 5, marginLeft: 20}}
        />
        <Button
            onPress={handleAbsenceValueChange(-1)}
            icon={<Icon name='remove' color='#ffffff' />}
            buttonStyle={{margin: 5, backgroundColor: 'red'}}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>Total attendance : {attendance} </Text>
        <Button
            onPress={handleAttendenceChange(1)}
            icon={<Icon name='add' color='#ffffff' />}
            buttonStyle={{margin: 5}}
        />
        <Button
            onPress={handleAttendenceChange(-1)}
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
