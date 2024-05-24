import teacherPhoto from '../../assets/user8.jpg';
import Logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

export const UserInfo = ({ username }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className='user-info'>
      <div className='sidebar__img-wrapper'>
        <img
          src={isLoggedIn ? teacherPhoto : Logo}
          alt={isLoggedIn ? 'user' : 'logo'}
          className={isLoggedIn ? 'sidebar__img' : 'sidebar__img--logout'}
        />
      </div>
      {isLoggedIn && <p>{username}</p>}
      <hr />
    </div>
  );
};
