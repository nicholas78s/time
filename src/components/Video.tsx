import { DateTimePretty } from './DateTimePretty'

export interface ListType {
  url: string,
  date: string
}

export const Video = ({url, date}: ListType) => {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={date} />
    </div>
  )
}
