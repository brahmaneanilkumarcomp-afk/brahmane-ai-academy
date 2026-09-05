import Link from "next/link";

export default function ResourcesPage() {
  const subjects = [
    {
      title: "Agentic AI & LLM Systems",
      icon: "📘",
      link: "/resources/agentic-ai",
    },
    {
      title: "Applied Machine Learning for Industry Solutions",
      icon: "🧩",
      link: "/resources/applied-machine-learning",
    },
    {
      title: "Machine Learning",
      icon: "📊",
      link: "#",
    },
    {
      title: "Deep Learning",
      icon: "🧠",
      link: "#",
    },
    {
      title: "Python Programming",
      icon: "🐍",
      link: "#",
    },
    {
      title: "Data Science",
      icon: "📈",
      link: "#",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <section className="mb-8 sm:mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
          Learning Resources
        </h1>

        <p className="mt-3 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 max-w-4xl">
          Select a subject to access study notes, practicals,
          assignments, projects, interview questions, and learning
          materials.
        </p>

      </section>


      {/* =========================================================
          SUBJECT CARDS
      ========================================================= */}

      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          sm:gap-6
        "
      >

        {subjects.map((subject) => (

          <Link
            key={subject.title}
            href={subject.link}
            className="
              group
              bg-white
              border
              border-gray-200
              shadow-md
              rounded-2xl
              p-5
              sm:p-6
              hover:shadow-xl
              hover:border-blue-300
              transition-all
              duration-300
              active:scale-[0.99]
            "
          >

            <div className="flex items-center justify-between gap-4">

              {/* =================================================
                  ICON + CONTENT
              ================================================= */}

              <div className="flex items-center gap-4 min-w-0">

                {/* Icon */}

                <div
                  className="
                    flex-shrink-0
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                  "
                >
                  {subject.icon}
                </div>


                {/* Text */}

                <div className="min-w-0">

                  <h2
                    className="
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-bold
                      text-blue-700
                      leading-6
                      group-hover:text-blue-800
                      transition
                    "
                  >
                    {subject.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Open Learning Resources
                  </p>

                </div>

              </div>


              {/* =================================================
                  ARROW
              ================================================= */}

              <span
                className="
                  flex-shrink-0
                  text-2xl
                  sm:text-3xl
                  text-blue-600
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                →
              </span>

            </div>

          </Link>

        ))}

      </section>


      {/* =========================================================
          MOBILE FRIENDLY INFORMATION
      ========================================================= */}

      <section
        className="
          mt-8
          sm:mt-10
          bg-blue-50
          border
          border-blue-100
          rounded-2xl
          p-5
          sm:p-6
        "
      >

        <h2 className="text-lg sm:text-xl font-bold text-blue-700">
          Learn • Practice • Build
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6">
          Explore structured learning resources, practical examples,
          assignments, projects, and industry-oriented material designed
          for engineering students.
        </p>

      </section>

    </main>
  );
}