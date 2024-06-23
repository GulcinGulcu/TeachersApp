export interface StudentData {
    image: any;
    id: string;
    firstName: string;
    lastName: string;
    grade: string;
    attendance: string;
    phoneNumber: string;
    address: string;
    selectiveLesson: string;
    grades: {
        math: string;
        science: string;
        english: string;
        socialStudies: string;
        physicalEducation: string;
        visualArts: string;
    };
}

export interface StudentSlicerState {
    student: StudentData[];
}