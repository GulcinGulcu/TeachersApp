import { UserInfo } from './UserInfo';
import { sideBarData } from './sidebarData';
import { SideBarListItem } from './SideBarListItem';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut, IoIosLogIn } from 'react-icons/io';
import { logout } from '../../features/User/userSlice';
import { Link, useLocation } from 'react-router-dom';
import { selectorUser } from '../../features/User/userSlice';
import './styles.css';

export const SideBar = () => {
  const { username, isLoggedIn } = useSelector(selectorUser);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <aside
      data-testid='sidebar'
      className={
        !isLoggedIn && pathname === '/'
          ? 'sidebar-wrapper sidebar-wrapper--logout'
          : 'sidebar-wrapper'
      }
    >
      <UserInfo username={username} />
      <ul className='sidebar__links'>
        {sideBarData.map((item) => (
          <SideBarListItem
            key={item.id}
            to={item.to}
            title={item.title}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </ul>
      {isLoggedIn ? (
        <button
          className='sidebar__logout-btn'
          onClick={() => dispatch(logout())}
        >
          <span className='sidebar__logout-title'>Log Out</span>
          <IoIosLogOut className='sidebar__logout-icon' />
        </button>
      ) : (
        <Link className='sidebar__logout-btn' to='login'>
          <span className='sidebar__logout-title'>Log In</span>
          <IoIosLogIn className='sidebar__logout-icon' />
        </Link>
      )}
    </aside>
  );
};
