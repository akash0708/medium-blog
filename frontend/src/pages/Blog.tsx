import BlogSkeleton from "../components/BlogSkeleton";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading || !blog) {
    return (
      <div className="py-10">
        <BlogSkeleton />
      </div>
    );
  }

  return <FullBlog blog={blog} />;
};

export default Blog;
