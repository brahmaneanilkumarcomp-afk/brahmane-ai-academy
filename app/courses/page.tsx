import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Applied Machine Learning for Industry Solutions",
    description:
      "Learn Machine Learning from fundamentals to industry-oriented applications through structured theory, algorithms, practical examples, and projects.",
    level: "Beginner → Advanced",
    duration: "12 Weeks",
    category: "Machine Learning",
    href: "/courses/applied-machine-learning",
  },
  {
    id: 2,
    title: "Agentic AI & LLM Systems",
    description:
      "Learn Large Language Models, Prompt Engineering, RAG, Tool-Using Agents, Multi-Agent Systems, and Agentic AI applications.",
    level: "Intermediate → Advanced",
    duration: "12 Weeks",
    category: "Generative AI",
    href: "/courses/agentic-ai",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* HERO */}

      <section className="px-6 py-16 text-center">

        <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          🎓 Brahmane AI Academy
        </span>

        <h1 className="mt-5 text-4xl font-extrabold text-blue-700 md:text-5xl">
          AI & Machine Learning Courses
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Structured courses designed to help students understand
          Artificial Intelligence, Machine Learning, Generative AI,
          and emerging AI technologies through practical learning.
        </p>

      </section>


      {/* COURSES */}

      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="grid gap-8 md:grid-cols-2">

          {courses.map((course) => (

            <div
              key={course.id}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >

              {/* COURSE HEADER */}

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">

                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  {course.category}
                </span>

                <h2 className="mt-5 text-2xl font-bold leading-tight">
                  {course.title}
                </h2>

              </div>


              {/* COURSE CONTENT */}

              <div className="p-8">

                <p className="leading-7 text-gray-600">
                  {course.description}
                </p>


                {/* COURSE INFORMATION */}

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs font-semibold uppercase text-gray-500">
                      Level
                    </p>

                    <p className="mt-1 font-semibold text-blue-700">
                      {course.level}
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-4">
                    <p className="text-xs font-semibold uppercase text-gray-500">
                      Duration
                    </p>

                    <p className="mt-1 font-semibold text-purple-700">
                      {course.duration}
                    </p>
                  </div>

                </div>


                {/* BUTTON */}

                <Link
                  href={course.href}
                  className="
                    mt-7
                    block
                    w-full
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Explore Course →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

