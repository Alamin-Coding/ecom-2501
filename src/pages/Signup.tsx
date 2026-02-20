import { Link } from "react-router";
import Button1 from "../components/Button1";
import { google, signup } from "../constant/constant";
import { useState } from "react";

interface UserData {
  fullName: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {

  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   

    // signup(userData.email, userData.password);
  };

  return (
    <div className="relative">
      <div className="absolute hidden lg:block ">
        <img src={signup} alt="image" />
      </div>

      <div className="container mt-15">
        <div className=" ml-12 lg:ml-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-[120px]">
          <div></div>

          <h1 className=" ml-20 text-5xl font-extrabold dark:text-amber-50 lg:hidden">Exclusive</h1>

          <div className=" py-14 lg:py-[125px] max-w-[370px]">
            <h2 className="font-inter text-[36px] font-medium mb-6">
              Create an account
            </h2>
            <p className="font-poppins mb-12">Enter your details below</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 font-poppins text-gray-500">
              <input
                className="pb-2 border-b border-button dark:border-white dark:text-white focus:outline-none"
                name="email"
                type="email"
                placeholder="Email or Phone Number"
                value={userData.email}
                onChange={handleChange}
              />

              <input
                className="pb-2 border-b border-button dark:border-white dark:text-white focus:outline-none"
                name="fullName"
                type="text"
                placeholder="Name"
                value={userData.fullName}
                onChange={handleChange}
              />

              <input
                className="pb-2 border-b border-button dark:border-white dark:text-white mb-8 focus:outline-none"
                name="password"
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
              />

              <button className= "bg-button2 hover:bg-red-600 transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm w-full ">
                Create Account
              </button>
            </form>

            <Button1  className="mb-8 mt-8 flex gap-4 w-full justify-center items-center font-normal">
              <img src={google} alt="icon" />
              Sign up with Google
            </Button1>

            <p className="font-poppins text-center">
              Already have an account?
              <Link
                className="font-medium ml-4 underline underline-offset-8"
                to="/login"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
