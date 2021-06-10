import { RootState } from './App';

export const getStudent = (state: RootState, studenId: number) => state.students.find((student) => student.id === studenId)