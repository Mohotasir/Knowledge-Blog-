import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleMark,handleTime}) => {
    const [blogs,setBlogs] =  useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then((res)=> res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="w-2/3">
           {
            blogs.map((blog,idx) => 
                <Blog key={idx} blog={blog} handleMark={handleMark} handleTime={handleTime} ></Blog>
                )
           }
        </div>
    );
};

export default Blogs;