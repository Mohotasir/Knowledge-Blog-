import PropTypes from 'prop-types'
import { FcBookmark } from "react-icons/fc";

const Blog = ({blog,handleMark,handleTime}) => {
    const {id,author,cover,title,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='border-b-2  pt-8 pb-4'>
            <img className='w-[100%] rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center justify-center pt-4'>
                    <img className='w-[50px] h-[50px]' src={author_img} alt="" />
                    <div className='ml-2'>
                        <h2 className='text-lg font-bold '>{author}</h2>
                        <p className='text-gray-500 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='mr-2 font-semibold text-lg text-gray-700'>{reading_time} min read</p>
                    <a onClick={()=>handleMark(blog)} className='text-3xl cursor-pointer'> < FcBookmark /></a>
                    

                </div>
            </div>
            <h2 className='py-3 text-2xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=>
                        <span className='mr-2 text-gray-400 text-base' key={idx}>#{hash}</span>
                    )
                }
            </p>
            <a onClick={()=> handleTime(reading_time,id)}  className='my-4 text-blue-800 cursor-pointer font-semibold text-md border-b-2 border-blue-800'>Mark as read</a>
        </div>
    );
};

Blog.PropTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;