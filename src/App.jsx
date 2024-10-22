
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
//  ata time add korar jonno ai useState use kora hoyese


  const handleBookMark=(blog)=>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleTime=(time)=>{
    const newTime = readingTime + time
    setReadingTime(newTime)
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMark={handleBookMark} handleTime={handleTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
