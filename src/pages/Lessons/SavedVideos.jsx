import { useOutletContext } from 'react-router-dom';
import { RxBookmark } from 'react-icons/rx';
import { FaBookmark } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { useSelector } from 'react-redux';

export const SavedVideos = () => {
  const { videos, savedVideoId, setSavedVideoId } = useOutletContext();

  const savedVideos = videos.filter((video) =>
    savedVideoId.includes(video.id.videoId),
  );

  const { isDarkMode } = useSelector((state) => state.darkMode);

  const handleUnsaveVideo = (id) => {
    setSavedVideoId((prev) => prev.filter((videoId) => id !== videoId));
  };

  if (savedVideos.length === 0) {
    return <p className='no-saved-video'>There is no saved video</p>;
  }

  return (
    <>
      {savedVideos && (
        <section className='lessons-video-wrapper'>
          {savedVideos.map((video) => {
            return (
              <div
                className={isDarkMode ? 'video-wrapper dark' : 'video-wrapper'}
                key={video.id.videoId}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    className='video-img'
                    src={video.snippet.thumbnails.medium.url}
                    alt='Educational Video'
                  />
                  <h4>{video.snippet.title}</h4>
                </a>
                <Button
                  className={
                    isDarkMode ? 'lessons__save-btn dark' : 'lessons__save-btn'
                  }
                  onClick={() => handleUnsaveVideo(video.id.videoId)}
                >
                  {savedVideoId.includes(video.id.videoId) ? (
                    <FaBookmark />
                  ) : (
                    <RxBookmark />
                  )}
                </Button>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};
