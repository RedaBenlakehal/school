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
  StudentDetailsScreen: undefined;
}

export type LessonsParmList = {
  LessonsScreen: undefined;
  LessonsDetailsScreen: undefined;
}
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
}

export type StoreAction = undefined; // TODO