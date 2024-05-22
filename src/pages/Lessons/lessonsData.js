import { PiMathOperations } from 'react-icons/pi';
import { MdOutlineScience } from 'react-icons/md';
import { LuMusic4 } from 'react-icons/lu';
import { MdOutlineSportsHandball } from 'react-icons/md';
import { FaPeopleRoof } from 'react-icons/fa6';

export const lessonsData = [
  {
    id: 1,
    title: 'Maths',
    searchParam: 'kids+maths',
    icon: <PiMathOperations />,
  },
  {
    id: 2,
    title: 'Science',
    searchParam: 'kids+science',
    icon: <MdOutlineScience />,
  },
  {
    id: 3,
    title: 'Social Studies',
    searchParam: 'kids+social+studies',
    icon: <FaPeopleRoof />,
  },
  {
    id: 4,
    title: 'Music',
    searchParam: 'kids+educational+music',
    icon: <LuMusic4 />,
  },
  {
    id: 5,
    title: 'Physical Education',
    searchParam: 'kids+physical+education',
    icon: <MdOutlineSportsHandball />,
  },
];
