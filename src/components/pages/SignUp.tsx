"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../../operations/apiConnector";
import { endPoints } from "../../operations/api";
import toast from "react-hot-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

export function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const fetchData = async () => {
      let clock;
      try {
        setLoading(true);

        clock = setTimeout(() => {
          toast.loading(
            "Backend is hosted on free cluster. So it may take longer.",
            {
              duration: 7000,
              position: "bottom-left",
              style: {
                background: "#363636",
                color: "#fff",
              },
            }
          );
        }, 5000);

        await apiConnector({
          method: "post",
          url: endPoints.SIGN_UP,
          bodyData: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            username: data.username,
            passwrod: data.password,
          },
        });

        setLoading(false);

        toast.success("User Registered ", {
          duration: 3000,
          position: "bottom-left",
          style: {
            background: "#363636",
            color: "#fff",
          },
        });

        clearInterval(clock);
        navigate("/signin");
      } catch (error: any) {
        console.error("Error fetching data: ", error);
        toast.error(`${error?.response?.data?.message}`, {
          duration: 3000,
          position: "bottom-left",
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "10px",
          },
        });
        setLoading(false);
        clearInterval(clock);
      }
    };
    fetchData();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-950 via-gray-800 to-slate-700">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to BrainDock
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Create a new account
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Ashoke"
                type="text"
                {...register("firstname")}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Ghosh"
                type="text"
                {...register("lastname")}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="rito@gmail.com"
              type="email"
              {...register("email")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Username</Label>
            <Input
              id="password"
              placeholder="ritoG09"
              type="password"
              {...register("username")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              {...register("password")}
            />
            {!showPass ? (
              <span
                onClick={() => setShowPass((c) => !c)}
                className="absolute mt-[40px] text-xl ml-60 text-gray-800"
              >
                <IoEyeOff />
              </span>
            ) : (
              <span
                onClick={() => setShowPass((c) => !c)}
                className="absolute mt-[40px] text-xl ml-60 text-gray-800"
              >
                <IoEyeSharp />
              </span>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <h1 className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 flex align-middle justify-center">
            <span>Already have an account? </span>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign in &rarr;
              <BottomGradient />
            </button>{" "}
          </h1>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
