import { parseISO, formatDistanceToNow } from 'date-fns';

interface TimeAgoProps {
  time: string;
}

export const TimeAgo = ({ time }: TimeAgoProps) => {
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
