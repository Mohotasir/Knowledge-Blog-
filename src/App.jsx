
import { useState } from 'react'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [markBlog ,setMarkBlog] = useState([]);
  const [time,setTime] = useState(0);
  const handleMark = function(blog){
   const newBookMark = [...markBlog,blog]
   setMarkBlog(newBookMark);
     
  }
  const handleTime = function(presentTime,id){
    const newTime = time + presentTime;
    setTime(newTime);
    const RemainingBookMark = markBlog.filter((bookmark)=> bookmark.id !== id);
    setMarkBlog(RemainingBookMark)
  }
  return (
    <div className='container max-w-6xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-8 my-8'>
      <Blogs handleMark={handleMark} handleTime={handleTime} ></Blogs>
      <Bookmark markBlog={markBlog} time={time}></Bookmark>
      </div>
     
    </div>
  )
}

export default App
