import * as React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon, ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Student } from '../types';
interface Props {
    student: Student;
}

export function StudentCard ({student}: Props) {

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
                style={{marginHorizontal: 100, marginTop: 10}}
                icon={<Icon name='edit' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            />
        </Card>
    )
}