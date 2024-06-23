import teacherPhoto from '../../assets/user8.jpg';
import Logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../features/User/userSlice';

interface UserInfoProps {
  username: string;
}

export const UserInfo = ({ username }: UserInfoProps) => {
  const { isLoggedIn } = useSelector(selectorUser);

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
