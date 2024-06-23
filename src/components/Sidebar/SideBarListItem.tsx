import { NavLink } from 'react-router-dom';

interface SideBarListItemProps {
  className: string;
  title: string;
  to: string;
  icon: React.ReactNode;
}

export const SideBarListItem = ({
  className,
  title,
  to,
  icon,
}: SideBarListItemProps) => {
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
