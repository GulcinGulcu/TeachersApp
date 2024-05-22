import { NavLink } from 'react-router-dom';

export const SideBarListItem = ({ className, title, to, icon }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${className} active` : className
        }
        to={to}
      >
        <span>{icon}</span>
        <span className='sidebar__link-title'>{title}</span>
      </NavLink>
    </li>
  );
};
