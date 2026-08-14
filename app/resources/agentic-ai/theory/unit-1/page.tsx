import Link from "next/link";

const modules = [
  {
    title: "Evolution of NLP, Transformers and LLMs",
    href: "/pdf/agentic-ai/unit-1/evolution-of-nlp.pdf",
  },
  {
    title: "Transformer Architecture (Deep Dive)",
    href: "/pdf/agentic-ai/unit-1/transformers.pdf",
  },
  {
    title: "Pre-training Objectives (Causal LM & Masked LM)",
    href: "/pdf/agentic-ai/unit-1/Pre-train.pdf",
  },
  {
    title: "Tokenization (BPE & WordPiece)",
    href: "/pdf/agentic-ai/unit-1/tokenization.pdf",
  },
  {
    title: "Scaling Laws & Emergent Abilities",
    href: "/pdf/agentic-ai/unit-1/scaling-laws.pdf",
  },
  {
    title: "Overview of GPT, BERT, LLaMA & PaLM",
    href: "/pdf/agentic-ai/unit-1/LLAM-PaLM.pdf",
  },
  {
    title: "Metrics & Evaluation of Large Language Models",
    href: "/pdf/agentic-ai/unit-1/llm-evaluation.pdf",
  },
];

export default function Unit1Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* Hero Section */}

      <section className="text-center mb-14">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Unit I • CO1 • 9 Hours
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-blue-700">
          Foundations of Large Language Models
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          This unit introduces the complete foundation of modern Large
          Language Models. Students will learn the evolution of NLP,
          Transformer Architecture, Tokenization, Pre-training Objectives,
          Scaling Laws, Popular LLMs, and Evaluation Metrics.
        </p>

      </section>


      {/* Learning Outcomes */}

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12">

        <h2 className="text-2xl font-bold text-blue-700">
          Learning Outcomes
        </h2>

        <ul className="mt-5 space-y-3 text-gray-700">

          <li>
            ✅ Understand the evolution of Natural Language Processing.
          </li>

          <li>
            ✅ Explain Transformer Architecture in detail.
          </li>

          <li>
            ✅ Understand Pre-training Objectives.
          </li>

          <li>
            ✅ Learn Tokenization using BPE & WordPiece.
          </li>

          <li>
            ✅ Explain Scaling Laws & Emergent Abilities.
          </li>

          <li>
            ✅ Compare GPT, BERT, LLaMA and PaLM.
          </li>

          <li>
            ✅ Evaluate Large Language Models using standard metrics.
          </li>

        </ul>

      </section>


      {/* Unit Modules */}

      <section>

        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Unit Modules
        </h2>

        <div className="space-y-4">

          {modules.map((module, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition"
            >

              <div className="flex items-center gap-4">

                {/* Green Check */}

                <span className="text-green-600 font-bold text-xl">
                  ✓
                </span>


                {/* Module Number */}

                <span className="text-blue-600 font-semibold text-sm min-w-[80px]">
                  Module {index + 1}
                </span>


                {/* CLICKABLE TOPIC NAME */}

                <a
                  href={module.href}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 hover:underline transition cursor-pointer"
                >
                  {module.title}
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Navigation */}

      <div className="flex justify-between mt-16">

        <Link
          href="/resources/agentic-ai/theory"
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition"
        >
          ← Theory Dashboard
        </Link>

        <Link
          href="/resources/agentic-ai/theory/unit-2"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Next Unit →
        </Link>

      </div>

    </main>
  );
}