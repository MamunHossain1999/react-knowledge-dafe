import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:1/3 ml-7 bg-gray-400">
            <div>
            <h3>Reading Time: {readingTime}</h3>
        </div>
            <h2 className="text-3xl">Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;