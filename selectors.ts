import { RootState } from './App';

export const getStudent = (state: RootState, studentId: number) => state.students[studentId];

export const getStudents = (state: RootState) => state.students;
 