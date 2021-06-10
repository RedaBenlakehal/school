import * as React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Student, StudentsScreensNavigationProp } from '../types';
interface Props {
    student: Student;
    navigation: StudentsScreensNavigationProp;
}

export function StudentCard ({ student, navigation}: Props) {

    const { name, attendance, absence, lessons } = student;
    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri: 'https://picsum.photos/200/300'}} style={{ width: 250, height: 150, margin : 10 }} />
            <Text style={{marginBottom: 10, marginTop: 10}}> total attendances : {attendance} </Text>
            <Text style={{marginBottom: 10, marginTop: 10}}> total absences :{absence} </Text>
            <Text style={{marginBottom: 10, marginTop: 10}}> Lessons : </Text>
            {lessons.map(({ title, avatar }, index) => (
                <ListItem key={index} bottomDivider>
                    <Avatar source={{uri: avatar}} />
                    <ListItem.Content>
                    <ListItem.Title style= {{ fontSize: 12 }}>{title}</ListItem.Title>
                    <ListItem.Subtitle style= {{ fontSize: 10 }} >Some description</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
            <Button
                onPress={() => navigation.navigate('EditStudentScreen', {student: student})}
                icon={<Icon name='edit' color='#ffffff' />}
                buttonStyle={{marginHorizontal: 100, marginTop: 15}}
            />
        </Card>
    )
}