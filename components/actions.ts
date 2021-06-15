
export const incrementStudentAbsence = (studentId: number) => {
    return {
        type: 'school/INCREMENT_STUDENT_ABSENCE',
        studentId, 
    } as const 
} 

export const decrementStudentAbsence = (studentId: number) => {
    return {
        type: 'school/DECREMENT_STUDENT_ABSENCE',
        studentId
    } as const 
}

export const incrementStudentAttendence = (studentId: number) => {
    return {
        type: 'school/INCREMENT_STUDENT_ATTENDENCE',
        studentId, 
    } as const 
} 

export const decrementStudentAttendence = (studentId: number) => {
    return {
        type: 'school/DECREMENT_STUDENT_ATTENDENCE',
        studentId, 
    } as const 
} 

