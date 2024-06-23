import { reportData } from './reportData';
import { Card } from '../../components/Card';
import { useSelector } from 'react-redux';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';
import { selectorList } from '../../features/List/listSlicer';
import { StudentData } from '../../features/Student/models';
import { selectorStudent } from '../../features/Student/studentSlicer';

export const Report = () => {
  const student = useSelector(selectorStudent);
  const { isDarkMode } = useSelector(selectorDarkMode);
  const list = useSelector(selectorList);
  const assignments = list.filter((item) => item.type === 'Assignment');
  const announcements = list.filter((item) => item.type === 'Announcement');
  const classes: string[] = [];
  student.forEach((stu) => {
    if (!classes.includes(stu.grade)) {
      classes.push(stu.grade);
    }
  });
  const reportNumbers = [
    student.length,
    classes.length,
    assignments.length,
    announcements.length,
  ];

  return (
    <section className='home__report'>
      <p>Report</p>
      <div className='home__report-cards'>
        {reportData.map((report) => {
          return (
            <Card
              key={report.id}
              className={
                isDarkMode ? 'home__report-card dark' : 'home__report-card'
              }
            >
              <span className={`home__report-icon ${report.backgroundColor}`}>
                {report.icon}
              </span>
              <span className='home__report-title'>{report.title}</span>
              <span>{reportNumbers[report.id - 1]}</span>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
