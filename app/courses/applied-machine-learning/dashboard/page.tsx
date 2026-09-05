"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AppliedMachineLearningDashboard() {
const [studentName, setStudentName] = useState("Student");
const [studentEmail, setStudentEmail] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
async function loadStudent() {
const {
data: { user },
} = await supabase.auth.getUser();


  if (user) {
    setStudentEmail(user.email ?? "");

    const name =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      "Student";

    setStudentName(name);
  }

  setLoading(false);
}

loadStudent();


}, []);

async function handleLogout() {
await supabase.auth.signOut();
window.location.href = "/auth/login";
}

if (loading) {
return ( <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"> <div className="flex min-h-screen items-center justify-center"> <div className="text-center"> <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />


        <p className="mt-4 text-gray-600">
          Loading your dashboard...
        </p>
      </div>
    </div>
  </main>
);

}

return ( <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">


  {/* HEADER */}

  <header className="border-b border-gray-200 bg-white shadow-sm">

    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      <div>
        <p className="text-sm font-semibold text-blue-600">
          Brahmane AI Academy
        </p>

        <h1 className="text-xl font-bold text-gray-900">
          Student Dashboard
        </h1>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
      >
        Logout
      </button>

    </div>

  </header>


  {/* DASHBOARD */}

  <div className="mx-auto max-w-7xl px-6 py-10">

    {/* WELCOME */}

    <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white shadow-xl">

      <p className="text-sm font-medium text-blue-100">
        Welcome back 👋
      </p>

      <h2 className="mt-2 text-3xl font-extrabold">
        {studentName}
      </h2>

      {studentEmail && (
        <p className="mt-2 text-sm text-blue-100">
          {studentEmail}
        </p>
      )}

      <p className="mt-5 max-w-2xl leading-7 text-blue-50">
        Continue your learning journey in Applied Machine Learning
        and develop practical skills for real-world industry
        applications.
      </p>

    </section>


    {/* COURSE */}

    <section className="mt-8">

      <div className="mb-5">

        <h2 className="text-2xl font-bold text-gray-900">
          My Course
        </h2>

        <p className="mt-1 text-gray-600">
          Your enrolled learning program
        </p>

      </div>


      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">

        {/* COURSE HEADER */}

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-7 text-white">

          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
            Machine Learning
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            Applied Machine Learning for Industry Solutions
          </h3>

          <p className="mt-2 text-blue-100">
            Beginner → Advanced
          </p>

        </div>


        {/* COURSE DETAILS */}

        <div className="p-7">

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Duration
              </p>

              <p className="mt-1 text-xl font-bold text-blue-700">
                12 Weeks
              </p>
            </div>


            <div className="rounded-2xl bg-purple-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Course Level
              </p>

              <p className="mt-1 text-xl font-bold text-purple-700">
                Beginner → Advanced
              </p>
            </div>


            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm font-medium text-gray-500">
                Progress
              </p>

              <p className="mt-1 text-xl font-bold text-green-700">
                0%
              </p>
            </div>

          </div>


          {/* PROGRESS */}

          <div className="mt-7">

            <div className="mb-2 flex justify-between text-sm">

              <span className="font-semibold text-gray-700">
                Course Progress
              </span>

              <span className="font-semibold text-blue-600">
                0 / 12 Weeks
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-gray-200">

              <div className="h-full w-0 rounded-full bg-blue-600" />

            </div>

          </div>


          {/* START COURSE */}

          <div className="mt-7">

            <Link
              href="/courses/applied-machine-learning/dashboard/weeks/week-1"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Start Week 1 →
            </Link>

          </div>

        </div>

      </div>

    </section>


    {/* 12 WEEKS */}

    <section className="mt-10">

      <div className="mb-5">

        <h2 className="text-2xl font-bold text-gray-900">
          12-Week Learning Journey
        </h2>

        <p className="mt-1 text-gray-600">
          Your complete Applied Machine Learning course roadmap
        </p>

      </div>


      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {Array.from({ length: 12 }, (_, index) => {

          const week = index + 1;

          return (
            <Link
              key={week}
              href={`/courses/applied-machine-learning/dashboard/weeks/week-${week}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                  {week}
                </span>

                <span className="text-sm font-medium text-gray-400 group-hover:text-blue-600">
                  View →
                </span>

              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Week {week}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Learning content and activities
              </p>

            </Link>
          );
        })}

      </div>

    </section>

  </div>

</main>


);
}
