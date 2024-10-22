import PropTypes from 'prop-types'
import { BiSolidBookmarkStar } from "react-icons/bi";



const Blog = ({blog, handleBookMark,  handleTime}) => {
    const {title, cover,author_img , posted_date, reading_time, hashtags} = blog;
    // const [blog, setBlog] = useState()
    return (
        <div>
            <img className="w-full" src={cover} alt="" />
            
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-center place-items-center'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <span className=' ml-3 '>{posted_date}</span>
                </div>
                
                    
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookMark(blog)} className='ml-2 w-5'><BiSolidBookmarkStar></BiSolidBookmarkStar></button>
                </div>
                    
                
                
            </div>
            <h2 className='text-5xl mb-5'>{title}</h2> 
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleTime(reading_time)}>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBookMark:PropTypes.func,
    handleTime: PropTypes.func
}
export default Blog;