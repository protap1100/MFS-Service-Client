import { Link } from "react-router-dom";
import registerImg from "./../../assets/images/Register.jpg";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../../components/shared/SectionTitle";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const createdAt = Date();
    const userInfo = {
      name: data.name,
      email: data.email,
      pin: data.pin,
      number: data.number,
      status: "Pending",
      role: data.role,
      taka: data.role === "Agent" ? 10000 : 40,
      date: createdAt,
    };

    const saveUser = await axiosPublic.post("/users", userInfo);
    if (saveUser.data.insertedId) {
      reset(),
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"New Here?"}
        subHeading={"Join Us For Safely sending money"}
      >
      </SectionTitle>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1">
          <img className="rounded" src={registerImg} alt="" />
        </div>
        <ToastContainer></ToastContainer>
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
                name="pin"
                id="pin"
                placeholder="Enter A New Pin"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("pin", {
                  required: "PIN is required",
                  minLength: { value: 5, message: "PIN must be 5 digits" },
                  maxLength: { value: 5, message: "PIN must be 5 digits" },
                })}
              />
              {errors.pin && (
                <p className="text-red-600">{errors.pin.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select a role</option>
                <option value="User">User</option>
                <option value="Agent">Agent</option>
              </select>
              {errors.role && (
                <p className="text-red-600">{errors.role.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter A Valid Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("number", { required: "Number is required" })}
              />
              {errors.number && (
                <p className="text-red-600">{errors.number.message}</p>
              )}
            </div>
            <label className="label">
              <a
                href="#"
                className="block text-base font-medium text-[#07074D]"
              >
                Forgot PIN?
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
