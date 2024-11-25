import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://54.146.185.76:8000/api/users/login/",
        {
          username: username.trim(),
          password: password.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/list"), 1000);
      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Username or Password is invalid";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-10 h-screen mb-4 sm:mb-0">
      {/* Left Container */}
      <img
            src="/chotu.jpg"
            alt="Shills Bot Logo"
            className="w-full h-full sm:hidden"
          />
      <div
        style={{
          background:
            "linear-gradient(180deg, #3A76FF 5.23%, #173997 95%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        }}
        className="hidden sm:flex flex-col w-full md:w-1/2 justify-center items-center text-white"
      >
        <div className="flex flex-row items-center justify-center -mb-10 gap-6">
          <img
            src="/shillsbotlogo.svg"
            alt="Shills Bot Logo"
            className="w-10 hidden sm:flex"
          />
        
          <h1 className="text-3xl font-bold hidden sm:flex">Shills Bot</h1>
        </div>
        <div className="hidden sm:flex items-center justify-center w-[642px] h-[702px] mt-12 sm:mt-0">
          <img src="/Robot.svg" alt="Shills Bot Robot" className="w-[642px] h-[702px]" />
        </div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-6 md:px-0">
        <div className="w-full max-w-md sm:mt-0">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-80 mb-6 text-center">
            Login to your account
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="block text-gray-60 text-sm font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your Username"
                className="w-full px-4 py-2 border border-blue-30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative flex flex-col">
              <label
                htmlFor="password"
                className="block text-gray-60 text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-9 cursor-pointer text-black"
              >
                {passwordVisible ? (
                  <EyeSlashIcon className="h-5 w-5 text-black" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-black" />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2D4381] text-white py-2 rounded-lg font-semibold hover:bg-blue-70 transition duration-30"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-gray-60 mt-4">
            Don't have an account?{" "}
            <a href="/consult" className="text-blue-600">
              Explore
            </a>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
