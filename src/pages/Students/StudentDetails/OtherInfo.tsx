import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectorStudent } from '../../../features/Student/studentSlicer';

export const OtherInfo = () => {
  const { id } = useParams();
  const student = useSelector(selectorStudent);
  const selectedStudent = student.filter((stu) => stu.id === id);

  return (
    <>
      {student && (
        <ul className='student-detail student-detail-other'>
          <li className='student-detail-item'>
            <span>Phone Number: </span>
            <span>{selectedStudent[0].phoneNumber}</span>
          </li>
          <li className='student-detail-item'>
            <span>Address: </span>
            <span>{selectedStudent[0].address}</span>
          </li>
          <li className='student-detail-item'>
            <span>Selective Lesson: </span>
            <span>{selectedStudent[0].selectiveLesson}</span>
          </li>
        </ul>
      )}
    </>
  );
};
