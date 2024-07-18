import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen font-inter">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Medium</h1>
          <p className="text-lg mt-4">
            A place to share knowledge and better understand the world
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to={"/signup"}
              className="text-black border border-black hover:bg-slate-300 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center mr-4"
            >
              Sign up
            </Link>
            <Link
              to={"/signin"}
              className="text-black border border-black hover:bg-slate-300 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
