import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function timeAgo(input: Date) {
   dayjs.extend(relativeTime);
   return dayjs(input).fromNow();
}
