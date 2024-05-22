import studentOne from './../../assets/StudentPhotos/student.jpg';
import studentTwo from './../../assets/StudentPhotos/student2.jpg';
import studentThree from './../../assets/StudentPhotos/student3.jpg';
import studentFour from './../../assets/StudentPhotos/student4.jpg';
import studentFive from './../../assets/StudentPhotos/student5.jpg';

export const studentData = [
  {
    image: studentOne,
    id: '001',
    firstName: 'Peter',
    lastName: 'Doe',
    grade: '5',
    attendance: '85%',
    phoneNumber: '555-000-55',
    address: 'Bridge st No.1',
    selectiveLesson: 'Spanish',
    grades: {
      math: 'B+',
      science: 'A-',
      english: 'C+',
      socialStudies: 'A',
      physicalEducation: 'A+',
      visualArts: 'B+',
    },
  },
  {
    image: studentTwo,
    id: '002',
    firstName: 'Peter',
    lastName: 'Doe',
    grade: '5',
    attendance: '65%',
    phoneNumber: '555-000-55',
    address: 'Bridge st No.1',
    selectiveLesson: 'Spanish',
    grades: {
      math: 'B+',
      science: 'A-',
      english: 'C+',
      socialStudies: 'A',
      physicalEducation: 'A+',
      visualArts: 'B+',
    },
  },
  {
    image: studentThree,
    id: '003',
    firstName: 'Mary',
    lastName: 'Wright',
    gender: 'Female',
    grade: '5',
    attendance: '80%',
    phoneNumber: '555-0230-55',
    address: 'Bridge st No.1',
    selectiveLesson: 'Spanish',
    grades: {
      math: 'B+',
      science: 'A-',
      english: 'C+',
      socialStudies: 'A',
      physicalEducation: 'A+',
      visualArts: 'B+',
    },
  },
  {
    image: studentFour,
    id: '004',
    firstName: 'Jane',
    lastName: 'Holland',
    gender: 'Female',
    grade: '6',
    attendance: '70%',
    phoneNumber: '554-0230-55',
    address: 'Bridge st No.1',
    selectiveLesson: 'Spanish',
    grades: {
      math: 'B+',
      science: 'A-',
      english: 'C+',
      socialStudies: 'A',
      physicalEducation: 'A+',
      visualArts: 'B+',
    },
  },
  {
    image: studentFive,
    id: '005',
    firstName: 'Jane',
    lastName: 'Holland',
    gender: 'Female',
    grade: '6',
    attendance: '70%',
    phoneNumber: '554-0230-55',
    address: 'Bridge st No.1',
    selectiveLesson: 'Spanish',
    grades: {
      math: 'B+',
      science: 'A-',
      english: 'C+',
      socialStudies: 'A',
      physicalEducation: 'A+',
      visualArts: 'B+',
    },
  },
];
/*
 
       "communicationInfo": {
           "phoneNumber": "555-000-55",
           "address": "Bridge st No.1"
       },
       "otherInfo": {
           "attendance": "85%",
           "selectiveLesson": "Spanish",
       },
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
   },
   {
       "id": "004",
       "firstName": "Richard",
       "lastName": "Wister",
       "gender": "Male",
       "grade": "5",
       "attendance": "85%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "005",
       "firstName": "Jenny",
       "lastName": "Sue",
       "gender": "Female",
       "grade": "5",
       "attendance": "85%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "006",
       "firstName": "Betty",
       "lastName": "Beam",
       "gender": "Female",
       "grade": "6",
       "attendance": "68%",
       "selectiveLesson": "Music",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "007",
       "firstName": "Christopher",
       "lastName": "Ryan",
       "gender": "Male",
       "grade": "5",
       "attendance": "90%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "C",
           "Physical Education": "A+",
           "Visual Arts": "A"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "008",
       "firstName": "Jules",
       "lastName": "Avila",
       "gender": "Male",
       "grade": "5",
       "attendance": "85%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "009",
       "firstName": "Sandra",
       "lastName": "Artur",
       "gender": "Female",
       "grade": "5",
       "attendance": "75%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "B-",
           "English": "B+",
           "Social Studies": "A",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   },
   {
       "id": "010",
       "firstName": "Matthew",
       "lastName": "Wrigths",
       "gender": "Male",
       "grade": "6",
       "attendance": "80%",
       "selectiveLesson": "Spanish",
       "grades": {
           "Math": "C+",
           "Science": "C-",
           "English": "B+",
           "Social Studies": "A+",
           "Physical Education": "A+",
           "Visual Arts": "B-"
       },
       "phoneNumber": "555-000-55",
       "address": "Bridge st No.1"
   }
] */
