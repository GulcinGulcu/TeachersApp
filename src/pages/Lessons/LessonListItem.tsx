interface LessonListItemProps {
  title: string;
  id: string;
  handleClick: (arg: React.SyntheticEvent, arg2: string) => void;
  icon: React.ReactNode;
  searchParam: string;
  active: null | string;
}

export const LessonListItem = ({
  title,
  id,
  handleClick,
  icon,
  searchParam,
  active,
}: LessonListItemProps) => {
  return (
    <li
      className={active === id ? `lesson active` : 'lesson'}
      data-param={searchParam}
      onClick={(e) => handleClick(e, id)}
    >
      <span className='lesson-icon'>{icon}</span>
      <span>{title}</span>
    </li>
  );
};
