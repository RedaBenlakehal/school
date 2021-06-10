import { StoreAction, Student } from './../types';
import { School } from '../types';

const REACT_AVATAR = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
const REACT_NATIVE_AVATAR = 'https://www.ubidreams.fr/wp-content/uploads/2020/06/logo-react-native.png'
const MONGO_DB_AVATAR = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'

import produce, {current} from "immer"; 


export const initialState: School = {
    students: [
        { 
            id: 1, 
            name: 'Alice',
            lessons: [ { id: 1, title: 'React', avatar: REACT_AVATAR  }, { id: 2, title: 'React Native', avatar: REACT_NATIVE_AVATAR },], 
            attendance: 0,
            absence: 0,
            notes: []
        },
        { 
            id: 2,
            name: 'Alan',
            lessons: [{ id: 3, title: 'MongoDB', avatar: MONGO_DB_AVATAR}],
            absence: 0,
            attendance: 0,
            notes: [] 
        },
        { 
            id: 3,
            name: 'Phil',
            lessons: [
                { id: 1, title: 'React', avatar: REACT_AVATAR }, { id: 2, title: 'React Native', avatar: REACT_NATIVE_AVATAR},
                { id: 3, title: 'MongoDB', avatar: MONGO_DB_AVATAR }
            ],
            absence: 0, 
            attendance: 0,
            notes: [] 
        },
        { 
            id: 4,
            name: 'Naoudi',
            lessons: [  { id: 1, title: 'React', avatar: REACT_AVATAR }],
            absence: 0,
            attendance: 0,
            notes: [] 
        },
        { 
            id: 5,
            name: 'Fenley',
            lessons: [{ id: 3, title: 'MongoDB', avatar: MONGO_DB_AVATAR }],
            absence: 0,
            attendance: 0,
            notes: []
        },
    ],
    lessons: [
        { id: 1, title: 'React', avatar: REACT_AVATAR },
        { id: 2, title: 'React Native', avatar: REACT_NATIVE_AVATAR },
        { id: 3, title: 'MongoDB', avatar: MONGO_DB_AVATAR },
    ]
}


export const schoolReducer = produce((draft, action: StoreAction) => {
    console.log(action)
    switch(action.type) {
        case 'school/DECREMENT_STUDENT_ABSENCE': {
            const {studentId} = action; 

            const student = draft.students.findIndex((student) => student.id === studentId); 
            if(student !== -1) {
                draft.students[studentId].absence++
            }
        }

        case 'school/INCREMENT_STUDENT_ABSENCE': {
            const {studentId} = action; 

            const student = draft.students.findIndex((student) => student.id === studentId); 
            if(student !== -1) {
                draft.students[studentId].absence = draft.students[studentId].absence + 1
            }
        }

        case 'school/INCREMENT_STUDENT_ATTENDENCE': {
            const {studentId} = action; 

            const student = draft.students.findIndex((student) => student.id === studentId); 
            if(student !== -1) {
                draft.students[studentId].attendance++
            }
        }

        case 'school/DECREMENT_STUDENT_ATTENDENCE': {
            const {studentId} = action; 

            const student = draft.students.findIndex((student) => student.id === studentId); 
            if(student !== -1) {
                draft.students[studentId].attendance--
            }
        }
    }
}, initialState)

