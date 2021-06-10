import * as React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Student } from '../types';
interface Props {
    student: Student;
}

export function StudentCard ({student}: Props) {

    const { name, attendance, absence } = student;
    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri: 'https://picsum.photos/200/300'}} style={{ width: 250, height: 150, margin : 10 }} />
            <Text style={{marginBottom: 10, marginTop: 10}}> total attendances : {attendance} </Text>
            <Text style={{marginBottom: 10, marginTop: 10}}> total absences :{absence} </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Details' 
            />
        </Card>
    )
}