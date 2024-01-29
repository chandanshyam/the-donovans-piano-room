"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { LoginFormSchema } from "@/lib/schema";


type Inputs = z.infer<typeof LoginFormSchema>;

export default function LogIn() {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    // const result = await addEntry(data)

    // if (!result) {
    //   console.log('Something went wrong')
    //   return
    // }

    // if (result.error) {
    //   // set local error state
    //   console.log(result.error)
    //   return
    // }

    // reset()
    // setData(result.data)

    reset();
    setData(data);
  };

  return (
    <section className="mx-auto flex w-96 flex-col items-center justify-center px-4 py-8 md:h-screen ">
      <section className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
          Login
        </h1>
        <form
          className="w-80 space-y-4 md:space-y-6"
          onSubmit={handleSubmit(processForm)}
        >
          <div>
            <label
              htmlFor="inputEmail"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              E-mail:
            </label>
            <input
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              type="e-mail"
              placeholder="Type your e-mail:"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              type="password"
              placeholder="Create your password"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>
          <button className="text-cente w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300" type="submit">
            Login
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            New here?{" "}
            <a
              href="#"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Create an account
            </a>
          </p>
        </form>
      </section>
      <div className='flex rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}
