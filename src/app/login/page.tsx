"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/store/store";

// Update schema to allow both username and email
const loginSchema = z.object({
  username: z.string().min(3, "Must be a valid email or username"), // Accepts email or username
  password: z.string().min(6, "Password must be at least 6 characters"), 
});

type LoginData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const { loading } = useSelector((state: RootState) => state.user);

  const onSubmit = async (data: LoginData) => {
    try {
      const result: any = await dispatch(loginUser(data));

      if (loginUser.fulfilled.match(result)) {
        setLoginError(null);
        router.push("/admin"); // Redirect to admin page
      } else {
        setLoginError(result.error.message || "Login failed");
      }
    } catch (error) {
      setLoginError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>
        {loginError && (
          <p className="text-red-500 text-center mb-4">{loginError}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Email or Username"
              {...register("username")}
              className={`w-full ${errors.username ? "border-red-500" : ""}`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.username.message)}
              </p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={`w-full ${errors.password ? "border-red-500" : ""}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.password.message)}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full !bg-primary text-white" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
