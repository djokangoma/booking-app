import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
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
    alert("${data.name} a été enregistré");
  };
  // {
  //   ('$formData.gender==="femme"? "enregistrée":"enregistré"');
  // }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div>
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
            Sign in
          </button>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
