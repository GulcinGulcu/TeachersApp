import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthRequired = () => {
  const user = useSelector((state) => state.user);
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
