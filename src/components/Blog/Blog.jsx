import PropTypes from 'prop-types'


const Blog = ({blog}) => {
    console.log(blog)
    const [blog, setBlog] = useState()
    return (
        <div>
            
        </div>
    );
};
Blog.proptype = {
    blog:PropTypes.object.isRequired
}
export default Blog;