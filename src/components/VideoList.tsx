import { ListType, Video } from './Video';

export const VideoList = ({list}: {list: ListType[]}) => {
  return (
    <div className='video-list'>
      {list.map((item, idx) => <Video url={item.url} date={item.date} key={idx} />)}
    </div>
  );
}
