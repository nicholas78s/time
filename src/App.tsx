import { useState } from 'react'
import './App.css'
import { VideoList } from './components/VideoList';

function App() {
  const [list, _setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      //date: '2018-01-03 12:10:00'
      date: '2024-02-03 13:13:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      //date: '2018-01-01 16:17:00'
      date: '2024-02-11 13:13:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      //date: '2017-12-02 05:24:00'
      date: '2024-02-11 16:55:00'
    },
  ]); 

  return (
    <VideoList list={list} />
  );
}

export default App
