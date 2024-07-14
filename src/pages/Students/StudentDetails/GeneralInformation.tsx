import { useSelector } from 'react-redux';
import { selectorStudent } from '../../../features/Student/studentSlicer';
import { useParams } from 'react-router-dom';

export const GeneralInformation = () => {
  const { id } = useParams();
  const student = useSelector(selectorStudent);
  const selectedStudent = student.filter((stu) => stu.id === id);

  return (
    <>
      {student && (
        <ul className='student-detail general-info'>
          <li className='student-detail-item'>
            <span>Student ID:</span>
            <span>{selectedStudent[0].id}</span>
          </li>
          <li className='student-detail-item'>
            <span>First Name:</span>
            <span>{selectedStudent[0].firstName}</span>
          </li>
          <li className='student-detail-item'>
            <span>Last Name:</span>
            <span>{selectedStudent[0].lastName}</span>
          </li>
          <li className='student-detail-item'>
            <span>Attendance:</span>
            <span>{selectedStudent[0].attendance}</span>
          </li>
        </ul>
      )}
    </>
  );
};
