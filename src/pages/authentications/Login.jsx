import { useState } from "react";
import image from "./../../assets/images/Sign-in.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post("/login", data);
      console.log(response.data);
      Swal.fire({
        title: 'Login Successful',
        icon: "success",
        text: "Welcome back!",
        timer: 2000
      });
    } catch (error) {
      Swal.fire({
        title: 'Wrong Credential',
        icon: "error",
        text: "Try Again With Correct Email/Phone and Password",
        timer: 2000
      });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex-1">
        <img src={image} alt="Login" />
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Email or Phone Number
            </label>
            <input
              type="text"
              name="identifier"
              placeholder="Enter Your Email or Phone Number"
              {...register("identifier", { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
                {...register("password", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
              <span
                className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                ) : (
                  <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>
          <label className="label">
            <a href="#" className="block text-base font-medium text-[#8484a1]">
              Forgot password?
            </a>
          </label>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          Want to Join Us?
          <Link className="font-bold ml-2 text-green-500" to="/register">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
