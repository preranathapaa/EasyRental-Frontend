import { useFormik } from "formik";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLoginUserMutation } from "../app/auth/userApi";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../app/auth/usersSlice";

const LoginForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isloading }] = useLoginUserMutation();

  const dispatch = useDispatch();

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: ""


    },
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();

        console.log("Login Successfull:", response);

        const userData = response.Authuser;

        dispatch(addUser(userData));

        const token = response.token;
        console.log("token is", token)

        localStorage.setItem("token", token);


        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully Login.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        navigate(redirectPath);

      } catch (err) {
        console.log("Error while login", err);

        Swal.fire({
          icon: "error",
          title: err.data.message || "An error occurred",
          text: "There was an error while Login.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }
  })


  return (
    <div className="flex items-center justify-center h-auto  my-10">
      <form

        onSubmit={handleSubmit}

        className="bg-gray-200 p-10 rounded-2xl shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-medium text-center text-[#025CA3] mb-8">
          LOGIN
        </h2>

        <div className="mb-6">
          <label className="block text-black mb-2 text-lg">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="w-full px-5 py-2 border rounded-md text-lg outline-none"

            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-8 relative">
          <label className="block text-black mb-2 text-lg">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={values.password}
            className="w-full px-5 py-2 border rounded-md text-lg outline-none "

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
          loading={isloading}
          className=" hover:cursor-pointer w-full bg-[#025CA3] text-white py-3 rounded-md text-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
