import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    type: "pdf",
    href: "/pdf/applied-machine-learning/unit-1/introduction-to-machine-learning.pdf",
    resourceId: 1,
  },

  {
    id: 2,
    title: "Mathematical Foundations",
    type: "pdf",
    href: "/pdf/applied-machine-learning/unit-1/mathematical-foundations.pdf",
    resourceId: 3,
  },

  {
    id: 3,
    title: "Data Preprocessing and Exploration",
    type: "page",
    href: "/resources/applied-machine-learning/theory/unit-1/data-preprocessing",
    resourceId: 4,
  },

  {
    id: 4,
    title: "Introduction to Supervised Learning Algorithms",
    type: "page",
    href: "/resources/applied-machine-learning/theory/unit-1/supervised-learning",
    resourceId: 5,
  },

  {
    id: 5,
    title: "Model Evaluation and Validation",
    type: "pdf",
    href: "/pdf/applied-machine-learning/unit-1/model-evaluation-and-validation.pdf",
    resourceId: 6,
  },
];

export default function Unit1Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}

      <section className="text-center mb-10 sm:mb-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit I • CO1 • 9 Hours
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Fundamentals of Applied Machine Learning
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces the fundamentals of Machine Learning,
          mathematical foundations, data preprocessing, supervised learning
          algorithms, and model evaluation and validation techniques.
        </p>

      </section>


      {/* ============================================================
          LEARNING OUTCOMES
      ============================================================ */}

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12">

        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-sm sm:text-base text-gray-700">

          <li>
            ✅ Understand the fundamentals and types of Machine Learning.
          </li>

          <li>
            ✅ Understand mathematical foundations required for ML algorithms.
          </li>

          <li>
            ✅ Apply data preprocessing and exploration techniques.
          </li>

          <li>
            ✅ Understand supervised learning algorithms and their applications.
          </li>

          <li>
            ✅ Understand model evaluation, overfitting, underfitting,
            and cross-validation.
          </li>

        </ul>

      </section>


      {/* ============================================================
          UNIT MODULES
      ============================================================ */}

      <section>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8">
          Unit Modules
        </h2>

        <div className="space-y-4 sm:space-y-5">

          {modules.map((module) => (

            <div
              key={module.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                p-4
                sm:p-5
                hover:shadow-xl
                hover:border-blue-400
                transition-all
                duration-300
              "
            >

              {/* ====================================================
                  MODULE HEADER
              ==================================================== */}

              <div className="flex items-start gap-3 sm:gap-4">

                {/* GREEN CHECK */}

                <span className="text-green-600 font-bold text-xl mt-1 flex-shrink-0">
                  ✓
                </span>


                {/* MODULE NUMBER */}

                <span
                  className="
                    text-blue-600
                    font-semibold
                    text-sm
                    sm:text-base
                    min-w-[75px]
                    sm:min-w-[90px]
                    mt-1
                    flex-shrink-0
                  "
                >
                  Module {module.id}
                </span>


                {/* TOPIC + STATISTICS */}

                <div className="flex-1 min-w-0">

                  {/* ==================================================
                      RESOURCE LINK
                  ================================================== */}

                  {module.type === "pdf" ? (

                    <a
                      href={module.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-gray-800
                        hover:text-blue-600
                        hover:underline
                        transition
                        cursor-pointer
                      "
                    >
                      📄 {module.title}
                    </a>

                  ) : (

                    <Link
                      href={module.href}
                      className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-gray-800
                        hover:text-blue-600
                        hover:underline
                        transition
                        cursor-pointer
                      "
                    >
                      📄 {module.title}
                    </Link>

                  )}


                  {/* ==================================================
                      VIEWS / LIKES / DOWNLOADS
                  ================================================== */}

                  <ResourceStats
                    resourceId={module.resourceId}
                    resourceUrl={module.href}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ============================================================
          NAVIGATION
      ============================================================ */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-between
          gap-4
          mt-10
          sm:mt-16
        "
      >

        {/* PREVIOUS / DASHBOARD */}

        <Link
          href="/resources/applied-machine-learning/theory"
          className="
            text-center
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-5
            sm:px-6
            py-3
            rounded-xl
            transition
          "
        >
          ← Theory Dashboard
        </Link>


        {/* NEXT UNIT */}

        <Link
          href="/resources/applied-machine-learning/theory/unit-2"
          className="
            text-center
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            sm:px-6
            py-3
            rounded-xl
            transition
          "
        >
          Next Unit →
        </Link>

      </div>

    </main>
  );
}

