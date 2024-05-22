import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ time }) => {
  let timeAgo = '';
  if (time) {
    const date = parseISO(time);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span>
      <i>{timeAgo}</i>
    </span>
  );
};
