import { ListType, Video } from './Video';

export const VideoList = ({list}: {list: ListType[]}) => {
  return (
    <div className='video-list'>
      {list.map(item => <Video url={item.url} date={item.date} />)}
    </div>
  );
}
