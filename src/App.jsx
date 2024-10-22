
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
 


  const handleBookMark=(blog)=>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
