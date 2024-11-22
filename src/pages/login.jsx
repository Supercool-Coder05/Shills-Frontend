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
  
    console.log("Username:", username);
    console.log("Password:", password);
  
    try {
      console.log("Sending API request to http://54.146.185.76:8000/api/users/login");
  
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
  
      console.log("API Response:", response);
  
      if (response.status === 200) {
        console.log("Login Successful, Token:", response.data.token);
  
        toast.success("Login successful!");
  
        localStorage.setItem("token", response.data.token);
  
        setTimeout(() => navigate("/list"), 2000);
      } else {
        console.log("Login Failed:", response.data.message || "No message provided");
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
  
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
      }
  
      const errorMessage =
        error.response?.data?.message || "Username or Password is invalid";
      toast.error(errorMessage);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Container */}
      <img src="/chotu.svg" alt="Shills Bot Robot" className="w-full h-full shrink-0 sm:hidden" />

      <div
        style={{
          background: `linear-gradient(180deg, #3A76FF 5.23%, #173997 95%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
        }}
        className="hiddden sm:flex flex-col w-full md:w-1/2 justify-center items-center text-white"
      >
        <div className="flex flex-row items-center justify-center gap-6 hidden sm:flex">
          <img
            src="/shillsbotlogo.svg"
            alt="Shills Bot Logo"
            className="w-10"
          />
          <h1 className="text-3xl font-bold hidden sm:flex">Shills Bot</h1>
        </div>
        <div className="hidden sm:flex items-center justify-center h-1/2 mt-12 sm:mt-0">
  <img src="/Robot.svg" alt="Shills Bot Robot" className="w-64" />
</div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-6 md:px-0">
        <div className="w-full max-w-md -mt-36 sm:mt-0">
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
