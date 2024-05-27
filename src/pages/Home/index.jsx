import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { textData } from './onBoardingTextData';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import TeacherImage from '../../assets/teacherphoto.png';
import { Report } from './Report';
import { RecentActivities } from './RecentActivities';
import './styles.css';

export const Home = () => {
  const [index, setIndex] = useState(0);
  const user = useSelector((state) => state.user);

  const handleNextText = () => {
    if (index < 2) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevText = () => {
    if (index <= 2 && index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(2);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => handleNextText(), 3000);
    return () => clearInterval(timer);
  });

  return (
    <div
      className={
        user.isLoggedIn ? 'home-page-wrapper login' : 'home-page-wrapper logout'
      }
    >
      {!user.isLoggedIn ? (
        <div className='home-page-wrapper--inside'>
          <svg
            className='wave-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#01161e'
              fill-opacity='1'
              d='M0,288L40,256C80,224,160,160,240,160C320,160,400,224,480,234.7C560,245,640,203,720,165.3C800,128,880,96,960,101.3C1040,107,1120,149,1200,149.3C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            ></path>
          </svg>
          <svg
            className='wave-svg--transparent'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#01161e'
              fill-opacity='1'
              d='M0,288L40,256C80,224,160,160,240,160C320,160,400,224,480,234.7C560,245,640,203,720,165.3C800,128,880,96,960,101.3C1040,107,1120,149,1200,149.3C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            ></path>
          </svg>
          <svg
            className='upper-wave-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#01161e'
              fill-opacity='1'
              d='M0,160L60,138.7C120,117,240,75,360,53.3C480,32,600,32,720,53.3C840,75,960,117,1080,112C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            ></path>
          </svg>
          <svg
            className='upper-wave-svg--transparent'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
          >
            <path
              fill='#01161e'
              fill-opacity='1'
              d='M0,160L60,138.7C120,117,240,75,360,53.3C480,32,600,32,720,53.3C840,75,960,117,1080,112C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            ></path>
          </svg>
          <button className='home-page__btns' onClick={handlePrevText}>
            <IoIosArrowBack />
          </button>
          <div className='home__text-container'>
            <p className='main-text'>{textData[index].mainText}</p>
            <p className='text'>{textData[index].text}</p>
            <div className='home-page__enroll-btn'>
              <Link to='registration'>Enroll Now</Link>
            </div>
          </div>
          <button className='home-page__btns' onClick={handleNextText}>
            <IoIosArrowForward />
          </button>
        </div>
      ) : (
        <>
          <section className='welcome-board'>
            <img src={TeacherImage} alt='teacher'></img>
            <div>
              <h2>
                <span>Welcome, </span> {user.fullName}!{' '}
              </h2>
              <p>Have a nice day at work!</p>
            </div>
          </section>
          <Report />
          <RecentActivities />
        </>
      )}
    </div>
  );
};
