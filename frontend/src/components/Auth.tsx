import { SignupInput } from "@skified/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/${type}`,
        postInput
      );
      const jwt = await response.data.jwt;
      localStorage.setItem("mediumToken", jwt);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-inter">
      <div className="w-[60%] flex flex-col justify-center gap-4">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold">
            {type === "signup" ? "Create an account" : "Log in to your account"}
          </h1>
          <p className="text-slate-500">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <Link
              to={type === "signin" ? "/signup" : "/signin"}
              className="underline"
            >
              {type === "signin" ? "Sign Up" : "Sign in"}
            </Link>
          </p>
        </div>
        {type === "signup" ? (
          <LabelledInput
            label="Username"
            type="text"
            placeholder="John Doe"
            onChange={(e) =>
              setPostInput({ ...postInput, name: e.target.value })
            }
          />
        ) : null}
        <LabelledInput
          label="Email"
          type="email"
          placeholder="john@gmail.com"
          onChange={(e) =>
            setPostInput({ ...postInput, email: e.target.value })
          }
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="********"
          onChange={(e) =>
            setPostInput({ ...postInput, password: e.target.value })
          }
        />
        <button
          onClick={sendRequest}
          className="bg-black text-white py-2 rounded-lg mt-4"
        >
          {type === "signin" ? "Sign in" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 mt-2 text-sm font-semibold text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Auth;
