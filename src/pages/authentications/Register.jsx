import { Link } from "react-router-dom";
import { useState } from "react";
import registerImg from "./../../assets/images/Register.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1">
          <img className="rounded" src={registerImg} alt="" />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                PIN
              </label>
              <input
                type="number"
                name="Pin"
                id="pin"
                placeholder="Enter A New Pin"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("pin")}
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Number
              </label>
              <input
                type="number"
                name="number"
                id="Number"
                placeholder="Enter A Valid Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("number")}
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  {...register("password", {
                    required: "Password is required",
                  })}
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
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>
            <label className="label">
              <a
                href="#"
                className="block text-base font-medium text-[#07074D]"
              >
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold hover:bg-blue-400 transition duration-700 text-white outline-none"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="text-center">
            Already Have An Account?
            <Link className="font-bold ml-2 text-green-500" to="/login">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
