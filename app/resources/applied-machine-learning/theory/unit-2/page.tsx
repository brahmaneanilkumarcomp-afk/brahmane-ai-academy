import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Exploratory Data Analysis (EDA)",
    href: "/pdf/applied-machine-learning/unit-2/exploratory-data-analysis-eda.pdf",
    resourceId: 32,
  },
  {
    id: 2,
    title: "Gradient Boosting - Step-by-Step Explanation",
    href: "/pdf/applied-machine-learning/unit-2/gradient-boosting-step-by-step-explanation.pdf",
    resourceId: 33,
  },
  {
    id: 3,
    title: "Random Forest Algorithm",
    href: "/pdf/applied-machine-learning/unit-2/random-forest-algorithm.pdf",
    resourceId: 34,
  },
  {
    id: 4,
    title: "Ensemble Learning in Machine Learning",
    href: "/pdf/applied-machine-learning/unit-2/ensemble-learning-in-machine-learning.pdf",
    resourceId: 35,
  },
  {
    id: 5,
    title: "K-Means Clustering",
    href: "/pdf/applied-machine-learning/unit-2/k-means-clustering.pdf",
    resourceId: 36,
  },
  {
    id: 6,
    title: "Hierarchical Clustering",
    href: "/pdf/applied-machine-learning/unit-2/hierarchical-clustering.pdf",
    resourceId: 37,
  },
  {
    id: 7,
    title: "DBSCAN - Density-Based Clustering Made Simple",
    href: "/pdf/applied-machine-learning/unit-2/dbscan-density-based-clustering-made-simple.pdf",
    resourceId: 38,
  },
];

export default function Unit2Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="text-center mb-10 sm:mb-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit II • CO2 • 9 Hours
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Applied Machine Learning for Industry Solutions
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces Exploratory Data Analysis, Ensemble
          Learning, Gradient Boosting, Random Forest, and important
          Clustering techniques including K-Means, Hierarchical
          Clustering, and DBSCAN.
        </p>

      </section>

      {/* =========================================================
          LEARNING OUTCOMES
      ========================================================= */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12">

        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-sm sm:text-base text-gray-700">

          <li>
            ✅ Understand the fundamentals of Exploratory Data Analysis
            and its importance in machine learning.
          </li>

          <li>
            ✅ Apply EDA techniques to understand datasets and identify
            patterns, trends, and anomalies.
          </li>

          <li>
            ✅ Understand Ensemble Learning and its applications.
          </li>

          <li>
            ✅ Understand the working principles of Random Forest and
            Gradient Boosting algorithms.
          </li>

          <li>
            ✅ Understand the concepts and applications of clustering
            algorithms.
          </li>

          <li>
            ✅ Apply K-Means, Hierarchical Clustering, and DBSCAN for
            unsupervised learning problems.
          </li>

          <li>
            ✅ Compare different machine learning algorithms for
            industry-oriented applications.
          </li>

        </ul>

      </section>

      {/* =========================================================
          UNIT MODULES
      ========================================================= */}
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

              <div className="flex items-start gap-3 sm:gap-4">

                {/* =================================================
                    CHECK
                ================================================= */}
                <span className="text-green-600 font-bold text-xl mt-1 flex-shrink-0">
                  ✓
                </span>

                {/* =================================================
                    MODULE NUMBER
                ================================================= */}
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

                {/* =================================================
                    TOPIC + STATISTICS
                ================================================= */}
                <div className="flex-1 min-w-0">

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

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
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

        <Link
          href="/resources/applied-machine-learning/theory/unit-1"
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
          ← Previous Unit
        </Link>

        <Link
          href="/resources/applied-machine-learning/theory"
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
          Theory Dashboard →
        </Link>

      </div>

    </main>
  );
}

