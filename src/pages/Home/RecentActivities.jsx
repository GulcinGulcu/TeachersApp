import { useSelector } from 'react-redux';
import { TimeAgo } from '../../components/TimeAgo';
import { SlArrowRight } from 'react-icons/sl';
import { IoIosTimer } from 'react-icons/io';
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

export const RecentActivities = () => {
  const recentActivities = useSelector((state) => state.recentActivities);
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const students = useSelector((state) => state.student);
  const list = useSelector((state) => state.list);
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activityToShow, setActivityToShow] = useState('');

  const handleClick = (id, to) => {
    if (to === 'myclassroom') {
      const selectedActivity = list.filter((item) => item.id === id);
      setActivityToShow(selectedActivity[0].content);
    }
    if (to === 'student') {
      const selectedActivity = students.filter((student) => student.id === id);
      setActivityToShow(
        `Name: ${selectedActivity[0].firstName} ${selectedActivity[0].lastName}`,
      );
    }
    setActiveId(id);
    setActive((prev) => !prev);
  };

  return (
    <section className='home__recent-activities'>
      <p>Recent Activities</p>
      <ul
        className={
          isDarkMode
            ? 'home__recent-activities__list dark'
            : 'home__recent-activities__list'
        }
      >
        {recentActivities.map((activity) => {
          return (
            <>
              <li
                className='home__recent-activities__list-item'
                key={activity.id}
              >
                <div className='list-item-activity'>
                  <span>
                    {active && activeId === activity.id ? (
                      <SlArrowDown />
                    ) : (
                      <SlArrowRight />
                    )}
                    {activity.title}
                  </span>
                  <span>
                    <IoIosTimer /> <TimeAgo time={activity.date} />
                  </span>
                </div>
                <div>
                  {activity.to && (
                    <button
                      className='details-btn'
                      onClick={() => handleClick(activity.id, activity.to)}
                    >
                      Click here for details
                    </button>
                  )}
                </div>
              </li>
              {active && activeId === activity.id && (
                <div>
                  <p>"{activityToShow}"</p>
                </div>
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
};
