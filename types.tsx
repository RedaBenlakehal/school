import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { decrementStudentAbsence, decrementStudentAttendence, incrementStudentAbsence, incrementStudentAttendence } from './components/actions';
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Students: undefined;
  Lessons: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
}

export type StudentsPramList = {
  StudentsScreen: undefined;
  EditStudentScreen: { studentId: number };
}

export type LessonsParmList = {
  LessonsScreen: undefined;
}

export type StudentsScreensNavigationProp = StackNavigationProp<StudentsPramList>;
export type EditStudentScreenRouteProp = RouteProp<StudentsPramList, 'EditStudentScreen'>;

export interface School {
  students : Student[];
  lessons: Lesson[];
}

export interface Student {
  id: number;
  name: string;
  lessons: Lesson[];
  absence: number;
  attendance: number;
  notes: Note[];
}

export interface Note {
  lesson: Lesson;
  mark: number
}

export interface Lesson {
  id: number;
  title: string;
  avatar: string
}

export type StoreAction = ReturnType<typeof incrementStudentAbsence> 
| ReturnType<typeof decrementStudentAbsence> 
| ReturnType<typeof incrementStudentAttendence> 
| ReturnType<typeof decrementStudentAttendence>; 