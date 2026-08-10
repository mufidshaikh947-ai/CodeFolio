import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { Code2 } from "lucide-react";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { registerUser } from "../services/authService";

function RegisterPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  defaultValues: {
    plan: "free"
  }
});

  async function onSubmit(data) {
    setLoading(true);

    try {
      const response = await registerUser(data);

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xs sm:p-10">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
          <Code2 size={24} />
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Create Account
        </h1>

        <p className="mt-1.5 text-xs font-medium text-slate-500">
          Join CodeFolio and build your developer portfolio
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          register={register("name", {
            required: "Name is required",
          })}
          error={errors.name}
          autoComplete="name"
        />

        <Input
          label="Username"
          placeholder="Choose a username"
          register={register("username", {
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Only letters and numbers are allowed",
            },
          })}
          error={errors.username}
          autoComplete="username"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password}
          autoComplete="new-password"
        />
<div className="rounded-xl border border-slate-200 p-5">

  <h3 className="text-sm font-semibold text-slate-900">

    Choose Your Plan

  </h3>

  <p className="mt-1 text-xs text-slate-500">

    Select how you'd like to start using CodeFolio.

  </p>

  <label className="mt-5 flex cursor-pointer items-start gap-3">

    <input
      type="radio"
      value="free"
      {...register("plan")}
    />

    <div>

      <p className="font-semibold">

        Free

      </p>

      <p className="text-sm text-slate-500">

        Minimal template with all essential portfolio features.

      </p>

    </div>

  </label>

  <label className="mt-4 flex cursor-pointer items-start gap-3">

    <input
      type="radio"
      value="pro"
      {...register("plan")}
    />

    <div>

      <p className="font-semibold">

        Pro Preview

      </p>

      <p className="text-sm text-slate-500">

        Unlock premium features for evaluation purposes.

      </p>

    </div>

  </label>

</div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 w-full"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-8 text-center text-xs font-medium text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-bold text-blue-600 hover:text-blue-700 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;