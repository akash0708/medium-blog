import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b flex items-center justify-between px-12 py-4 font-inter">
      <div className="font-medium">Medium</div>
      <div className="flex items-center gap-2">
        <Link
          to={"/publish"}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center"
        >
          New
        </Link>

        <div className="w-8 h-8 rounded-full bg-slate-400 text-white flex justify-center items-center">
          A
        </div>
      </div>
    </div>
  );
};

export default Appbar;
