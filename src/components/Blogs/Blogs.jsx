import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookMark, handleTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <main className="md:w-2/3 ">
            <h2 className="text-4xl">blogs: {blogs.length}</h2>
            {
                blogs.map(blog =><Blog key={blog.id} handleTime={handleTime} handleBookMark={handleBookMark} blog={blog}></Blog>)
               
            }
        </main>
    );
};
Blogs.propTypes = {
    handleBookMark:PropTypes.func,
    handleTime:PropTypes.func
}
export default Blogs;