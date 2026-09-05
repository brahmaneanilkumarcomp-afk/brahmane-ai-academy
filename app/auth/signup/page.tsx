"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

async function handleSignup(
e: React.FormEvent<HTMLFormElement>
) {
e.preventDefault();


setLoading(true);
setMessage("");
setErrorMessage("");

const { data, error } = await supabase.auth.signUp({
  email: email.trim(),
  password,
  options: {
    data: {
      full_name: fullName.trim(),
    },
  },
});

if (error) {
  console.error("Signup error:", error);

  setErrorMessage(error.message);
  setLoading(false);
  return;
}

if (data.user) {
  setMessage(
    "Account created successfully! Please check your email to confirm your account."
  );

  setFullName("");
  setEmail("");
  setPassword("");
}

setLoading(false);


}

return ( <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"> <div className="mx-auto flex min-h-screen max-w-md items-center px-6 py-12">


    <section className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">

      {/* HEADER */}

      <div className="text-center">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🎓 Brahmane AI Academy
        </span>

        <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
          Create Your Account
        </h1>

        <p className="mt-3 text-gray-600">
          Sign up to enroll in the Applied Machine Learning course.
        </p>

      </div>


      {/* SUCCESS MESSAGE */}

      {message && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700">
          {message}
        </div>
      )}


      {/* ERROR MESSAGE */}

      {errorMessage && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          {errorMessage}
        </div>
      )}


      {/* SIGNUP FORM */}

      <form
        onSubmit={handleSignup}
        className="mt-8 space-y-5"
      >

        {/* FULL NAME */}

        <div>

          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="name"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>


        {/* EMAIL */}

        <div>

          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

        </div>


        {/* PASSWORD */}

        <div>

          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            autoComplete="new-password"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              placeholder:text-gray-400
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

          <p className="mt-2 text-xs text-gray-500">
            Password must contain at least 6 characters.
          </p>

        </div>


        {/* CREATE ACCOUNT BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2
            focus:ring-blue-300
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading
            ? "Creating Account..."
            : "Create Account →"}
        </button>

      </form>


      {/* LOGIN */}

      <div className="mt-6 text-center text-sm text-gray-600">

        Already have an account?{" "}

        <Link
          href="/auth/login"
          className="font-semibold text-blue-700 hover:underline"
        >
          Login
        </Link>

      </div>


      {/* BACK TO ENROLLMENT */}

      <div className="mt-6 text-center">

        <Link
          href="/courses/applied-machine-learning/enroll"
          className="text-sm font-medium text-gray-500 transition hover:text-blue-700"
        >
          ← Back to Enrollment
        </Link>

      </div>

    </section>

  </div>
</main>


);
}
