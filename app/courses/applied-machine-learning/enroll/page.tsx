"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";

export default function EnrollPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Applied Machine Learning course ID
  const COURSE_ID = 1;

  useEffect(() => {
    checkStudent();
  }, []);

  async function checkStudent() {
    setLoading(true);
    setMessage("");
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUserEmail(user.email ?? "");
    }

    setLoading(false);
  }

  async function handleEnrollment() {
    setEnrolling(true);
    setMessage("");
    setErrorMessage("");

    try {
      // Get currently logged-in student
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push(
          "/auth/login?redirect=/courses/applied-machine-learning/enroll"
        );
        return;
      }

      setUserEmail(user.email ?? "");

      // Check existing enrollment
      const { data: existingEnrollment, error: checkError } =
        await supabase
          .from("course_enrollments")
          .select("id, status")
          .eq("student_id", user.id)
          .eq("course_id", COURSE_ID)
          .maybeSingle();

      if (checkError) {
        console.error("Enrollment check error:", checkError);

        setErrorMessage(
          "Unable to check your enrollment. Please try again."
        );

        return;
      }

      // Student is already enrolled
      if (existingEnrollment) {
        router.push("/courses/applied-machine-learning/dashboard");
        return;
      }

      // Create new enrollment
      const { error: enrollmentError } = await supabase
        .from("course_enrollments")
        .insert({
          student_id: user.id,
          course_id: COURSE_ID,
          status: "active",
        });

      if (enrollmentError) {
        console.error("Enrollment error:", enrollmentError);

        setErrorMessage(
          "Unable to complete enrollment. Please try again."
        );

        return;
      }

      setMessage(
        "Enrollment successful! Redirecting to your dashboard..."
      );

      setTimeout(() => {
        router.push(
          "/courses/applied-machine-learning/dashboard"
        );
      }, 1000);
    } catch (error) {
      console.error("Unexpected enrollment error:", error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setEnrolling(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-12">

        <section className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">

          {/* HEADER */}

          <div className="text-center">

            <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              🎓 Course Enrollment
            </span>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Applied Machine Learning
            </h1>

            <p className="mt-3 text-gray-600">
              for Industry Solutions
            </p>

          </div>

          {/* COURSE INFORMATION */}

          <div className="mt-10 rounded-2xl bg-blue-50 p-6 text-center">

            <h2 className="text-xl font-bold text-blue-700">
              Ready to Start Learning?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Create your student account or log in to continue with
              enrollment and access the 12-week learning program.
            </p>

          </div>

          {/* LOGGED-IN STUDENT */}

          {!loading && userEmail && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-center">

              <p className="text-sm text-gray-600">
                Logged in as
              </p>

              <p className="mt-1 font-semibold text-green-700">
                {userEmail}
              </p>

            </div>
          )}

          {/* SUCCESS MESSAGE */}

          {message && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium text-green-700">
              {message}
            </div>
          )}

          {/* ERROR MESSAGE */}

          {errorMessage && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          {/* SIGNUP / LOGIN */}

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <Link
              href="/auth/signup"
              className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              New Student? Sign Up →
            </Link>

            <Link
              href="/auth/login?redirect=/courses/applied-machine-learning/enroll"
              className="rounded-xl border-2 border-blue-600 px-6 py-4 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Already Registered? Login →
            </Link>

          </div>

          {/* ENROLL BUTTON */}

          {!loading && userEmail && (
            <div className="mt-6">

              <button
                type="button"
                onClick={handleEnrollment}
                disabled={enrolling}
                className="w-full rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enrolling
                  ? "Processing Enrollment..."
                  : "Enroll Me in Applied Machine Learning →"}
              </button>

            </div>
          )}

          {/* BACK */}

          <div className="mt-8 text-center">

            <Link
              href="/courses/applied-machine-learning"
              className="font-medium text-gray-500 transition hover:text-blue-700"
            >
              ← Back to Course Details
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}

