import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectorStudent } from '../../../features/Student/studentSlicer';

export const Grades = () => {
  const { id } = useParams();
  const student = useSelector(selectorStudent);
  const selectedStudent = student.filter((stu) => stu.id === id);

  return (
    <>
      {student && (
        <ul className='student-detail student-detail-grades'>
          <li className='student-detail-item'>
            <span>Math: </span>
            <span>{selectedStudent[0].grades.math}</span>
          </li>
          <li className='student-detail-item'>
            <span>Science: </span>
            <span>{selectedStudent[0].grades.science}</span>
          </li>
          <li className='student-detail-item'>
            <span>English: </span>
            <span>{selectedStudent[0].grades.english}</span>
          </li>
          <li className='student-detail-item'>
            <span>Social Studies: </span>
            <span>{selectedStudent[0].grades.socialStudies}</span>
          </li>
          <li className='student-detail-item'>
            <span>Physical Education: </span>
            <span>{selectedStudent[0].grades.physicalEducation}</span>
          </li>
          <li className='student-detail-item'>
            <span>Visual Arts: </span>
            <span>{selectedStudent[0].grades.visualArts}</span>
          </li>
        </ul>
      )}
    </>
  );
};
