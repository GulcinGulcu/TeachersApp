import { useSelector } from 'react-redux';
import { TimeAgo } from '../../components/TimeAgo';
import { SlArrowRight } from 'react-icons/sl';
import { IoIosTimer } from 'react-icons/io';
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

export const RecentActivities = () => {
  const recentActivities = useSelector((state) => state.recentActivities);
  const list = useSelector((state) => state.list);
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [active, setActive] = useState(false);
  const [activityToShow, setActivityToShow] = useState('');
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    const selectedActivity = list.filter((item) => item.id === id);
    setActivityToShow(selectedActivity[0].content);
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
                <span>
                  {active && activeId === activity.id ? (
                    <SlArrowDown />
                  ) : (
                    <SlArrowRight />
                  )}
                  {activity.title} <IoIosTimer />{' '}
                  <TimeAgo time={activity.date} />
                </span>
                {activity.to && (
                  <button onClick={() => handleClick(activity.id)}>
                    Click here for details
                  </button>
                )}
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
