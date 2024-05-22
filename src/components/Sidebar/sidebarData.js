import { SiGoogleclassroom } from 'react-icons/si';
import { MdMenuBook } from 'react-icons/md';
import { FaChalkboard } from 'react-icons/fa';
import { FaPeopleLine } from 'react-icons/fa6';
import { MdHomeFilled } from 'react-icons/md';

export const sideBarData = [
  {
    id: 1,
    title: 'Home',
    icon: <MdHomeFilled />,
    className: 'sidebar__link',
    to: '/',
  },
  {
    id: 2,
    title: 'My Classroom',
    icon: <SiGoogleclassroom />,
    className: 'sidebar__link',
    to: 'myclassroom',
  },
  {
    id: 3,
    title: 'Lessons',
    icon: <MdMenuBook />,
    className: 'sidebar__link',
    to: 'lessons',
  },
  {
    id: 4,
    title: 'White Board',
    icon: <FaChalkboard />,
    className: 'sidebar__link',
    to: 'whiteboard',
  },
  {
    id: 5,
    title: 'Students',
    icon: <FaPeopleLine />,
    className: 'sidebar__link',
    to: 'students',
  },
];
