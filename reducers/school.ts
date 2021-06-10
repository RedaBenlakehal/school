import { School, StoreAction } from '../types';

const REACT_AVATAR = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
const REACT_NATIVE_AVATAR = 'https://www.ubidreams.fr/wp-content/uploads/2020/06/logo-react-native.png'
const MONGO_DB_AVATAR = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'

export const initStore: School = {
    students: [
        { 
            id: 1, name: 'Alice',
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

export const schoolReducer = (store: School = initStore, action: any): School => {
    switch (action.type) {
    
        default:
            return store;
    }

} 

