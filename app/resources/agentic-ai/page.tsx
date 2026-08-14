import Link from "next/link";

export default function AgenticAIPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero Section */}

      <section className="text-center">

        <h1 className="text-5xl font-extrabold text-blue-700">
          Agentic AI & LLM Systems
        </h1>

        <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 leading-8">
          Master the complete ecosystem of Agentic AI, Large Language Models,
          Prompt Engineering, Retrieval-Augmented Generation (RAG),
          AI Agents, Model Context Protocol (MCP), Multi-Agent Systems,
          and modern enterprise AI applications through structured
          theory and practical learning.
        </p>

      </section>

      {/* Course Sections */}

      <section className="grid lg:grid-cols-2 gap-10 mt-16">

        {/* ================= THEORY ================= */}

        <div className="bg-white border border-blue-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300">

          <div className="text-center">

            <div className="text-6xl">📖</div>

            <h2 className="mt-5 text-3xl font-bold text-blue-700">
              Theory & Learning Resources
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Learn the complete theoretical foundation of Agentic AI,
              Transformers, LLMs, Prompt Engineering, RAG,
              AI Agents, MCP, and Industry Applications.
            </p>

          </div>

          <hr className="my-8" />

          <div className="space-y-3 text-gray-700">

            <p>✅ 14 Structured Learning Modules</p>

            <p>✅ Detailed PDF Notes</p>

            <p>✅ PowerPoint Presentations</p>

            <p>✅ Architecture Diagrams</p>

            <p>✅ Industry Case Studies</p>

            <p>✅ Interview Preparation</p>

            <p>✅ Previous & Next Lesson Navigation</p>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/resources/agentic-ai/theory"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              📖 View Theory Modules
            </Link>

          </div>

        </div>

        {/* ================= PRACTICAL ================= */}

        <div className="bg-white border border-green-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300">

          <div className="text-center">

            <div className="text-6xl">💻</div>

            <h2 className="mt-5 text-3xl font-bold text-green-700">
              Practical & Hands-on Labs
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Learn by implementing modern AI systems using Python,
              Gemini API, LangChain, Vector Databases,
              RAG Pipelines, AI Agents and real-world projects.
            </p>

          </div>

          <hr className="my-8" />

          <div className="space-y-3 text-gray-700">

            <p>✅ Practical Programs</p>

            <p>✅ Jupyter Notebooks</p>

            <p>✅ Python Source Code</p>

            <p>✅ Assignments</p>

            <p>✅ Mini Projects</p>

            <p>✅ Industry Projects</p>

            <p>✅ Complete End-to-End Implementations</p>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/resources/agentic-ai/practical"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              💻 View Practical Labs
            </Link>

          </div>

        </div>

      </section>

      {/* Bottom Quote */}

      <section className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-10 text-center">

        <h2 className="text-3xl font-bold">
          Learn AI the Right Way
        </h2>

        <p className="mt-4 text-lg max-w-3xl mx-auto leading-8">
          Build strong theoretical foundations and reinforce them through
          real-world practical implementations. This course is designed
          to bridge the gap between academic learning and industry-ready
          AI development.
        </p>

      </section>

    </main>
  );
}