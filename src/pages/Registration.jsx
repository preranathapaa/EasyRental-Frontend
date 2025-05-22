import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignuUserMutation } from "../app/auth/userApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const RegistrationForm = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signupUser, { isLoading }] = useSignuUserMutation()

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: ""
    },

    onSubmit: async (val) => {
      try {
        const response = await signupUser(val).unwrap();
        console.log("Registration successfull: ", response);

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have been successfully registered.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        navigate("/Login")
        
      } catch (err) {
        console.log("registration error: ", err);

        Swal.fire({
          icon: "error",
          title: err.data.error[0] || "An error occurred",
          text: "There was an error while registering.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        
      }
    }
  })


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
            name="name"
            onChange={handleChange}
            value={values.name}
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
            onChange={handleChange}
            value={values.email}
            required
            placeholder="Enter a email"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-black mb-2 text-lg">Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={values.address}
            required
            placeholder="Enter your address"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-black mb-2 text-lg">Phone</label>
          <input
            type="bigint"
            name="phone"
            onChange={handleChange}
            value={values.phone}
            required
            placeholder="Enter your phone number"
            className="w-full px-5 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5 relative">
          <label className="block text-black mb-2 text-lg">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={values.password}
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
