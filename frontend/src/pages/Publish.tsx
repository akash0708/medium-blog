import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const publishPost = async () => {
    try {
      // Make a POST request to the server to publish the post
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("mediumToken"),
          },
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Appbar />
      <div className="w-full flex justify-center px-2 py-4">
        <div className="w-full sm:w-3/5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title here"
          />
          <label
            htmlFor="content"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900"
          >
            Body
          </label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="resize-y  w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          ></textarea>
          <button
            type="button"
            onClick={publishPost}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mt-6"
          >
            Publish Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Publish;
