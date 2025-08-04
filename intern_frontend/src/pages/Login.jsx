import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4">

      {/* Login box */}
      <div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] w-full max-w-md text-white transition-all duration-300"
        style={{ height: "410px" }} //  Form box  height
      >
        {/* Flex container to vertically center form content */}
        <div className="flex flex-col justify-center h-full">

          {/* Login Heading */}
          <h2 className="text-3xl font-semibold text-center mb-6">Login to Portal</h2>

          {/* Email Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-6 mt-4 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-6 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
          />

          <p className="text-right text-sm text-white-500 hover:underline cursor-pointer mb-[29px]">
            Forgot Password?
          </p>

          {/* Button */}
          <button className="w-full mb-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
