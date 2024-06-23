import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../features/User/userSlice';

export const AuthRequired = () => {
  const user = useSelector(selectorUser);
  const location = useLocation();

  if (!user.isLoggedIn) {
    return (
      <Navigate
        to='login'
        state={{ path: location.pathname, message: 'You must log in first.' }}
        replace
      />
    );
  }
  return <Outlet />;
};
