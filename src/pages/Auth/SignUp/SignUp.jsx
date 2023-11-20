import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../../shared/GoogleSignIn";
import { useAuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuthContext();
  const [signInError, setSignInError] = useState();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name).then(() => {
          const userInfo = { name: data.name, email: data.email };
          fetch("https://nexiq-server.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                console.log(data);
                toast.success("Successfully sign up");
                navigate("/");
              }
            });
        });
      })

      .catch((error) => {
        const errorMessage = error.message;
        setSignInError(errorMessage);
      });
  };

  return (
    <section className="flex justify-center items-center py-6">
      <div className="md:w-96 border rounded-lg p-6 bg-white">
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black">
            Sign up
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label>
                <span className="text-black font-semibold text-sm">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label>
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full">
              <label>
                <span className="text-black font-semibold text-sm">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
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
              value="Sign up"
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
            <span className="text-gray-500">Already have a account ?</span>
            <Link to="/signIn" className="text-primary-700 font-semibold">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
