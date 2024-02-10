import { FC } from "react"

interface PropsType {
  date: string
}

export const DateTime: FC<PropsType> = ({date}: {date: string}) => {
  return (
    <div>{date}</div>
  )
}
