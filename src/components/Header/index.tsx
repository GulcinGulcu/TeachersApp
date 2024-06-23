import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatISO } from 'date-fns';
import { Switch, FormControlLabel } from '@mui/material';
import { toggleDarkMode } from '../../features/DarkMode/darkModeSlicer';
import { selectorUser } from '../../features/User/userSlice';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';
import './styles.css';

export const Header = () => {
  const { isLoggedIn } = useSelector(selectorUser);
  const dispatch = useDispatch();
  const date = formatISO(new Date(), { representation: 'date' });
  const { isDarkMode } = useSelector(selectorDarkMode);
  const { pathname } = useLocation();

  return (
    <header
      className={
        !isLoggedIn && pathname === '/'
          ? 'home__header home__header--logout'
          : 'home__header'
      }
    >
      <div className='home__date-area'>
        {pathname === '/' && isLoggedIn && <h4>Dashboard</h4>}
        {isLoggedIn && <p>{date}</p>}
      </div>
      <div
        className={
          isLoggedIn
            ? 'home__header-btns'
            : 'home__header-btns home__header-btns-logout'
        }
      >
        {isLoggedIn ? (
          <>
            <FormControlLabel
              label='Dark mode'
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={() => dispatch(toggleDarkMode())}
                />
              }
            />
            <NavLink to='addStudent' className='home__header-link'>
              + Add Student
            </NavLink>
          </>
        ) : (
          <NavLink to='login' className='home__header-link header-login-link'>
            Log In
          </NavLink>
        )}
      </div>
    </header>
  );
};
