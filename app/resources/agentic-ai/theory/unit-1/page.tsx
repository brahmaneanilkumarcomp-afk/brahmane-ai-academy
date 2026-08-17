import Link from "next/link";
import ResourceStats from "./ResourceStats";

const modules = [
  {
    id: 1,
    title: "Evolution of NLP, Transformers and LLMs",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/evolution-of-nlp.pdf",
    resourceId: 6,
  },

  {
    id: 2,
    title: "Transformer Architecture (Deep Dive)",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/transformers.pdf",
    resourceId: 7,
  },

  {
    id: 3,
    title: "Pre-training Objectives (Causal LM & Masked LM)",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/Pre-train.pdf",
    resourceId: 8,
  },

  {
    id: 4,
    title: "Tokenization (BPE & WordPiece)",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/tokenization.pdf",
    resourceId: 9,
  },

  {
    id: 5,
    title: "Scaling Laws & Emergent Abilities",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/scaling-laws.pdf",
    resourceId: 10,
  },

  {
    id: 6,
    title: "Overview of GPT, BERT, LLaMA & PaLM",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/LLAM-PaLM.pdf",
    resourceId: 11,
  },

  {
    id: 7,
    title: "Metrics & Evaluation of Large Language Models",
    type: "pdf",
    href: "/pdf/agentic-ai/unit-1/llm-evaluation.pdf",
    resourceId: 12,
  },
];

export default function Unit1Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}

      <section className="text-center mb-14">

        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          Unit I • CO1 • 9 Hours
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-700">
          Foundations of Large Language Models
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          This unit introduces the complete foundation of modern Large
          Language Models. Students will learn the evolution of NLP,
          Transformer Architecture, Tokenization, Pre-training Objectives,
          Scaling Laws, Popular LLMs, and Evaluation Metrics.
        </p>

      </section>


      {/* ============================================================
          LEARNING OUTCOMES
      ============================================================ */}

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


      {/* ============================================================
          UNIT MODULES
      ============================================================ */}

      <section>

        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Unit Modules
        </h2>

        <div className="space-y-5">

          {modules.map((module) => (

            <div
              key={module.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                border
                border-gray-200
                p-5
                hover:shadow-xl
                hover:border-blue-400
                transition-all
                duration-300
              "
            >

              {/* MODULE HEADER */}

              <div className="flex items-start gap-4">

                {/* GREEN CHECK */}

                <span className="text-green-600 font-bold text-xl mt-1">
                  ✓
                </span>


                {/* MODULE NUMBER */}

                <span className="text-blue-600 font-semibold text-sm min-w-[85px] mt-1">
                  Module {module.id}
                </span>


                {/* TOPIC + STATISTICS */}

                <div className="flex-1">

                  {/* PDF TOPIC LINK */}

                  <a
                    href={module.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-lg
                      font-semibold
                      text-gray-800
                      hover:text-blue-600
                      hover:underline
                      transition
                      cursor-pointer
                    "
                  >
                    {module.title}
                  </a>


                  {/* RESOURCE STATISTICS */}

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

      <div className="flex justify-between mt-16">

        <Link
          href="/resources/agentic-ai/theory"
          className="
            bg-gray-700
            hover:bg-gray-800
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          ← Theory Dashboard
        </Link>


        <Link
          href="/resources/agentic-ai/theory/unit-2"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
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