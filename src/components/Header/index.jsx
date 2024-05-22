import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatISO } from 'date-fns';
import { Switch, FormControlLabel } from '@mui/material';
import { toggleDarkMode } from '../../features/DarkMode/darkModeSlicer';
import './styles.css';

export const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const date = formatISO(new Date(), { representation: 'date' });
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <header
      className={
        isLoggedIn ? 'home__header' : 'home__header home__header--logout'
      }
    >
      <div className='home__date-area'>
        <h4>Dashboard</h4>
        <p>{date}</p>
      </div>
      <div className='home__header-btns'>
        <FormControlLabel
          label='Dark mode'
          control={
            <Switch
              checked={isDarkMode}
              onChange={() => dispatch(toggleDarkMode())}
            />
          }
        />
        {isLoggedIn ? (
          <NavLink to='addStudent' className='home__header-link'>
            + Add Student
          </NavLink>
        ) : (
          <NavLink to='login' className='home__header-link'>
            Log In
          </NavLink>
        )}
      </div>
    </header>
  );
};
