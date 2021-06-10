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
            <Card.Image source={{uri: 'https://picsum.photos/200/300'}}>
                <Text style={{marginBottom: 10}}> {attendance} </Text>
                <Text style={{marginBottom: 10}}> {absence} </Text>
            </Card.Image>
        </Card>
    )
}