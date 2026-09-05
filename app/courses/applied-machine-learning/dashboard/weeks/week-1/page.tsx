"use client";

import Link from "next/link";
import { useState } from "react";

export default function Week1Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Applied Machine Learning
            </p>
            <h1 className="text-lg font-bold text-gray-900">
              Week 1 of 12
            </h1>
          </div>

          <Link
            href="/courses/applied-machine-learning/dashboard"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-purple-700 p-8 text-white shadow-xl md:p-12">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            WEEK 1 • INTRODUCTION
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Introduction to Machine Learning
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
            Understand the foundations of Machine Learning, its relationship
            with Artificial Intelligence and Deep Learning, and how Machine
            Learning is used to solve real-world industry problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              🎓 Beginner → Advanced
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              ⏱️ Approximately 6 Hours
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              📚 Theory + Practical
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl space-y-10 px-6 pb-16">
        {/* LEARNING OBJECTIVES */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-6">
            <span className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Section 01
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              🎯 Learning Objectives
            </h2>
          </div>

          <p className="mb-6 text-gray-600">
            By the end of Week 1, you should be able to:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Explain the concept of Machine Learning.",
              "Differentiate Artificial Intelligence, Machine Learning and Deep Learning.",
              "Identify the major types of Machine Learning.",
              "Explain the basic Machine Learning workflow.",
              "Identify real-world applications of Machine Learning.",
              "Understand why data is important for Machine Learning.",
            ].map((objective, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-xl bg-blue-50 p-4"
              >
                <span className="font-bold text-blue-600">✓</span>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-6">
            <span className="text-sm font-bold uppercase tracking-wide text-purple-600">
              Section 02
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              🎥 Video Lecture
            </h2>
          </div>

          <p className="mb-6 text-gray-600">
            Watch the Week 1 lecture to understand the fundamentals of
            Machine Learning.
          </p>

          {/* VIDEO PLACEHOLDER */}
          <div className="flex aspect-video items-center justify-center rounded-2xl bg-gray-900">
            <div className="text-center text-white">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl">
                ▶
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Week 1 Lecture
              </h3>

              <p className="mt-2 text-sm text-gray-300">
                Introduction to Machine Learning
              </p>

              <p className="mt-4 text-xs text-gray-400">
                Your lecture video will be embedded here.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-purple-50 p-4">
            <p className="text-sm text-purple-800">
              🎧 The video lecture will contain both the visual presentation
              and your lecture audio.
            </p>
          </div>
        </section>

        {/* STUDY NOTES */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wide text-green-600">
              Section 03
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              📖 Study Notes
            </h2>
          </div>

          <div className="space-y-8">
            {/* What is ML */}
            <article>
              <h3 className="text-2xl font-bold text-gray-900">
                1. What is Machine Learning?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Machine Learning is a branch of Artificial Intelligence that
                enables computer systems to learn patterns from data and use
                those patterns to make predictions or decisions without being
                explicitly programmed for every individual case.
              </p>

              <div className="mt-5 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="font-semibold text-blue-900">
                  Key Idea
                </p>

                <p className="mt-2 text-blue-800">
                  Data → Learning Patterns → Model → Prediction / Decision
                </p>
              </div>
            </article>

            {/* AI ML DL */}
            <article>
              <h3 className="text-2xl font-bold text-gray-900">
                2. AI vs Machine Learning vs Deep Learning
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <h4 className="text-xl font-bold text-blue-700">
                    Artificial Intelligence
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The broader field of creating systems capable of performing
                    tasks that normally require human intelligence.
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-6">
                  <h4 className="text-xl font-bold text-purple-700">
                    Machine Learning
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    A subset of AI where systems learn patterns from data to
                    make predictions or decisions.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-6">
                  <h4 className="text-xl font-bold text-green-700">
                    Deep Learning
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    A subset of Machine Learning that uses multi-layer neural
                    networks to learn complex representations.
                  </p>
                </div>
              </div>
            </article>

            {/* Types */}
            <article>
              <h3 className="text-2xl font-bold text-gray-900">
                3. Types of Machine Learning
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-xl font-bold text-blue-700">
                    Supervised Learning
                  </h4>

                  <p className="mt-2 leading-7 text-gray-600">
                    The model learns from labelled data where the desired
                    output is known.
                  </p>

                  <p className="mt-3 font-medium text-gray-700">
                    Examples: House price prediction, spam detection,
                    disease classification.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-xl font-bold text-purple-700">
                    Unsupervised Learning
                  </h4>

                  <p className="mt-2 leading-7 text-gray-600">
                    The model identifies patterns or structures in data
                    without predefined output labels.
                  </p>

                  <p className="mt-3 font-medium text-gray-700">
                    Examples: Customer segmentation and clustering.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-xl font-bold text-green-700">
                    Reinforcement Learning
                  </h4>

                  <p className="mt-2 leading-7 text-gray-600">
                    An agent learns through interaction with an environment by
                    receiving rewards or penalties.
                  </p>

                  <p className="mt-3 font-medium text-gray-700">
                    Examples: Robotics, game-playing systems and autonomous
                    decision-making.
                  </p>
                </div>
              </div>
            </article>

            {/* Workflow */}
            <article>
              <h3 className="text-2xl font-bold text-gray-900">
                4. Machine Learning Workflow
              </h3>

              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {[
                  "Collect Data",
                  "Clean & Prepare",
                  "Train Model",
                  "Evaluate Model",
                  "Tune Model",
                  "Make Predictions",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gray-50 p-5 text-center"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="mt-3 font-semibold text-gray-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* INDUSTRY EXAMPLES */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wide text-orange-600">
              Section 04
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              💡 Industry Examples
            </h2>

            <p className="mt-3 text-gray-600">
              Machine Learning is widely used across different industries.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏦",
                title: "Banking & Finance",
                text: "Credit risk assessment, fraud detection and customer analytics.",
              },
              {
                icon: "🏭",
                title: "Manufacturing",
                text: "Predictive maintenance, quality inspection and process optimization.",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                text: "Medical image analysis, risk prediction and clinical decision support.",
              },
              {
                icon: "🛒",
                title: "Retail",
                text: "Recommendation systems, demand forecasting and customer segmentation.",
              },
              {
                icon: "🌾",
                title: "Agriculture",
                text: "Crop prediction, disease detection and smart farming.",
              },
              {
                icon: "🚗",
                title: "Automotive",
                text: "Driver assistance, predictive maintenance and autonomous systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PRACTICAL */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wide text-indigo-600">
              Section 05
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              💻 Practical
            </h2>
          </div>

          <div className="rounded-2xl bg-indigo-50 p-6">
            <h3 className="text-2xl font-bold text-indigo-900">
              Your First Machine Learning Experiment
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              In this practical activity, you will become familiar with the
              basic Python environment used for Machine Learning.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>✓ Open Jupyter Notebook or VS Code.</p>
              <p>✓ Import NumPy and Pandas.</p>
              <p>✓ Load a small dataset.</p>
              <p>✓ Explore the dataset.</p>
              <p>✓ Identify features and target variables.</p>
              <p>✓ Discuss how the data could be used to train an ML model.</p>
            </div>

            <button
              type="button"
              className="mt-7 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Open Practical →
            </button>
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wide text-pink-600">
              Section 06
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              🧠 Think & Apply
            </h2>
          </div>

          <div className="rounded-2xl bg-pink-50 p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Activity: Identify the Machine Learning Problem
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              A bank wants to predict whether a customer applying for a loan
              is likely to repay the loan based on historical customer data.
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              Question:
            </p>

            <p className="mt-2 text-gray-700">
              What type of Machine Learning problem is this?
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setShowAnswer(true)}
                className="rounded-xl border border-gray-300 bg-white p-4 text-left font-medium transition hover:border-blue-500 hover:bg-blue-50"
              >
                Supervised Learning
              </button>

              <button
                type="button"
                className="rounded-xl border border-gray-300 bg-white p-4 text-left font-medium transition hover:border-blue-500 hover:bg-blue-50"
              >
                Unsupervised Learning
              </button>

              <button
                type="button"
                className="rounded-xl border border-gray-300 bg-white p-4 text-left font-medium transition hover:border-blue-500 hover:bg-blue-50"
              >
                Reinforcement Learning
              </button>

              <button
                type="button"
                className="rounded-xl border border-gray-300 bg-white p-4 text-left font-medium transition hover:border-blue-500 hover:bg-blue-50"
              >
                No Machine Learning
              </button>
            </div>

            {showAnswer && (
              <div className="mt-5 rounded-xl bg-green-100 p-4 text-green-800">
                <strong>Correct concept:</strong> This is a supervised
                learning problem because historical examples contain known
                outcomes that can be used to train a predictive model.
              </div>
            )}
          </div>
        </section>

        {/* QUIZ */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-10">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-wide text-red-600">
              Section 07
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              📝 Week 1 Knowledge Check
            </h2>

            <p className="mt-3 text-gray-600">
              Test your understanding of the fundamental concepts covered in
              Week 1.
            </p>
          </div>

          <div className="rounded-2xl bg-red-50 p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Ready to take the quiz?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The Week 1 assessment will contain multiple-choice questions
              covering AI, Machine Learning, types of ML, workflows and
              industry applications.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Start Week 1 Quiz →
            </button>
          </div>
        </section>

        {/* COMPLETION */}
        <section className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg md:p-10">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              {completed ? "✓" : "🎓"}
            </div>

            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              {completed ? "Week 1 Completed!" : "Complete Week 1"}
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {completed
                ? "Excellent work! You have completed the Week 1 learning module."
                : "Complete the learning activities and mark Week 1 as completed when you are ready."}
            </p>

            {!completed && (
              <button
                type="button"
                onClick={() => setCompleted(true)}
                className="mt-7 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                ✅ Mark Week 1 Complete
              </button>
            )}

            {completed && (
              <Link
                href="/courses/applied-machine-learning/dashboard/weeks/week-2"
                className="mt-7 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to Week 2 →
              </Link>
            )}
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/courses/applied-machine-learning/dashboard"
            className="rounded-xl border-2 border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            ← Back to Dashboard
          </Link>

          <Link
            href="/courses/applied-machine-learning/dashboard/weeks/week-2"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Go to Week 2 →
          </Link>
        </div>
      </div>
    </main>
  );
}