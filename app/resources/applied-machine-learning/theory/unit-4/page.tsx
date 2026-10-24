
import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Model Evaluation Metrics",
    href: "/pdf/applied-machine-learning/unit-4/model-evaluation-metrics.pdf",
    resourceId: 66,
  },
  {
    id: 2,
    title: "Bias and Fairness in Machine Learning",
    href: "/pdf/applied-machine-learning/unit-4/bias-and-fairness-in-machine-learning.pdf",
    resourceId: 67,
  },
];

export default function Unit4Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* HERO SECTION */}
      <section className="text-center mb-10 sm:mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit IV • Evaluation & Ethics
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Applied Machine Learning for Industry Solutions
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800">
          Evaluation Metrics, Ethical Considerations, and Societal Impact of ML Models
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit explores how machine learning models are evaluated and
          introduces ethical considerations related to bias and fairness.
          It emphasizes responsible evaluation and the importance of
          understanding the potential societal impact of ML models.
        </p>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-sm sm:text-base text-gray-700">
          <li>
            ✅ Understand the purpose and importance of model evaluation metrics.
          </li>
          <li>
            ✅ Identify suitable evaluation metrics for assessing ML model performance.
          </li>
          <li>
            ✅ Understand the concepts of bias and fairness in machine learning.
          </li>
          <li>
            ✅ Recognize potential sources and consequences of bias in ML models.
          </li>
          <li>
            ✅ Explain the importance of fairness and responsible use of machine learning.
          </li>
          <li>
            ✅ Discuss ethical considerations and the potential societal impact of ML models.
          </li>
        </ul>
      </section>

      {/* UNIT MODULES */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8">
          Unit Modules
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-5 hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-green-600 font-bold text-xl mt-1 flex-shrink-0">
                  ✓
                </span>

                <span className="text-blue-600 font-semibold text-sm sm:text-base min-w-[75px] sm:min-w-[90px] mt-1 flex-shrink-0">
                  Topic {module.id}
                </span>

                <div className="flex-1 min-w-0">
                  <a
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-600 hover:underline transition cursor-pointer"
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

      {/* NAVIGATION */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 sm:mt-16">
        <Link
          href="/resources/applied-machine-learning/theory/unit-3"
          className="text-center bg-gray-700 hover:bg-gray-800 text-white px-5 sm:px-6 py-3 rounded-xl transition"
        >
          ← Previous Unit
        </Link>

        <Link
          href="/resources/applied-machine-learning/theory"
          className="text-center bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-xl transition"
        >
          Theory Dashboard →
        </Link>
      </div>
    </main>
  );
}
