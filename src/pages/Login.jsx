import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-auto  my-10">
      <form
        onSubmit={handleLogin}
        className="bg-gray-200 p-10 rounded-2xl shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-medium text-center text-[#025CA3] mb-8">
          LOGIN
        </h2>

        <div className="mb-6">
          <label className="block text-black mb-2 text-lg">Email</label>
          <input
            type="email"
            className="w-full px-5 py-2 border rounded-md text-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-8 relative">
          <label className="block text-black mb-2 text-lg">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-5 py-2 border rounded-md text-lg outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div
            className="absolute right-4 top-[52px] text-gray-600 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className=" hover:cursor-pointer w-full bg-[#025CA3] text-white py-3 rounded-md text-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
