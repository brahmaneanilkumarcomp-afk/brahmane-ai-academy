
import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Foundation Models and Generative AI",
    href: "/pdf/applied-machine-learning/unit-5/foundation-models-and-generative-ai.pdf",
    resourceId: 68,
  },
  {
    id: 2,
    title: "Graph Neural Networks (GNNs)",
    href: "/pdf/applied-machine-learning/unit-5/graph-neural-networks-gnns.pdf",
    resourceId: 69,
  },
  {
    id: 3,
    title: "Edge AI and On-device Learning",
    href: "/pdf/applied-machine-learning/unit-5/edge-ai-and-on-device-learning.pdf",
    resourceId: 70,
  },
  {
    id: 4,
    title: "AI in Emerging Domains",
    href: "/pdf/applied-machine-learning/unit-5/ai-in-emerging-domains.pdf",
    resourceId: 71,
  },
];

export default function Unit5Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* HERO SECTION */}
      <section className="text-center mb-10 sm:mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm sm:text-base">
          Unit V • Emerging Trends
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Applied Machine Learning for Industry Solutions
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800">
          Emerging Trends and Innovations in Applied Machine Learning
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-7 sm:leading-8">
          This unit introduces emerging developments in applied machine
          learning, including foundation models and generative AI, graph
          neural networks, edge AI and on-device learning, and the use of
          artificial intelligence in emerging domains. It explores modern
          approaches that extend machine learning capabilities across
          diverse applications and deployment environments.
        </p>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-sm sm:text-base text-gray-700">
          <li>
            ✅ Explain foundation models and their role in generative AI.
          </li>
          <li>
            ✅ Identify applications of generative AI in industry solutions.
          </li>
          <li>
            ✅ Understand the basic concepts and architecture of Graph Neural Networks.
          </li>
          <li>
            ✅ Recognize applications of GNNs for graph-structured data.
          </li>
          <li>
            ✅ Explain the concepts of Edge AI and on-device learning.
          </li>
          <li>
            ✅ Identify the benefits and challenges of deploying ML models on edge devices.
          </li>
          <li>
            ✅ Explore applications of AI across emerging domains.
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
          href="/resources/applied-machine-learning/theory/unit-4"
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
