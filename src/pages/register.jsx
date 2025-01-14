/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = async (data) => {
    setFormData(data);
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 100)
    );
    console.log(formData);
    console.log(formData.passwotd);
    console.log(formData.ConfirmPassword);
    if (response.success && data.password === formData.ConfirmPassword) {
      toast.success("User is added !");
    } else {
      toast.error("No match !");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                name="email"
                {...register("email", { required: "ce champ est obligatoire" })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                name="password"
                {...register("password", {
                  required: "ce champ est obligatoire",
                })}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                name="ConfirmPassword"
                {...register("ConfirmPassword", {
                  required: "ce champ est obligatoire",
                })}
              />
              {errors.ConfirmPassword && (
                <span style={{ color: "red" }}>
                  {errors.ConfirmPassword.message}
                </span>
              )}
            </div>
          </div>

          <button
            className="flex w-full justify-center rounded-md bg-[#f07857] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Create a User
          </button>

          <div className="flex gap-5  ">
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
              HAVE ALREADY AN ACCOUNT?{" "}
            </p>
            <Link to="/login">
              <button className=" w-48 h-10 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm border border-slate-300 hover:border-indigo-30">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
