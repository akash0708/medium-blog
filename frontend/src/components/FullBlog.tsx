import { Blog } from "../hooks";
import Appbar from "./Appbar";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Appbar />
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-5xl py-4 font-inter">
          <div className="col-span-8 flex flex-col gap-4">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div>{blog.content}</div>
          </div>
          <div className="col-span-4 text-center">
            {blog.author.name || "Anonymous"}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;
