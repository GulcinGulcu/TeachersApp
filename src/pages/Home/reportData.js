import { PiStudentFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdAssignment } from 'react-icons/md';
import { TfiAnnouncement } from 'react-icons/tfi';

export const reportData = [
  {
    id: 1,
    title: 'Students',
    icon: <PiStudentFill />,
    backgroundColor: 'purple',
  },
  {
    id: 2,
    title: 'Classes',
    icon: <SiGoogleclassroom />,
    backgroundColor: 'aqua',
  },
  {
    id: 3,
    title: 'Assignments',
    icon: <MdAssignment />,
    backgroundColor: 'red',
  },
  {
    id: 4,
    title: 'Announcements',
    icon: <TfiAnnouncement />,
    backgroundColor: 'blue',
  },
];
