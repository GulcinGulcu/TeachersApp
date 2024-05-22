import { UserInfo } from './UserInfo';
import { sideBarData } from './sidebarData';
import { SideBarListItem } from './SideBarListItem';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut, IoIosLogIn } from 'react-icons/io';
import { logout } from '../../features/User/userSlice';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css';

export const SideBar = () => {
  const { username, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div
      className={
        isLoggedIn
          ? 'sidebar-wrapper'
          : 'sidebar-wrapper sidebar-wrapper--logout'
      }
    >
      {isLoggedIn ? (
        <UserInfo username={username} />
      ) : (
        <div className='sidebar__img-wrapper'>
          <img src={Logo} alt='logo' className='logo' />
          <hr />
        </div>
      )}
      <ul className='sidebar__links'>
        {sideBarData.map((item) => (
          <SideBarListItem
            key={item.key}
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
    </div>
  );
};
