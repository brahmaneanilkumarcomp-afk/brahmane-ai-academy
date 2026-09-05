"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();

setLoading(true);
setErrorMessage("");

const { data, error } = await supabase.auth.signInWithPassword({
  email: email.trim(),
  password,
});

if (error) {
  console.error("Login error:", error);

  setErrorMessage(error.message);
  setLoading(false);
  return;
}

if (data.user) {
  console.log("Login successful:", data.user.email);

  router.push("/courses/applied-machine-learning/dashboard");
  router.refresh();
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
          Student Login
        </h1>

        <p className="mt-3 text-gray-600">
          Login to access your Applied Machine Learning course.
        </p>

      </div>


      {/* ERROR MESSAGE */}

      {errorMessage && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          {errorMessage}
        </div>
      )}


      {/* LOGIN FORM */}

      <form
        onSubmit={handleLogin}
        className="mt-8 space-y-5"
      >

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
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


        {/* LOGIN BUTTON */}

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
          {loading ? "Logging in..." : "Login →"}
        </button>

      </form>


      {/* SIGNUP */}

      <div className="mt-6 text-center text-sm text-gray-600">

        New student?{" "}

        <Link
          href="/auth/signup"
          className="font-semibold text-blue-700 hover:underline"
        >
          Create an account
        </Link>

      </div>


      {/* BACK */}

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
