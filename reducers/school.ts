import { School, StoreAction } from '../types';

const initStore: School = {
    students: [
        { 
            id: 1, name: "Alice",
            lessons: [ { id: 1, title: "React" }, { id: 2, title: "React Native" },], 
            attendance: 0,
            absence: 0,
            notes: []
        },
        { 
            id: 2,
            name: "Alan",
            lessons: [{ id: 3, title: "MongoDB" }],
            absence: 0,
            attendance: 0,
            notes: [] 
        },
        { 
            id: 3,
            name: "Phil",
            lessons: [{ id: 1, title: "React" }, { id: 2, title: "React Native" }, { id: 3, title: "MongoDB" }],
            absence: 0, 
            attendance: 0,
            notes: [] 
        },
        { 
            id: 4,
            name: "Naoudi",
            lessons: [  { id: 1, title: "React" }],
            absence: 0,
            attendance: 0,
            notes: [] 
        },
        { 
            id: 5,
            name: "Fenley",
            lessons: [{ id: 3, title: "MongoDB" }],
            absence: 0,
            attendance: 0,
            notes: []
        },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ]
}

export const schoolReducer = (store: School, action: any ) => {
    switch (action.type) {
    
        default:
            return store;
    }

} 

