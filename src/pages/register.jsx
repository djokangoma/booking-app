import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    console.log(data);
    data.preventDefault();
    alert("${data.email} a été enregistré");
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
              {errors.phone && (
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
                placeholder="password"
                {...register("password", {
                  required: "ce champ est obligatoire",
                })}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                name="password"
                placeholder="confirm your password"
                {...register("password", {
                  required: "ce champ est obligatoire",
                })}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
          </div>

          <button
            className="flex w-full justify-center rounded-md bg-[#f07857] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Create user
          </button>

          <div className="flex gap-5  ">
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
              ALREADY HAVE AN ACCOUNT?{" "}
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
