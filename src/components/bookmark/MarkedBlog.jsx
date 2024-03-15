
const MarkedBlog = ({markBlog}) => {
    const {title} = markBlog;
    return (
        <div className="bg-white p-6 rounded-lg mb-3">
            <h1>{title}</h1>
        </div>
    );
};

export default MarkedBlog;