"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { SignupFormSchema } from "@/lib/schema";

type Inputs = z.infer<typeof SignupFormSchema>;

export default function SignUp() {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignupFormSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
  };

  return (
    <section className="mx-auto flex w-96 flex-col items-center justify-center px-4 py-8 md:h-screen ">
      <section className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
          Sign Up
        </h1>
        <form
          className="w-80 space-y-4 md:space-y-6"
          onSubmit={handleSubmit(processForm)}
        >
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              First Name:
            </label>
            <input
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              type="text"
              placeholder="Type your first name"
              {...register("firstName")}
            />
            {errors.firstName?.message && (
              <p className="text-sm text-red-400">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Last Name:
            </label>
            <input
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              type="text"
              placeholder="Type your last name"
              {...register("lastName")}
            />
            {errors.lastName?.message && (
              <p className="text-sm text-red-400">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              E-mail address:
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Confirm your password
            </label>
            <input
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
              type="password"
              placeholder="Confirm you password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button className="text-cente w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300" type="submit">
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Login here
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
