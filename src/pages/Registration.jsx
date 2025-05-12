import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add validation or API call logic here
  };

  return (
    <div className="flex items-center justify-center h-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-10 rounded-2xl shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-medium text-center text-[#025CA3] mb-8">
          REGISTER
        </h2>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-black mb-2 text-lg">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-black mb-2 text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter a email"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block text-black mb-2 text-lg">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute right-4 top-[52px] cursor-pointer text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-8 relative">
          <label className="block text-black mb-2 text-lg">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Re-enter password"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute right-4 top-[52px] cursor-pointer text-gray-600"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:cursor-pointer w-full bg-[#025CA3] text-white py-3 rounded-md text-lg hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
