import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="py-10">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <>
      <Appbar />
      <div className="w-full flex flex-col items-center">
        {blogs.map((blog) => (
          <BlogCard
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="2nd Feb 2024"
            id={blog.id}
          />
        ))}
      </div>
    </>
  );
}
