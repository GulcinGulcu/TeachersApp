import teacherPhoto from '../../assets/user8.jpg';

export const UserInfo = ({ username }) => {
  return (
    <div className='user-info'>
      <div className='sidebar__img-wrapper'>
        <img src={teacherPhoto} alt='user' className='sidebar__img' />
      </div>
      <p>{username}</p>
      <hr />
    </div>
  );
};
