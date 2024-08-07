import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { selectorStudent } from '../../../features/Student/studentSlicer';
import { StudentData } from '../../../features/Student/models';
import './styles.css';

export const StudentDetail = () => {
  const studentData = useSelector(selectorStudent);
  const { id } = useParams();
  const [studentDetail, setStudentDetail] = useState<null | StudentData>(null);
  useEffect(() => {
    const student = studentData.filter((student) => student.id === id);
    setStudentDetail(student[0]);
  }, [id, studentData]);

  const activeStyles = {
    backgroundColor: 'var(--color-lightModeSecondary)',
    color: 'var(--color-primary)',
    scale: '1',
    transition: 'none',
    fontWeight: 'bold',
  };

  return (
    <>
      {studentDetail && (
        <div className='detail-container'>
          <Link to='..' relative='path' className='go-back-btn'>
            <FaArrowLeft />
            <span>Back to all students</span>
          </Link>
          <section className='avatar-container'>
            <img
              src={studentDetail.image}
              className='student-img'
              alt='student'
            />
          </section>
          <nav>
            <NavLink
              to='.'
              end
              className='student-detail__link'
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              General Information
            </NavLink>
            <NavLink
              to='grades'
              className='student-detail__link'
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Grades
            </NavLink>
            <NavLink
              to='other'
              className='student-detail__link'
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Other
            </NavLink>
          </nav>
          <section>
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};
