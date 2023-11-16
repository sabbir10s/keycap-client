import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../../shared/GoogleSignIn";
import { useAuthContext } from "../../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const { signIn } = useAuthContext();
  const [signInError, setSignInError] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setSignInError(errorMessage);
      });
  };

  return (
    <section className="flex justify-center items-center pt-6">
      <div className="md:w-96 border rounded-lg p-6">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black">
            Sign in
          </h2>
          <div className="text-sm">
            <p className="text-gray-500">Sign in as a:</p>
            <div className="space-x-2">
              <button
                className="text-primary-500 hover:text-secondary-500 duration-200"
                onClick={() => setEmail("user@gmail.com")}
              >
                user@gmail.com
              </button>
              <button
                className="text-primary-500 hover:text-secondary-500 duration-200"
                onClick={() => setEmail("admin@gmail.com")}
              >
                admin@gmail.com
              </button>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label>
                <span className="text-black font-semibold text-sm">
                  Your email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                defaultValue={email}
                autoFocus={true}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label>
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="w-full">
              <label>
                <span className="text-black font-semibold text-sm">
                  Password
                </span>
              </label>
              <input
                type="Password"
                placeholder="Password"
                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                defaultValue="123456"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label>
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <span className="label-text-alt text-red-500">{signInError}</span>
            <input
              type="submit"
              value="Sign in"
              className="bg-primary-700 hover:bg-primary-600 duration-300 text-white py-2 w-full rounded-lg cursor-pointer shadow-lg"
            />
          </form>

          <div className="flex items-center space-x-2">
            <div className="w-full border"></div>
            <span>OR</span>
            <div className="w-full border"></div>
          </div>
          <GoogleSignIn />
          <div className="text-sm flex flex-col space-y-1 justify-center items-center">
            <span className="text-gray-500">Don't have an account?</span>
            <Link to="/signUp" className="text-primary-700 font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
