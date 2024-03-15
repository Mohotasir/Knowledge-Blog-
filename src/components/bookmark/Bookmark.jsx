import MarkedBlog from "./MarkedBlog";

const Bookmark = ({markBlog,time}) => {
    return (
        <div className="w-1/3 py-8">
            <h2 className="p-4 border text-blue-500 bg-blue-100 rounded-lg border-blue-300 font-semibold text-xl">Spent time on read: {time} min</h2>
            <div className="bg-gray-200 rounded-md my-4 px-4 pb-4">
                <h2 className="py-4 font-bold">Book Marked Blogs: {markBlog.length}</h2>
                <div>
                    {
                        markBlog.map((blog,idx)=>
                         <MarkedBlog markBlog={blog} key={idx}></MarkedBlog>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Bookmark;