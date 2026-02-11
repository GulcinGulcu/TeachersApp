import { useOutletContext } from 'react-router-dom';
import { RxBookmark } from 'react-icons/rx';
import { FaBookmark } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { decode } from 'html-entities';
import { useSelector } from 'react-redux';
import { ContextTypes } from './models';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';

export const Videos = () => {
  const { videos, setSavedVideoId, setNextPage, savedVideoId, nextPageTkn } =
    useOutletContext<ContextTypes>();

  const { isDarkMode } = useSelector(selectorDarkMode);

  return (
    <>
      {videos.length > 0 && (
        <section className='section__lesson'>
          <div className='lessons-video-wrapper'>
            {videos.map((video) => {
              return (
                <div
                  className={
                    isDarkMode ? 'video-wrapper dark' : 'video-wrapper'
                  }
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
                    <h4 className='video-title'>
                      {decode(video.snippet.title)}
                    </h4>
                  </a>
                  <Button
                    className={
                      isDarkMode
                        ? 'lessons__save-btn dark'
                        : 'lessons__save-btn'
                    }
                    onClick={() =>
                      setSavedVideoId((prev) =>
                        prev.includes(video.id.videoId)
                          ? prev.filter((x) => x !== video.id.videoId)
                          : [...prev, video.id.videoId],
                      )
                    }
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
          </div>
          <Button
            className='show-more-btn'
            onClick={() => setNextPage((prev) => prev + 1)}
            disabled={!nextPageTkn}
          >
            Show More
          </Button>
        </section>
      )}
    </>
  );
};
