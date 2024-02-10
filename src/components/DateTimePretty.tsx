import { FC } from 'react'
import { DateTime } from './DateTime';

function dateDiff(date1: Date, date2: Date, value: string) {
  let diffInTime = date2.getTime() - date1.getTime();
  let d = (value == 'minutes') ? 1000 * 60 : 
    (value == 'hours') ? 1000 * 60 * 60 : 
      (value == 'days') ? 1000 * 60 * 60 * 24 : 1;

  return (diffInTime / d);
}

interface PropsType {
  date: string
}

function withDateTimePretty(Component: FC<PropsType>) {
  return function (props: PropsType) {
    const prettyDate = new Date(props.date);
    const now = new Date();
    const diffMinutes = dateDiff(prettyDate, now, 'minutes');
    const diffHours = dateDiff(prettyDate, now, 'hours');
    const diffDays = dateDiff(prettyDate, now, 'days');
    const prettyDateString = diffMinutes < 60 ? diffMinutes.toFixed(0) + ' минут назад' :
      diffHours < 24 ? diffHours.toFixed(0) + ' часов назад' :
        diffDays.toFixed(0) + ' дней назад';
    return (<Component date={prettyDateString} />);
  }
}

export const DateTimePretty = withDateTimePretty(DateTime);