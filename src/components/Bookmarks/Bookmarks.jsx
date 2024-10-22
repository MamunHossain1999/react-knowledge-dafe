import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:1/3 ml-7 bg-gray-400">
            <h2 className="text-3xl">Bookmarked: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;