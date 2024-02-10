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

// function withDateTimePretty(Component: ComponentType) {
function withDateTimePretty(Component: FC<PropsType>) {
  //return function (props: PropsType, ...args) {
  return function (props: PropsType) {
    const prettyDate = new Date(props.date);
    const now = new Date();
    const diffMinutes = dateDiff(prettyDate, now, 'minutes');//prettyDate.toLocaleDateString('ru-RU');
    const diffHours = dateDiff(prettyDate, now, 'hours');//prettyDate.toLocaleDateString('ru-RU');
    const diffDays = dateDiff(prettyDate, now, 'days');//prettyDate.toLocaleDateString('ru-RU');
    const prettyDateString = diffMinutes < 60 ? diffMinutes.toFixed(0) + ' минут назад' :
      diffHours < 24 ? diffHours.toFixed(0) + ' часов назад' :
        diffDays.toFixed(0) + ' дней назад';
    console.log(prettyDate, now, prettyDateString);
    //console.log('props:', props, prettyDateString);
    //return Component.apply(this, [props, ...args]);
    //return Component.apply(this, [{date: prettyDateString}, ...args]);
    //return Component.apply(this, [{date: prettyDateString}]);
    return (<Component date={prettyDateString} />);
  }
}

// const withDateTimePretty = (Component: ComponentType) => ({...props}) => {
//   //return function (props: PropsType, ...args) {
//   <Component {...props}/>
// }

// //export const DateTimePretty = withDateTimePretty(DateTime, (props) => props);
export const DateTimePretty = withDateTimePretty(DateTime);