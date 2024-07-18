import axios from "axios";
import { useEffect, useState } from "react";

export interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("mediumToken"),
        },
      })
      .then((response) => {
        setBlog(response.data.post);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("mediumToken"),
        },
      })
      .then((response) => {
        setBlogs(response.data.posts);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
};
