import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorStudent } from '../../features/Student/studentSlicer';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';
import './styles.css';

export const StudentList = () => {
  const studentData = useSelector(selectorStudent);
  const { isDarkMode } = useSelector(selectorDarkMode);

  return (
    <section className='student-page-wrapper'>
      <div className='student-page-heading'>
        <h4>All Students</h4>
        <p>You can find all your students information</p>
      </div>
      <table className={isDarkMode ? 'student-table dark' : 'student-table'}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Grade</th>
            <th className='student-table-number'>Parent Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id} className='student-table-tr'>
              <td className='student-name-and-image'>
                <img
                  src={student.image}
                  className='student-table-img'
                  alt='student'
                />
                <div>
                  <span>
                    {student.firstName} {student.lastName}
                  </span>
                </div>
              </td>
              <td className='student-table-grade'>
                {student.grade}th grade student
              </td>
              <td className='student-table-number'>{student.phoneNumber}</td>
              <td>
                <Link to={student.id} className='detail-link'>
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
