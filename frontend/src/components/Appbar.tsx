import { Link } from "react-router-dom";
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react";

const Appbar = () => {
  const [user, setUser] = useState<string>();
  useEffect(() => {
    const token = localStorage.getItem("mediumToken");
    if (!token) {
      setUser("");
    }
    const myDecodedToken = decodeToken(token as string) as {
      email: string;
      id: string;
      name: string;
    };
    setUser(myDecodedToken.name);
    console.log(myDecodedToken);
  }, []);
  return (
    <div className="border-b flex items-center justify-between px-12 py-4 font-inter">
      <Link to={"/blogs"} className="font-medium">
        Medium
      </Link>
      {user !== "" ? (
        <div className="flex items-center gap-2">
          <Link
            to={"/publish"}
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            New
          </Link>

          <div className="w-8 h-8 rounded-full bg-slate-400 text-white flex justify-center items-center">
            {user?.[0].toUpperCase()}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
      )}
    </div>
  );
};

export default Appbar;
