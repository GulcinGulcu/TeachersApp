import { useEffect, useState } from 'react';
import { lessonsData } from './lessonsData';
import { LessonListItem } from './LessonListItem';
import { Outlet, NavLink } from 'react-router-dom';
import { VideoData } from './models';
import './styles.css';

export const Lessons = () => {
  const [queryParam, setQueryParam] = useState('');
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [nextPage, setNextPage] = useState(0);
  const [nextPageTkn, setNextPageTkn] = useState('');
  const [active, setActive] = useState<null | string>(null);
  const [savedVideoId, setSavedVideoId] = useState<string[]>([]);

  useEffect(() => {
    if (nextPage && !nextPageTkn) return;
    if (!queryParam.trim()) return;

    const params = new URLSearchParams({
      part: 'snippet',
      maxResults: '9',
      q: queryParam,
      key: process.env.REACT_APP_API_KEY ?? '',
    });

    if (nextPage && nextPageTkn) params.set('pageToken', nextPageTkn);

    fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error?.message || 'YouTube request failed');
        }
        return data;
      })
      .then((data) => {
        setNextPageTkn(data.nextPageToken ?? '');
        setVideos((prev) =>
          nextPage ? [...prev, ...(data.items ?? [])] : data.items ?? [],
        );
      })
      .catch((err) => console.log(err));
  }, [queryParam, nextPage, nextPageTkn]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    setActive(id);
    const param = e.currentTarget.getAttribute('data-param') ?? '';
    setQueryParam(param);
    setNextPage(0);
    setNextPageTkn('');
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
        context={{
          videos,
          savedVideoId,
          setSavedVideoId,
          setNextPage,
          nextPageTkn,
        }}
      />
    </div>
  );
};
