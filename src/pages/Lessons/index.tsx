import { useEffect, useState } from 'react';
import { lessonsData } from './lessonsData';
import { LessonListItem } from './LessonListItem';
import { Outlet, NavLink } from 'react-router-dom';
import { VideoData } from './models';
import './styles.css';

export const Lessons = () => {
  const [queryParam, setQueryParam] = useState<string | null>('');
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [nextPage, setNextPage] = useState<number>(0);
  const [nextPageTkn, setNextPageTkn] = useState('');
  const [active, setActive] = useState<null | string>(null);
  const [savedVideoId, setSavedVideoId] = useState<string[]>([]);

  useEffect(() => {
    if (queryParam !== '') {
      if (nextPage) {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${queryParam}&key=${process.env.REACT_APP_API_KEY}&pageToken=${nextPageTkn}`,
        )
          .then((res) => res.json())
          .then((data) => {
            setNextPageTkn(data.nextPageToken);
            setVideos((prev) => [...prev, ...data.items]);
          })
          .catch((err) => console.log(err));
      } else {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${queryParam}&key=${process.env.REACT_APP_API_KEY}`,
        )
          .then((res) => res.json())
          .then((data) => {
            setNextPageTkn(data.nextPageToken);
            setVideos(data.items);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [queryParam, nextPage]);

  const handleClick = (e: React.SyntheticEvent, id: string) => {
    setActive(id);
    const param = e.currentTarget.getAttribute('data-param');
    setQueryParam(param);
    setNextPage(0);
    setVideos([]);
  };

  const activeStyles = {
    backgroundColor: 'var(--color-primaryActive)',
    padding: '20px 25px',
  };

  return (
    <div className='lessons-wrapper'>
      <ul className='lessons'>
        {lessonsData.map((lesson) => (
          <LessonListItem
            key={lesson.id}
            title={lesson.title}
            icon={lesson.icon}
            id={lesson.id}
            handleClick={handleClick}
            searchParam={lesson.searchParam}
            active={active}
          />
        ))}
      </ul>
      {videos.length > 0 && (
        <nav>
          <NavLink
            to='.'
            end
            className='video-nav'
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            All Videos
          </NavLink>
          <NavLink
            to='savedVideos'
            className='video-nav'
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Saved Videos
          </NavLink>
        </nav>
      )}
      <Outlet
        context={{ videos, savedVideoId, setSavedVideoId, setNextPage }}
      />
    </div>
  );
};
