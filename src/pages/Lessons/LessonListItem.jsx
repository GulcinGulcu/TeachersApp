export const LessonListItem = ({
  title,
  id,
  handleClick,
  icon,
  searchParam,
  active,
}) => {
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
