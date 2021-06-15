import * as React from 'react';
import { ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Lesson } from '../types';
interface Props {
    lesson: Lesson
}

export function LessonCard ({ lesson }: Props) {

    const { title, avatar, id } = lesson;
    return(
        <ListItem key={id} bottomDivider>
            <Avatar source={{uri: avatar}} />
            <ListItem.Content>
            <ListItem.Title>{title}</ListItem.Title>
            <ListItem.Subtitle>Some description</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}