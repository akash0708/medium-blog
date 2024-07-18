import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className="border-b font-inter max-w-2xl sm:w-4/5 p-4 cursor-pointer"
    >
      <div className="flex gap-2 items-center">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className="font-light">{authorName}</div>
        <div className="w-[3px] h-[3px] rounded-full bg-slate-500" />
        <div className="font-extralight text-sm text-slate-500">
          {publishedDate}
        </div>
      </div>
      <div className="font-semibold text-xl my-2">{title}</div>
      <div className="text-base font-light">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="font-extralight">
        {Math.ceil(content.length / 100)} min read
      </div>
    </Link>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden rounded-full bg-gray-600">
      <span className="font-medium font-inter text-gray-300">{name[0]}</span>
    </div>
  );
}
